export default function (date, time) {
  date.setTime(+date + time);
  return date;
}
