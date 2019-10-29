import compare from './_compare';

export default function (date, input, units) {
  return compare(date, input, units, 'before');
}
