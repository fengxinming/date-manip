import isBefore from '../src/isBefore';
import moment from 'moment';

it('测试 isBefore 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(isBefore(date1, '2018-08-05')).toBe(date2.isBefore('2018-08-05'));
  expect(isBefore(date1, '2018-08-05 10:11:11', 'day')).toBe(date2.isBefore('2018-08-05 10:11:11', 'day'));
});
