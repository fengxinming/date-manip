import isAfter from '../src/isAfter';
import moment from 'moment';

it('测试 isAfter 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isAfter(date1, '2018-08-05')).toBe(date2.isAfter('2018-08-05'));
  expect(isAfter(date1, '2018-08-05 10:11:11', 'day')).toBe(date2.isAfter('2018-08-05 10:11:11', 'day'));
});
