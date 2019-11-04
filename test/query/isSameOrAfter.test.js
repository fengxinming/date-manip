import isSameOrAfter from '../../src/isSameOrAfter';
import moment from 'moment';

it('测试 isSameOrAfter 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isSameOrAfter(date1, '2018-08-05')).toBe(date2.isSameOrAfter('2018-08-05'));
  expect(isSameOrAfter(date1, '2018-08-05 10:11:11', 'day')).toBe(date2.isSameOrAfter('2018-08-05 10:11:11', 'day'));
});
