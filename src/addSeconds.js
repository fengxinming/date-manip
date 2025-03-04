import { MS_IN_SECOND } from './_constants';
import addMilliseconds from './addMilliseconds';

export default function (date, seconds) {
  return addMilliseconds(date, seconds * MS_IN_SECOND);
}
