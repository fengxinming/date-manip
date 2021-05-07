import forOwn from 'celia/_forOwn';
import * as dateManip from 'date-manip';

const { parse, get, set } = dateManip;

function DateChain(input, format) {
  if (!(this instanceof DateChain)) {
    return new DateChain(input, format);
  }
  this._i = input;
  this._f = format;
  this._d = parse(input, format);
  this._offset = this._d.getTimezoneOffset();
}

const proto = DateChain.prototype;

function getSet(method) {
  proto[method] = function (val) {
    const date = this._d;
    const ret = arguments.length > 0 ? set(date, method, val) : get(date, method);
    return typeof ret === 'object' ? this : ret;
  };
}

['year', 'month', 'date', 'time', 'day', 'hour', 'minute', 'second', 'millisecond'].forEach((method, i) => {
  getSet(method);
  i > 3 && getSet(method + 's');
});

forOwn(dateManip, (fn, method) => {
  proto[method] = function (...args) {
    const date = this._d;
    const ret = fn(date, ...args);
    return ret === date ? this : ret;
  };
  DateChain[method] = fn;
});

proto.clone = function () {
  return new DateChain(this, this._f);
};

proto.toArray = function () {
  const date = this._d;
  return [
    get(date, 'year'),
    get(date, 'month'),
    get(date, 'date'),
    get(date, 'hours'),
    get(date, 'minutes'),
    get(date, 'seconds'),
    get(date, 'milliseconds')
  ];
};

proto.toDate = function () {
  return new Date(this.valueOf());
};

proto.toISOString = function () {
  return this._d.toISOString();
};

proto.toJSON = function () {
  return this.toISOString();
};

proto.toString = function () {
  return this._d.toString();
};

proto.valueOf = function () {
  return this._d.valueOf();
};

export default DateChain;
