import subtract from '../src/subtract';
import moment from 'moment';

it('测试 subtract 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+subtract(date1, 1)).toBe(+date2.subtract(1));

  expect(+subtract(date1, 1, 'year')).toBe(+date2.subtract(1, 'year'));
  expect(+subtract(date1, -1, 'year')).toBe(+date2.subtract(-1, 'year'));

  expect(+subtract(date1, 1, 'month')).toBe(+date2.subtract(1, 'month'));
  expect(+subtract(date1, -1, 'month')).toBe(+date2.subtract(-1, 'month'));

  expect(+subtract(date1, 1, 'day')).toBe(+date2.subtract(1, 'day'));
  expect(+subtract(date1, -1, 'day')).toBe(+date2.subtract(-1, 'day'));

  expect(+subtract(date1, 1, 'hour')).toBe(+date2.subtract(1, 'hour'));
  expect(+subtract(date1, -1, 'hour')).toBe(+date2.subtract(-1, 'hour'));

  expect(+subtract(date1, 1, 'minute')).toBe(+date2.subtract(1, 'minute'));
  expect(+subtract(date1, -1, 'minute')).toBe(+date2.subtract(-1, 'minute'));

  expect(+subtract(date1, 1, 'second')).toBe(+date2.subtract(1, 'second'));
  expect(+subtract(date1, -1, 'second')).toBe(+date2.subtract(-1, 'second'));

  expect(+subtract(date1, 1, 'millisecond')).toBe(+date2.subtract(1, 'millisecond'));
  expect(+subtract(date1, -1, 'millisecond')).toBe(+date2.subtract(-1, 'millisecond'));
});
