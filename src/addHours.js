import { MS_IN_HOUR } from './_constants';
import addMilliseconds from './addMilliseconds';

export default function (date, hours) {
  return addMilliseconds(date, hours * MS_IN_HOUR);
}
