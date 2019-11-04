import isBetween from '../../src/isBetween';
import moment from 'moment';

it('测试 isBetween 方法', () => {
  const date1 = new Date(2018, 7, 5);
  const date2 = moment(+date1);

  expect(isBetween(date1, '2018-08-04', '2018-09-05')).toBe(date2.isBetween('2018-08-04', '2018-09-05'));
  expect(isBetween(date1, '2018-08-04', '2018-09-05', 'day')).toBe(date2.isBetween('2018-08-04', '2018-09-05', 'day'));
  expect(isBetween(date1, '2018-08-04', '2018-08-06', 'day', '[]')).toBe(date2.isBetween('2018-08-04', '2018-08-06', 'day', '[]'));
  expect(isBetween(date1, '2018-08-06', '2018-08-06', 'day', '<>')).toBe(date2.isBetween('2018-08-06', '2018-08-06', 'day', '<>'));
  expect(isBetween(date1, '2019-08-05', '2019-09-05')).toBe(date2.isBetween('2019-08-05', '2019-09-05'));
  expect(isBetween(date1, '2018-08-04 10:11:11', '2018-09-05 10:11:11', 'day')).toBe(date2.isBetween('2018-08-04 10:11:11', '2018-09-05 10:11:11', 'day'));
  expect(isBetween(date1, '2018-08-04 10:11:11', '2018-09-05 10:11:11', 'day', '()')).toBe(date2.isBetween('2018-08-04 10:11:11', '2018-09-05 10:11:11', 'day', '()'));
});
