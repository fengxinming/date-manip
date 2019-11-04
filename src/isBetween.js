import isBefore from './isBefore';
import isAfter from './isAfter';

export default function (date, from, to, units, inclusivity) {
  inclusivity = inclusivity || '()';
  return (inclusivity.charAt(0) === '(' ? isAfter(date, from, units) : !isBefore(date, from, units)) &&
    (inclusivity.charAt(1) === ')' ? isBefore(date, to, units) : !isAfter(date, to, units));
}
