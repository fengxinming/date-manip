import isValid from '../../src/isValid';
import parse from '../../src/parse';
import moment from 'moment';

it('测试 isValid 方法', () => {
  const date1 = new Date(NaN);
  const date2 = moment(NaN);

  expect(isValid(date1)).toBe(date2.isValid());
  expect(isValid(parse('2018-08-06 dddd'))).toBe(moment('2018-08-06 dddd').isValid());
  expect(isValid(parse('asdjfsdf'))).toBe(moment('asdjfsdf').isValid());
  expect(isValid(parse('2018'))).toBe(moment('2018').isValid());
});
