import format from '../../src/format';
import moment from 'moment';

it('测试 format 方法', () => {
  const date1 = new Date();
  const date2 = moment(+date1);

  expect(format(date1, 'YYYY-MM-DD HH:mm:ss')).toBe(date2.format('YYYY-MM-DD HH:mm:ss'));
  expect(format(date1, 'YYYY-MM-DDTHH:mm:ss')).toBe(date2.format('YYYY-MM-DDTHH:mm:ss'));
  expect(format(date1, 'YYYY-MM-DD')).toBe(date2.format('YYYY-MM-DD'));
  expect(format(date1, 'yyyy-MM-dd')).toBe(date2.format('YYYY-MM-DD'));
  expect(format(date1, 'YYYY/MM/DD')).toBe(date2.format('YYYY/MM/DD'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss')).toBe(date2.format('YYYY-MM-DD hh:mm:ss'));
  expect(format(date1, 'YYYY-MM-DD HH:mm:ss')).toBe(date2.format('YYYY-MM-DD HH:mm:ss'));
  expect(format(date1, 'YYYY-MM-DDTHH:mm:ss')).toBe(date2.format('YYYY-MM-DDTHH:mm:ss'));
  expect(format(date1, 'YY/M/D')).toBe(date2.format('YY/M/D'));
  expect(format(date1, 'YY-M-D H:m:s')).toBe(date2.format('YY-M-D H:m:s'));
  expect(format(date1, 'YY-M-d h:m:s')).toBe(date2.format('YY-M-D h:m:s'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss.SSS')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSS'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss.SSS +08:00')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSS +08:00'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss.SSS -01:00')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSS -01:00'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss.SSSZ')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSSZ'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss.SSSZZ')).toBe(date2.format('YYYY-MM-DD hh:mm:ss.SSSZZ'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss Z')).toBe(date2.format('YYYY-MM-DD hh:mm:ss Z'));
  expect(format(date1, 'YYYY-MM-DD hh:mm:ss ZZ')).toBe(date2.format('YYYY-MM-DD hh:mm:ss ZZ'));
  expect(format(date1, '+YYYY-MM-DD HH:mm:ss')).toBe(date2.format('+YYYY-MM-DD HH:mm:ss'));
  expect(format(date1)).toBe(date2.toISOString());
  expect(format(date1, 'UTC')).toBe(date2.toISOString());
});
