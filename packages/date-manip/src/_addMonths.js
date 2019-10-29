import daysInMonth from './daysInMonth';

export default function (date, months) {
  const expectedMonth = date.getMonth() + months;
  // 目标时间当月总天数
  const tempMaxDay = daysInMonth(new Date(date.getFullYear(), expectedMonth, 1, 0, 0, 0, 0));
  const currentDay = date.getDate();
  date.setMonth(expectedMonth, currentDay > tempMaxDay ? tempMaxDay : currentDay);
  return date;
}
