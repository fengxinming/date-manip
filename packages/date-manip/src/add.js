import isObject from 'celia/isObject';
import forOwn from 'celia/_forOwn';
import daysInMonth from './daysInMonth';
import normalizeUnit from './_normalizeUnit';
import { YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MS_IN_SECOND, MS_IN_MINUTE, MS_IN_HOUR } from './_constants';
import addMilliseconds from './_addMilliseconds';
import addSeconds from './_addSeconds';
import addMinutes from './_addMinutes';
import addHours from './_addHours';
import addDays from './_addDays';
import addMonths from './_addMonths';
import addYears from './_addYears';

function add(date, num, unit) {
  unit = normalizeUnit(unit);
  switch (unit) {
    case YEAR:
      return addYears(date, num);
    case MONTH:
      return addMonths(date, num);
    case DAY:
      return addDays(date, num);
    case HOUR:
      return addHours(date, num);
    case MINUTE:
      return addMinutes(date, num);
    case SECOND:
      return addSeconds(date, num);
    default:
      return addMilliseconds(date, num);
  }
}

function addObject(date, obj) {
  let time = 0;
  let expectedMonth = 0;
  let expectedDay = 0;
  forOwn(obj, (num, unit) => {
    unit = normalizeUnit(unit);
    switch (unit) {
      case YEAR:
        expectedMonth += num *= 12; return;
      case MONTH:
        expectedMonth += date.getMonth() + num; return;
      case DAY:
        expectedDay = num; return;
      case HOUR:
        num *= MS_IN_HOUR; break;
      case MINUTE:
        num *= MS_IN_MINUTE; break;
      case SECOND:
        num *= MS_IN_SECOND; break;
    }
    time += num;
  });

  if (expectedMonth) {
    // 目标时间当月总天数
    const tempMaxDay = daysInMonth(new Date(date.getFullYear(), expectedMonth, 1, 0, 0, 0, 0));
    const currentDay = date.getDate();
    date.setMonth(expectedMonth, (currentDay > tempMaxDay ? tempMaxDay : currentDay) + expectedDay);
  }

  date.setTime(+date + time);
  return date;
}

export default function (date, num, unit) {
  return isObject(num)
    ? addObject(date, num)
    : add(date, num, unit);
};
