import isLeapYear from './_isLeapYear';

export default function (date) {
  return isLeapYear(date.getFullYear());
};
