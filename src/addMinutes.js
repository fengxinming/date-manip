import { MS_IN_MINUTE } from './_constants';
import addMilliseconds from './addMilliseconds';

export default function (date, minutes) {
  return addMilliseconds(date, minutes * MS_IN_MINUTE);
}
