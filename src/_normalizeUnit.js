import iterate from 'celia/_iterate';
import { YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MILLISECOND, DATE, TIME } from './_constants';

// 构建映射集合
const UNITS = {};
function mapUnit(key) {
  iterate(arguments, 0, arguments.length, (arg) => {
    UNITS[arg] = key;
  });
}
mapUnit(YEAR, 'Y');
mapUnit(MONTH, 'M');
mapUnit(DATE, 'D');
mapUnit(DAY, 'days', 'd');
mapUnit(HOUR, 'hours', 'h');
mapUnit(MINUTE, 'minutes', 'm');
mapUnit(SECOND, 'seconds', 's');
mapUnit(MILLISECOND, 'milliseconds', 'ms');
mapUnit(TIME, 't');

export default function (u) {
  return UNITS[u];
}
