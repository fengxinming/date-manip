import daysInMonth from '../../src/daysInMonth';
import moment from 'moment';

it('测试 daysInMonth 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(daysInMonth(date1)).toBe(+date2.daysInMonth());
});
