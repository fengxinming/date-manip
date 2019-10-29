import addMonths from './_addMonths';

export default function (date, years) {
  return addMonths(date, years * 12);
}
