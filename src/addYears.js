import addMonths from './addMonths';

export default function (date, years) {
  return addMonths(date, years * 12);
}
