import startOf from '../src/startOf';
import moment from 'moment';

it('测试 startOf 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+startOf(date1)).toBe(+date2.startOf());
  expect(+startOf(date1, 'year')).toBe(+date2.startOf('year'));
  expect(+startOf(date1, 'month')).toBe(+date2.startOf('month'));
  expect(+startOf(date1, 'date')).toBe(+date2.startOf('date'));
  expect(+startOf(date1, 'day')).toBe(+date2.startOf('day'));
  expect(+startOf(date1, 'hour')).toBe(+date2.startOf('hour'));
  expect(+startOf(date1, 'minute')).toBe(+date2.startOf('minute'));
  expect(+startOf(date1, 'second')).toBe(+date2.startOf('second'));
  expect(+startOf(date1, 'millisecond')).toBe(+date2.startOf('millisecond'));

});
