import { InnerDateParsingObject } from 'src/types';

import units from '../units';
import { TZ_REGEX } from './autoExtract';

interface TokenConfig {
  key: keyof InnerDateParsingObject; // 日期部分对应的键
  pattern: string; // 匹配规则
}

const { YEAR, MONTH, DATE, HOUR, MINUTE, SECOND, MILLISECOND, UTC_OFFSET } = units;

/** 转义正则特殊字符 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function toInteger(val: string): number {
  return parseInt(val, 10);
}

function toMonth(val: string): number {
  return parseInt(val, 10) - 1;
}

function toMilliseconds(val: string): number {
  return parseInt(val.padEnd(3, '0'), 10);
}

function parseTimezone(val: string): number {
  if (val === 'Z') { // utc
    return NaN;
  }

  // 匹配到类似+08:00
  const matches = TZ_REGEX.exec(val) as RegExpExecArray;
  return +matches[2] * 60 + (matches[3] ? +matches[3] : 0);

}

// 定义占位符映射（格式符号 → 正则表达式）
const TOKEN_MAP: Record<string, TokenConfig> = {
  YYYY: { pattern: '(\\d{1,4})', key: YEAR }, // 年份
  // YY: { pattern: '(\\d{1,2})', key: YEAR }, // 年份
  MM: { pattern: '(\\d{1,2})', key: MONTH }, // 月份
  DD: { pattern: '(\\d{1,2})', key: DATE }, // 日期
  HH: { pattern: '(\\d{1,2})', key: HOUR }, // 小时
  mm: { pattern: '(\\d{1,2})', key: MINUTE }, // 分钟
  ss: { pattern: '(\\d{1,2})', key: SECOND }, // 秒
  SSS: { pattern: '(\\d{1,3})', key: MILLISECOND }, // 毫秒
  Z: { pattern: '(Z|[+-]\\d{2}(?::?\\d{2})?)', key: UTC_OFFSET } // 时区
};

const TOKEN_KEYS = Object.keys(TOKEN_MAP).sort((a, b) => (b.length - a.length));
// 生成原子化正则模板
const TOKEN_PATTERN = new RegExp(`(${TOKEN_KEYS.join('|')})`, 'g');

export default function extractWithFormat(input: string, format: string): number[] | string {
  // 构建正则表达式并提取日期部分
  const matchedTokens: string[] = [];
  const pattern = escapeRegex(format)
    .replace(TOKEN_PATTERN, (m) => {
      matchedTokens.push(m);
      return TOKEN_MAP[m].pattern;
    });

  // 执行正则匹配
  const match = new RegExp(pattern).exec(input);
  if (!match) {
    return '';
  }

  // 提取日期组件
  const parts: number[] = [];
  matchedTokens.forEach((token, i) => {
    const value = match[i + 1];
    switch (token) {
      case 'YYYY':
        parts[0] = toInteger(value);
        break;
      // case 'YY':
      //   parts[0] = toInteger(value);
      //   break;
      case 'MM':
        parts[1] = toMonth(value);
        break;
      case 'DD':
        parts[2] = toInteger(value);
        break;
      case 'HH':
        parts[3] = toInteger(value);
        break;
      case 'mm':
        parts[4] = toInteger(value);
        break;
      case 'ss':
        parts[5] = toInteger(value);
        break;
      case 'SSS':
        parts[6] = toMilliseconds(value);
        break;
      case 'Z':
        parts[7] = parseTimezone(value);
        break;
    }
  });

  return parts;
}
