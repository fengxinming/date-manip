import { MS_IN_DAY } from './_constants';
import addMilliseconds from './addMilliseconds';

export default function (date, days) {
  return addMilliseconds(date, days * MS_IN_DAY);
}
