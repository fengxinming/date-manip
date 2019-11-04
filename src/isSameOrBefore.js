import isAfter from './isAfter';

export default function (date, input, units) {
  return !isAfter(date, input, units);
}
