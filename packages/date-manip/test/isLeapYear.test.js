import isLeapYear from '../src/isLeapYear';
import moment from 'moment';

it('测试 isLeapYear 方法', () => {
  const date1 = new Date(2019, 1, 2);
  const date2 = moment(+date1);

  expect(isLeapYear(date1)).toBe(date2.isLeapYear());

  date1.setFullYear(2000);
  date2.year(2000);
  expect(isLeapYear(date1)).toBe(date2.isLeapYear());

  date1.setFullYear(1000);
  date2.year(1000);
  expect(isLeapYear(date1)).toBe(date2.isLeapYear());

  date1.setFullYear(1024);
  date2.year(1024);
  expect(isLeapYear(date1)).toBe(date2.isLeapYear());

  date1.setFullYear(2018);
  date2.year(2018);
  expect(isLeapYear(date1)).toBe(date2.isLeapYear());

  date1.setFullYear(1997);
  date2.year(1997);
  expect(isLeapYear(date1)).toBe(date2.isLeapYear());
});
