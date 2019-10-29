import diff from '../src/diff';
import moment from 'moment';

it('测试 diff 方法', () => {
  const date1 = new Date(2019, 1, 15);
  const date2 = moment(+date1);

  const input = '2019-02-15 11:11:11.111';
  const input2 = 1533561132000; // 2018-08-06
  const input3 = new Date();
  const input4 = [2019, 1, 15];
  const input5 = [2020, 3, 5];
  const input6 = [2018, 7, 1];
  const input7 = [2019, 8, 5];

  expect(diff(date1, input)).toBe(date2.diff(input));
  expect(diff(date1, input, 'a')).toBe(date2.diff(input, 'a'));
  expect(diff(date1, input, 'year')).toBe(date2.diff(input, 'year'));
  expect(diff(date1, input, 'month')).toBe(date2.diff(input, 'month'));
  expect(diff(date1, input, 'day')).toBe(date2.diff(input, 'day'));
  expect(diff(date1, input, 'hour')).toBe(date2.diff(input, 'hour'));
  expect(diff(date1, input, 'minute')).toBe(date2.diff(input, 'minute'));
  expect(diff(date1, input, 'second')).toBe(date2.diff(input, 'second'));
  expect(diff(date1, input, 'millisecond')).toBe(date2.diff(input, 'millisecond'));

  expect(diff(date1, input3, 'year')).toBe(date2.diff(input3, 'year'));
  expect(diff(date1, input3, 'month')).toBe(date2.diff(input3, 'month'));
  expect(diff(date1, input3, 'day')).toBe(date2.diff(input3, 'day'));
  expect(diff(date1, input3, 'hour')).toBe(date2.diff(input3, 'hour'));
  expect(diff(date1, input3, 'minute')).toBe(date2.diff(input3, 'minute'));
  expect(diff(date1, input3, 'second')).toBe(date2.diff(input3, 'second'));
  expect(diff(date1, input3, 'millisecond')).toBe(date2.diff(input3, 'millisecond'));

  expect(diff(date1, input2, 'year')).toBe(date2.diff(input2, 'year'));
  expect(diff(date1, input2, 'month')).toBe(date2.diff(input2, 'month'));
  expect(diff(date1, input2, 'day')).toBe(date2.diff(input2, 'day'));
  expect(diff(date1, input2, 'hour')).toBe(date2.diff(input2, 'hour'));
  expect(diff(date1, input2, 'minute')).toBe(date2.diff(input2, 'minute'));
  expect(diff(date1, input2, 'second')).toBe(date2.diff(input2, 'second'));
  expect(diff(date1, input2, 'millisecond')).toBe(date2.diff(input2, 'millisecond'));

  expect(diff(date1, input4, 'year')).toBe(date2.diff(input4, 'year'));
  expect(diff(date1, input4, 'month')).toBe(date2.diff(input4, 'month'));
  expect(diff(date1, input4, 'day')).toBe(date2.diff(input4, 'day'));
  expect(diff(date1, input4, 'hour')).toBe(date2.diff(input4, 'hour'));
  expect(diff(date1, input4, 'minute')).toBe(date2.diff(input4, 'minute'));
  expect(diff(date1, input4, 'second')).toBe(date2.diff(input4, 'second'));
  expect(diff(date1, input4, 'millisecond')).toBe(date2.diff(input4, 'millisecond'));

  expect(diff(date1, input5, 'year')).toBe(date2.diff(input5, 'year'));
  expect(diff(date1, input5, 'month')).toBe(date2.diff(input5, 'month'));
  expect(diff(date1, input5, 'day')).toBe(date2.diff(input5, 'day'));
  expect(diff(date1, input5, 'hour')).toBe(date2.diff(input5, 'hour'));
  expect(diff(date1, input5, 'minute')).toBe(date2.diff(input5, 'minute'));
  expect(diff(date1, input5, 'second')).toBe(date2.diff(input5, 'second'));
  expect(diff(date1, input5, 'millisecond')).toBe(date2.diff(input5, 'millisecond'));

  expect(diff(date1, input6, 'year')).toBe(date2.diff(input6, 'year'));
  expect(diff(date1, input6, 'month')).toBe(date2.diff(input6, 'month'));
  expect(diff(date1, input6, 'day')).toBe(date2.diff(input6, 'day'));
  expect(diff(date1, input6, 'hour')).toBe(date2.diff(input6, 'hour'));
  expect(diff(date1, input6, 'minute')).toBe(date2.diff(input6, 'minute'));
  expect(diff(date1, input6, 'second')).toBe(date2.diff(input6, 'second'));
  expect(diff(date1, input6, 'millisecond')).toBe(date2.diff(input6, 'millisecond'));

  expect(diff(date1, input7, 'year')).toBe(date2.diff(input7, 'year'));
  expect(diff(date1, input7, 'month')).toBe(date2.diff(input7, 'month'));
  expect(diff(date1, input7, 'day')).toBe(date2.diff(input7, 'day'));
  expect(diff(date1, input7, 'hour')).toBe(date2.diff(input7, 'hour'));
  expect(diff(date1, input7, 'minute')).toBe(date2.diff(input7, 'minute'));
  expect(diff(date1, input7, 'second')).toBe(date2.diff(input7, 'second'));
  expect(diff(date1, input7, 'millisecond')).toBe(date2.diff(input7, 'millisecond'));

  expect(diff(date1, input3, 'month', true)).toBe(date2.diff(input3, 'month', true));
  expect(diff(date1, input4, 'month')).toBe(date2.diff(input4, 'month'));
  expect(diff(date1, input4, 'day', true)).toBe(date2.diff(input4, 'day', true));
  expect(diff(date1, input4, 'year', true)).toBe(date2.diff(input4, 'year', true));
  expect(diff(date1, input5, 'month')).toBe(date2.diff(input5, 'month'));
  expect(diff(date1, input5, 'year')).toBe(date2.diff(input5, 'year'));
  expect(diff(date1, input6, 'month')).toBe(date2.diff(input6, 'month'));
  expect(diff(date1, input6, 'year')).toBe(date2.diff(input6, 'year'));
  expect(diff(date1, input7, 'month')).toBe(date2.diff(input7, 'month'));
  expect(diff(date1, input7, 'year')).toBe(date2.diff(input7, 'year'));
});
