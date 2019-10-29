import repeat from 'celia/_repeat';
import isUndefined from 'celia/isUndefined';
import daysInMonthOfYear from './_daysInMonthOfYear';
import { MS_IN_DAY } from './_constants';

export default function (date, val) {
  const daysInMonth = daysInMonthOfYear(date.getFullYear());
  let count = 0;
  repeat(0, date.getMonth(), (i) => {
    count += daysInMonth[i];
  });
  count += date.getDate();
  if (isUndefined(val)) {
    return count;
  } else {
    date.setTime(+date + ((val - count) * MS_IN_DAY));
    return date;
  }
}
