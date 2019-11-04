import mmt from '../../src/packages/date-chain';
import moment from 'moment';

describe('测试 DateChain', () => {
  const now = new Date();

  it('测试构造', () => {
    expect(+mmt(now)).toBe(+moment(now));
    expect(+mmt('1980-01-01')).toBe(+moment('1980-01-01'));
    expect(+mmt(730944000000)).toBe(+moment(730944000000));
    expect(+mmt(new Date(1980, 3, 1))).toBe(+moment(new Date(1980, 3, 1)));
    expect(+mmt('2018-07')).toBe(+moment('2018-07'));
    expect(+mmt('2018-07-01')).toBe(+moment('2018-07-01'));
    expect(+mmt('2018-07-01 17:10:02')).toBe(+moment('2018-07-01 17:10:02'));
    expect(+mmt('2018-07-01 17:10:02 +08:00')).toBe(+moment('2018-07-01 17:10:02+08:00'));
    expect(+mmt('2018-07-01T09:10:02.234Z')).toBe(+moment('2018-07-01T09:10:02.234Z'));
    expect(+mmt('2018-07', 'YYYY-MM')).toBe(+moment('2018-07', 'YYYY-MM'));
    expect(+mmt('2018-07-01', 'YYYY-MM-DD')).toBe(+moment('2018-07-01', 'YYYY-MM-DD'));
    expect(+mmt('2018-07-01 17:10:02', 'YYYY-MM-DD hh:mm:ss')).toBe(+moment('2018-07-01 17:10:02', 'YYYY-MM-DD hh:mm:ss'));
    expect(+mmt('2018-07-01 17:10:02 +08:00', 'YYYY-MM-DD hh:mm:ss')).toBe(+moment('2018-07-01 17:10:02+08:00', 'YYYY-MM-DD hh:mm:ss'));
    expect(+mmt('2018-07-01T09:10:02.234Z', 'YYYY-MM-DD hh:mm:ss.SSSZ')).toBe(+moment('2018-07-01T09:10:02.234Z', 'YYYY-MM-DD hh:mm:ss.SSSZ'));
    expect(+mmt('10/09/2018 07:04:10')).toBe(+moment('10/09/2018 07:04:10'));
  });

  it('测试 get set', () => {
    expect(mmt(now).year()).toBe(moment(now).year());
    expect(mmt(now).month()).toBe(moment(now).month());
    expect(mmt(now).date()).toBe(moment(now).date());
    expect(mmt(now).days()).toBe(moment(now).days());
    expect(mmt(now).hours()).toBe(moment(now).hours());
    expect(mmt(now).minutes()).toBe(moment(now).minutes());
    expect(mmt(now).seconds()).toBe(moment(now).seconds());
    expect(mmt(now).milliseconds()).toBe(moment(now).milliseconds());

    expect(mmt(now).day()).toBe(moment(now).day());
    expect(mmt(now).hour()).toBe(moment(now).hour());
    expect(mmt(now).minute()).toBe(moment(now).minute());
    expect(mmt(now).second()).toBe(moment(now).second());
    expect(mmt(now).millisecond()).toBe(moment(now).millisecond());

    expect(mmt(now).get('year')).toBe(moment(now).get('year'));
    expect(mmt(now).get('month')).toBe(moment(now).get('month'));
    expect(mmt(now).get('date')).toBe(moment(now).get('date'));
    expect(mmt(now).get('hour')).toBe(moment(now).get('hour'));
    expect(mmt(now).get('minute')).toBe(moment(now).get('minute'));
    expect(mmt(now).get('second')).toBe(moment(now).get('second'));
    expect(mmt(now).get('millisecond')).toBe(moment(now).get('millisecond'));

    expect(+mmt(now).set('year', 2000)).toBe(+moment(now).set('year', 2000));
    expect(+mmt(now).set('month', 1)).toBe(+moment(now).set('month', 1));
    expect(+mmt(now).set('day', 1)).toBe(+moment(now).set('day', 1));
    expect(+mmt(now).set('date', 3)).toBe(+moment(now).set('date', 3));
    expect(+mmt(now).set('date', now.getDay())).toBe(+moment(now).set('date', now.getDay()));
    expect(+mmt(now).set('hour', 1)).toBe(+moment(now).set('hour', 1));
    expect(+mmt(now).set('minute', 1)).toBe(+moment(now).set('minute', 1));
    expect(+mmt(now).set('second', 1)).toBe(+moment(now).set('second', 1));
    expect(+mmt(now).set('millisecond', 1)).toBe(+moment(now).set('millisecond', 1));
    expect(+mmt(now).set('', 1)).toBe(+moment(now).set('', 1));
    expect(+mmt(now).set('month', 3)).toBe(+moment(now).set('month', 3));
    expect(+mmt(now).set('second', 30)).toBe(+moment(now).set('second', 30));

    expect(+mmt(now).year(2000)).toBe(+moment(now).year(2000));
    expect(+mmt(now).month(1)).toBe(+moment(now).month(1));
    expect(+mmt(now).day(1)).toBe(+moment(now).day(1));
    expect(+mmt(now).date(3)).toBe(+moment(now).date(3));
    expect(+mmt(now).hour(1)).toBe(+moment(now).hour(1));
    expect(+mmt(now).minute(1)).toBe(+moment(now).minute(1));
    expect(+mmt(now).second(1)).toBe(+moment(now).second(1));
    expect(+mmt(now).millisecond(1)).toBe(+moment(now).millisecond(1));
  });

  it('测试其它方法', () => {
    expect(+mmt(now).clone()).toBe(+moment(now).clone());
    expect(mmt(now).isValid()).toBe(moment(now).isValid());
    expect(+mmt(now).add(7, 'day')).toBe(+moment(now).add(7, 'day'));
    expect(+mmt(now).subtract(7, 'year')).toBe(+moment(now).subtract(7, 'year'));
    expect(+mmt(now).startOf('year')).toBe(+moment(now).startOf('year'));
    expect(+mmt(now).endOf('month')).toBe(+moment(now).endOf('month'));
    expect(+mmt(now).startOf('month').add(1, 'day').subtract(1, 'year')).toBe(+moment(now).startOf('month').add(1, 'day').subtract(1, 'year'));
    expect(mmt(now).format()).toBe(now.toISOString());
    expect(mmt(now).format('YYYY-MM-DDTHH:mm:ss.SSSZ')).toBe(moment(now).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    expect(mmt(now).diff(mmt(), 'year')).toBe(moment(now).diff(moment(), 'year'));
    expect(mmt(now).valueOf()).toBe(moment(now).valueOf());
    expect(mmt(now).daysInMonth()).toBe(moment(now).daysInMonth());
    expect(+mmt(now).toDate()).toBe(+moment(now).toDate());
    expect(mmt(now).toArray().join()).toBe(moment(now).toArray().join());
    expect(mmt(now).toJSON()).toBe(moment(now).toJSON());
    expect(mmt(now).toISOString()).toBe(moment(now).toISOString());
    expect(mmt(now).toString()).toBe(now.toString());
    expect(mmt(now).isBefore(mmt())).toBe(moment(now).isBefore(moment()));
    expect(mmt(now).isSame(mmt())).toBe(moment(now).isSame(moment()));
    expect(mmt(now).isAfter(mmt())).toBe(moment(now).isAfter(moment()));
    expect(mmt('2000-01-01').isLeapYear()).toBe(moment('2000-01-01').isLeapYear());
  });

});
