import get from '../../src/get';
import moment from 'moment';

it('测试 get 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+get(date1, 'year')).toBe(+date2.get('year'));
  expect(+get(date1, 'month')).toBe(+date2.get('month'));
  expect(+get(date1, 'day')).toBe(+date2.get('day'));
  expect(+get(date1, 'date')).toBe(+date2.get('date'));
  expect(+get(date1, 'hour')).toBe(+date2.get('hour'));
  expect(+get(date1, 'minute')).toBe(+date2.get('minute'));
  expect(+get(date1, 'second')).toBe(+date2.get('second'));
  expect(+get(date1, 'millisecond')).toBe(+date2.get('millisecond'));
  expect(+get(date1, '')).toBe(+date2.get(''));

});
