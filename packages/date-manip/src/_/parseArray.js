import isNil from 'celia/isNil';

/**
 * 将数组解析成date
 * @param {Array} arr
 * @param {Boolean|undefined} isUTC
 */
export default function (arr, isUTC) {
  let date = isUTC ?
    new Date(Date.UTC(
      arr[0],
      arr[1] || 0,
      isNil(arr[2]) ? 1 : arr[2],
      arr[3] || 0,
      arr[4] || 0,
      arr[5] || 0,
      arr[6] || 0
    )) : new Date(
      arr[0],
      arr[1] || 0,
      isNil(arr[2]) ? 1 : arr[2],
      arr[3] || 0,
      arr[4] || 0,
      arr[5] || 0,
      arr[6] || 0
    );
  return date;
}
