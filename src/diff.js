import parse from './parse';
import addMonths from './addMonths';
import clone from './clone';
import normalizeUnit from './_normalizeUnit';
import absFloor from './_absFloor';
import { YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MS_IN_DAY, MS_IN_HOUR, MS_IN_MINUTE, MS_IN_SECOND } from './_constants';

function monthDiff(a, b) {
  const wholeMonthDiff = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
  const anchor = addMonths(clone(a), wholeMonthDiff);
  let anchor2, adjust;

  if (b < anchor) {
    anchor2 = addMonths(clone(a), wholeMonthDiff - 1);
    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = addMonths(clone(a), wholeMonthDiff + 1);
    adjust = (b - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}

export default function (date, input, units, asFloat) {
  input = parse(input);
  let output;
  units = normalizeUnit(units);

  switch (units) {
    case YEAR:
      output = monthDiff(date, input) / 12;
      break;
    case MONTH:
      output = monthDiff(date, input);
      break;
    // case 'D':
    case DAY:
      output = (date - input) / MS_IN_DAY;
      break;
    case HOUR:
      output = (date - input) / MS_IN_HOUR;
      break;
    case MINUTE:
      output = (date - input) / MS_IN_MINUTE;
      break;
    case SECOND:
      output = (date - input) / MS_IN_SECOND;
      break;
    default:
      output = date - input;
  }

  return asFloat ? output : absFloor(output);
}
