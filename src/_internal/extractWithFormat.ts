import { InnerDateParsingObject } from 'src/types';

import units from '../units';
import { TZ_REGEX } from './autoExtract';

const { YEAR, MONTH, DATE, HOUR, MINUTE, SECOND, MILLISECOND, UTC_OFFSET } = units;

/** 转义正则特殊字符 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function extractWithFormat(input: string, format: string): number[] | string {
  // 定义占位符映射（格式符号 → 正则表达式）
  const tokenMap: Record<string, { regex: string, key: keyof InnerDateParsingObject }> = {
    YYYY: { regex: '(\\d{1,4})', key: YEAR }, // 年份
    MM: { regex: '(\\d{1,2})', key: MONTH }, // 月份
    DD: { regex: '(\\d{1,2})', key: DATE }, // 日期
    HH: { regex: '(\\d{1,2})', key: HOUR }, // 小时
    mm: { regex: '(\\d{1,2})', key: MINUTE }, // 分钟
    ss: { regex: '(\\d{1,2})', key: SECOND }, // 秒
    SSS: { regex: '(\\d{1,3})', key: MILLISECOND }, // 毫秒
    Z: { regex: '(Z|[+-]\\d{2}(?::?\\d{2})?)', key: UTC_OFFSET } // 时区
  };
  const tokens = Object.keys(tokenMap);

  // 构建正则表达式并提取日期部分
  // let regexString = '^';
  let regexString = '';
  const keys: Array<keyof InnerDateParsingObject> = [];
  let remaining = format;

  // 动态构建正则表达式
  while (remaining.length > 0) {
    let matched = false;
    for (const token of tokens) {
      if (remaining.startsWith(token)) {
        regexString += tokenMap[token].regex;
        keys.push(tokenMap[token].key);
        remaining = remaining.slice(token.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      regexString += escapeRegex(remaining[0]);
      remaining = remaining.slice(1);
    }
  }
  // regexString += '$';

  // 执行正则匹配
  const match = new RegExp(regexString).exec(input);
  if (!match) {
    return '';
  }

  // 提取日期组件
  const parts: number[] = [];
  keys.forEach((key, i) => {
    const value = match[i + 1];
    switch (key) {
      case YEAR:
        parts[0] = parseInt(value, 10);
        break;
      case MONTH:
        parts[1] = parseInt(value, 10) - 1; // 月份 0-based[1](@ref)
        break;
      case DATE:
        parts[2] = parseInt(value, 10);
        break;
      case HOUR:
        parts[3] = parseInt(value, 10);
        break;
      case MINUTE:
        parts[4] = parseInt(value, 10);
        break;
      case SECOND:
        parts[5] = parseInt(value, 10);
        break;
      case MILLISECOND:
        parts[6] = parseInt(value.padEnd(3, '0'), 10); // 补全毫秒[5](@ref)
        break;
      case UTC_OFFSET:
        if (value === 'Z') { // utc
          parts[7] = NaN;
        }
        else { // 匹配到类似+08:00
          const matches = TZ_REGEX.exec(value) as RegExpExecArray;
          parts[7] = +matches[2] * 60 + (matches[3] ? +matches[3] : 0);
        }
        break;
    }
  });

  return parts;
}
