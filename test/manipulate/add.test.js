import add from '../../src/add';
import daysInMonth from '../../src/daysInMonth';
import { formatDate } from '../utils';
import moment from 'moment';

describe('测试 add 方法', () => {
  it('新增毫秒', async () => {
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, 1, 'millisecond'))).toBe(formatDate(mnow.add(1, 'millisecond')));
    await expect(formatDate(add(now, -1, 'millisecond'))).toBe(formatDate(mnow.add(-1, 'millisecond')));

    const leapYear = new Date(2000, 1, 29, 23, 59, 59, 59);
    const mleapYear = moment(+leapYear);
    await expect(formatDate(add(leapYear, 1, 'millisecond'))).toBe(formatDate(mleapYear.add(1, 'millisecond')));
    await expect(formatDate(add(leapYear, -1, 'millisecond'))).toBe(formatDate(mleapYear.add(-1, 'millisecond')));
  });

  it('新增秒', async () => {
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, 1, 'second'))).toBe(formatDate(mnow.add(1, 'second')));
    await expect(formatDate(add(now, -1, 'second'))).toBe(formatDate(mnow.add(-1, 'second')));

    const leapYear = new Date(2000, 1, 29, 23, 59, 59, 59);
    const mleapYear = moment(+leapYear);
    await expect(formatDate(add(leapYear, 1, 'second'))).toBe(formatDate(mleapYear.add(1, 'second')));
    await expect(formatDate(add(leapYear, -1, 'second'))).toBe(formatDate(mleapYear.add(-1, 'second')));
  });

  it('新增分', async () => {
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, 1, 'minute'))).toBe(formatDate(mnow.add(1, 'minute')));
    await expect(formatDate(add(now, -1, 'minute'))).toBe(formatDate(mnow.add(-1, 'minute')));

    const leapYear = new Date(2000, 1, 29, 23, 59, 59, 59);
    const mleapYear = moment(+leapYear);
    await expect(formatDate(add(leapYear, 1, 'minute'))).toBe(formatDate(mleapYear.add(1, 'minute')));
    await expect(formatDate(add(leapYear, -1, 'minute'))).toBe(formatDate(mleapYear.add(-1, 'minute')));
  });

  it('新增小时', async () => {
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, 1, 'hour'))).toBe(formatDate(mnow.add(1, 'hour')));
    await expect(formatDate(add(now, -1, 'hour'))).toBe(formatDate(mnow.add(-1, 'hour')));

    const leapYear = new Date(2000, 1, 29, 23, 59, 59, 59);
    const mleapYear = moment(+leapYear);
    await expect(formatDate(add(leapYear, 1, 'hour'))).toBe(formatDate(mleapYear.add(1, 'hour')));
    await expect(formatDate(add(leapYear, -1, 'hour'))).toBe(formatDate(mleapYear.add(-1, 'hour')));
  });

  it('新增天数', async () => {
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, 1, 'day'))).toBe(formatDate(mnow.add(1, 'day')));
    await expect(formatDate(add(now, -1, 'day'))).toBe(formatDate(mnow.add(-1, 'day')));

    const leapYear = new Date(2000, 1, 29, 23, 59, 59, 59);
    const mleapYear = moment(+leapYear);
    await expect(formatDate(add(leapYear, 1, 'day'))).toBe(formatDate(mleapYear.add(1, 'day')));
    await expect(formatDate(add(leapYear, -1, 'day'))).toBe(formatDate(mleapYear.add(-1, 'day')));
  });

  it('新增月份', async () => {
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, 1, 'month'))).toBe(formatDate(mnow.add(1, 'month')));
    await expect(formatDate(add(now, -1, 'month'))).toBe(formatDate(mnow.add(-1, 'month')));

    now.setDate(daysInMonth(now));
    mnow.set('date', now.getDate());
    await expect(formatDate(add(now, 1, 'month'))).toBe(formatDate(mnow.add(1, 'month')));
    await expect(formatDate(add(now, -1, 'month'))).toBe(formatDate(mnow.add(-1, 'month')));

    const leapYear = new Date(2000, 1, 29, 23, 59, 59, 999);
    const mleapYear = moment(+leapYear);
    await expect(formatDate(add(leapYear, 1, 'month'))).toBe(formatDate(mleapYear.add(1, 'month')));
    await expect(formatDate(add(leapYear, -1, 'month'))).toBe(formatDate(mleapYear.add(-1, 'month')));
  });

  it('新增年份', async () => {
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, 1, 'year'))).toBe(formatDate(mnow.add(1, 'year')));
    await expect(formatDate(add(now, -1, 'year'))).toBe(formatDate(mnow.add(-1, 'year')));

    const leapYear = new Date(2000, 1, 29, 23, 59, 59, 999);
    const mleapYear = moment(+leapYear);
    await expect(formatDate(add(leapYear, 1, 'year'))).toBe(formatDate(mleapYear.add(1, 'year')));
    await expect(formatDate(add(leapYear, -1, 'year'))).toBe(formatDate(mleapYear.add(-1, 'year')));
  });

  it('新增年月日时分秒', async () => {
    let config = {
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      minute: 1,
      second: 1,
      millisecond: 1
    };
    const now = new Date();
    const mnow = moment(+now);

    await expect(formatDate(add(now, config))).toBe(formatDate(mnow.add(config)));

    let leapYear = new Date(2000, 1, 29, 23, 59, 59, 999);
    let mleapYear = moment(+leapYear);

    await expect(formatDate(add(leapYear, config))).toBe(formatDate(mleapYear.add(config)));

    config = {
      year: 1,
      month: 1,
      day: 2
    };

    await expect(formatDate(add(leapYear, config))).toBe(formatDate(mleapYear.add(config)));

    leapYear = new Date(2000, 1, 29, 23, 59, 59, 999);
    mleapYear = moment(+leapYear);
    config = {
      millisecond: 1
    };

    await expect(formatDate(add(leapYear, config))).toBe(formatDate(mleapYear.add(config)));
  });
});
