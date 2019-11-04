import isNil from 'celia/isNil';
import normalizeUnit from './_normalizeUnit';
import { MS_IN_DAY, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MILLISECOND, DATE, TIME } from './_constants';

const dateProto = Date.prototype;
/* eslint no-extend-native: 0 */
if (!dateProto.setDay) {
  dateProto.setDay = function (val) {
    const day = this.getDay();
    if (val !== day) {
      this.setTime(+this + ((val - day) * MS_IN_DAY));
    }
  };
}

const mapping = {
  [YEAR]: 'FullYear',
  [MONTH]: 'Month',
  [DATE]: 'Date',
  [DAY]: 'Day',
  [HOUR]: 'Hours',
  [MINUTE]: 'Minutes',
  [SECOND]: 'Seconds',
  [MILLISECOND]: 'Milliseconds',
  [TIME]: 'Time'
};

export default function (date, unit, val) {
  const method = mapping[normalizeUnit(unit)];

  if (isNil(val)) {
    return date[`get${method || 'Time'}`]();
  } else {
    method && date[`set${method}`](val);
    return date;
  }
}
