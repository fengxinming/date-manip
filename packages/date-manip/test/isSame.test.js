import isSame from '../src/isSame';
import moment from 'moment';

it('测试 isSame 方法', () => {
  const date1 = new Date(2018, 7, 5);
  const date2 = moment(+date1);

  expect(isSame(date1, '2018-08-05')).toBe(date2.isSame('2018-08-05'));
  expect(isSame(date1, '2018-08-05 10:11:11', 'year')).toBe(date2.isSame('2018-08-05 10:11:11', 'year'));
  expect(isSame(date1, '2018-08-05 10:11:11', 'month')).toBe(date2.isSame('2018-08-05 10:11:11', 'month'));
  expect(isSame(date1, '2018-08-05 10:11:11', 'day')).toBe(date2.isSame('2018-08-05 10:11:11', 'day'));
});
