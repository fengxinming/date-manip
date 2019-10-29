import set from '../src/set';
import moment from 'moment';

it('测试 set 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+set(date1, 'year', 2000)).toBe(+date2.set('year', 2000));
  expect(+set(date1, 'month', 1)).toBe(+date2.set('month', 1));
  expect(+set(date1, 'day', 1)).toBe(+date2.set('day', 1));
  expect(+set(date1, 'date', 3)).toBe(+date2.set('date', 3));
  expect(+set(date1, 'hour', 1)).toBe(+date2.set('hour', 1));
  expect(+set(date1, 'minute', 1)).toBe(+date2.set('minute', 1));
  expect(+set(date1, 'second', 1)).toBe(+date2.set('second', 1));
  expect(+set(date1, 'millisecond', 1)).toBe(+date2.set('millisecond', 1));
  expect(+set(date1, '', 1)).toBe(+date2.set('', 1));
  expect(+set(date1, 'month', 3)).toBe(+date2.set('month', 3));
  expect(+set(date1, 'second', 30)).toBe(+date2.set('second', 30));

});
