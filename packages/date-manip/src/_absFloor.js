export default function (number) {
  // -0 -> 0
  return number < 0 ? (Math.ceil(number) || 0) : Math.floor(number);
}
