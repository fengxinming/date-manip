import isSameOrBefore from '../../src/isSameOrBefore';
import moment from 'moment';

it('测试 isSame 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isSameOrBefore(date1, '2018-08-05')).toBe(date2.isSameOrBefore('2018-08-05'));
  expect(isSameOrBefore(date1, '2018-08-05 10:11:11', 'day')).toBe(date2.isSameOrBefore('2018-08-05 10:11:11', 'day'));
});
