import isBefore from './isBefore';

export default function (date, input, units) {
  return !isBefore(date, input, units);
}
