import endOf from '../src/endOf';
import moment from 'moment';

it('测试 endOf 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+endOf(date1)).toBe(+date2.endOf());
  expect(+endOf(date1, 'year')).toBe(+date2.endOf('year'));
  expect(+endOf(date1, 'month')).toBe(+date2.endOf('month'));
  expect(+endOf(date1, 'day')).toBe(+date2.endOf('day'));
  expect(+endOf(date1, 'date')).toBe(+date2.endOf('date'));
  expect(+endOf(date1, 'hour')).toBe(+date2.endOf('hour'));
  expect(+endOf(date1, 'minute')).toBe(+date2.endOf('minute'));
  expect(+endOf(date1, 'second')).toBe(+date2.endOf('second'));
  expect(+endOf(date1, 'millisecond')).toBe(+date2.endOf('millisecond'));

});
