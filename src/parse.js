import isString from 'celia/isString';
import forEach from 'celia/_forEach';
import loop from 'celia/_loop';
import isNil from 'celia/isNil';
import isNumber from 'celia/isNumber';
import isDate from 'celia/isDate';
import {
  EXTENDED_ISO_REGEX,
  BASIC_ISO_REGEX,
  DATES_REGEX,
  TIMES_REGEX,
  ASP_NET_JSON_REGEX,
  TZ_REGEX
} from './_regex';
import { TIMEZONE_OFFSET } from './_constants';
import parseArray from './_parseArray';

/**
 * 智能提取年月日时分秒
 * @param {String} input 时间字符串
 */
function extractFrom(input) {
  let allowTime, matches;
  let dateArr = [];
  const match = EXTENDED_ISO_REGEX.exec(input) || BASIC_ISO_REGEX.exec(input);
  if (match) {
    // 解析YYYY-MM-DD
    forEach(DATES_REGEX, (item, i) => {
      if ((matches = item[1].exec(match[1]))) {
        loop(0, 3, (i) => {
          dateArr[i] = parseInt(matches[i + 1] || 1, 10);
        });
        dateArr[1] -= 1;
        allowTime = item[2] !== false;
        return false;
      }
    });

    // 有可能是这种 +072019-08-06
    if (input.indexOf(dateArr[0])) {
      return input;
    }

    // 解析hh:mm:ss
    matches = null;
    if (match[3]) {
      forEach(TIMES_REGEX, (item) => {
        if ((matches = item[1].exec(match[3]))) {
          dateArr = dateArr.concat(matches.slice(1).map(n => parseInt(n, 10)));
          return false;
        }
      });
    }
    if (!allowTime && matches) {
      return dateArr;
    }
    matches = null;
    // 时区问题
    if (match[4]) {
      matches = TZ_REGEX.exec(match[4]);
      // 时区
      const offset = TIMEZONE_OFFSET;
      // 匹配到+08:00
      if (!matches[1]) {
        dateArr[3] -= matches[2];
        dateArr[4] -= matches[3] || 0;
      }
      // 统一成当前时区
      dateArr[4] -= offset;
    }
    return dateArr;
  } else {
    // 再试一次
    if (input.length === 4 && DATES_REGEX[4][1].test(input)) {
      dateArr = [parseInt(input, 10), 0, 1];
      dateArr.isUTC = true;
      return dateArr;
    }
    return input;
  }
}

/**
 * 解析字符串通过给定的字符串模版
 * @param {String|Array} input
 * @param {String} format
 */
function parseFromFormat(input, format) {
  const len = format.length;
  let arr = [];
  let isUTC = false;
  loop(0, len, (i) => {
    const ii = input.charAt(i);
    switch (format.charAt(i)) {
      case 'Y':
      case 'y':
        arr[0] = (arr[0] || '') + ii;
        break;
      case 'M':
        arr[1] = (arr[1] || '') + ii;
        break;
      case 'D':
      case 'd':
        arr[2] = (arr[2] || '') + ii;
        break;
      case 'H':
      case 'h':
        arr[3] = (arr[3] || '') + ii;
        break;
      case 'm':
        arr[4] = (arr[4] || '') + ii;
        break;
      case 's':
        arr[5] = (arr[5] || '') + ii;
        break;
      case 'S':
        arr[6] = (arr[6] || '') + ii;
        break;
      case 'Z':
        isUTC = true;
        break;
    }
  });
  // 转成数字
  arr = arr.map(item => parseInt(item, 10));
  if (isUTC) {
    let matches;
    // 解析秒后面的时区
    if ((matches = TZ_REGEX.exec(input.slice(format.indexOf('ZZ') > -1 ? -5 : -6)))) {
      // 时区
      const offset = TIMEZONE_OFFSET;
      // 匹配到类似+08:00
      if (!matches[1]) {
        // 如果在东区，需要减去时区
        const eastOrWest = matches[0].charAt(0) === '+' ? 1 : -1;
        arr[3] -= matches[2] * eastOrWest;
        arr[4] -= (matches[3] || 0) * eastOrWest;
      }
      // 统一成当前时区
      arr[4] -= offset;
    } else {
      // 如果按照UTC的模版解析，就不是UTC了
      arr.isUTC = isUTC & input.indexOf('Z') > -1;
    }
  }
  if (!isNil(arr[1])) {
    arr[1] -= 1;
  }
  return arr;
}

/**
 * 解析字符串或者数组成date
 * @param {String|Array} input
 * @param {String|Boolean|undefined} format
 * @param {Boolean|undefined} isUTC
 */
function parseStringOrArray(input, format, isUTC) {
  if (isString(input)) {
    let arr;
    if (isString(format)) {
      arr = parseFromFormat(input, format);
      return parseArray(arr, arr.isUTC || isUTC);
    } else {
      // 自动判断格式
      arr = extractFrom(input);
      if (arr !== input) {
        return parseArray(arr, arr.isUTC || format === true);
      }
    }
  } else {
    return parseArray(input, format === true);
  }
  const matched = ASP_NET_JSON_REGEX.exec(input);
  return new Date(matched !== null ? +matched[1] : input);
}

export default function (input, format, isUTC) {
  if (isNil(input)) {
    input = new Date();
  } else if (input.length) {
    input = parseStringOrArray(input, format, isUTC);
  } else if (isNumber(input)) {
    input = new Date(input);
  } else if (isDate(input)) {
    input = new Date(+input);
  } else if (input._i && input.isValid()) {
    input = new Date(+input);
  } else {
    // input = [], {}, etc
    input = new Date();
  }
  return input;
}
