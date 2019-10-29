import dayOfYear from '../src/dayOfYear';
import moment from 'moment';

it('测试 dayOfYear 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(+dayOfYear(date1)).toBe(+date2.dayOfYear());
  expect(+dayOfYear(date1, 100)).toBe(+date2.dayOfYear(100));

  const date3 = new Date(2019, 1, 1);
  const date4 = moment(+date3);

  expect(+dayOfYear(date3)).toBe(+date4.dayOfYear());
  expect(+dayOfYear(date3, 100)).toBe(+date4.dayOfYear(100));

  const date5 = new Date(2000, 1, 1);
  const date6 = moment(+date5);

  expect(+dayOfYear(date5)).toBe(+date6.dayOfYear());
  expect(+dayOfYear(date5, 100)).toBe(+date6.dayOfYear(100));
});
