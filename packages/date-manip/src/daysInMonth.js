import daysInMonthOfYear from './_daysInMonthOfYear';

export default function (date) {
  return daysInMonthOfYear(date.getFullYear())[date.getMonth()];
};
