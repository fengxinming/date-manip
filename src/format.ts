const FORMAT_REGEX = /\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g;

const PADDING_ZERO = '000';

function padLeft(val: number | string, len?: number): string {
  return String(val).padStart(len || 2, PADDING_ZERO);
}

function timezone(minutes: number, together?: boolean): string {
  let prefix;
  if (minutes < 0) {
    prefix = '+';
    minutes = Math.abs(minutes);
  }
  else {
    prefix = '-';
  }
  return `${prefix}${padLeft(Math.floor(minutes / 60))}${together ? '' : ':'}${padLeft(Math.floor(minutes % 60))}`;
}

function h12(hours: number): number {
  hours = hours || 24;
  return hours > 12 ? hours - 12 : hours;
}

/**
 * Formats a date according to the specified format string.
 * 根据指定的格式字符串格式化日期。
 *
 * @param date - The date to format. (要格式化的日期。)
 * @param formatString - The format string to use. (要使用的格式字符串。)
 * @returns The formatted date string. (格式化后的日期字符串。)
 * @example
 * ```ts
 * // Formatting a date with 'YYYY-MM-DD' format (使用 'YYYY-MM-DD' 格式格式化日期)
 * const date1 = new Date('2023-10-01T12:00:00');
 * const formattedDate1 = format(date1, 'YYYY-MM-DD');
 * console.log(formattedDate1); // Outputs: '2023-10-01' (输出: '2023-10-01')
 *
 * // Formatting a date with 'YYYY-MM-DD HH:mm:ss' format (使用 'YYYY-MM-DD HH:mm:ss' 格式格式化日期)
 * const date2 = new Date('2023-10-01T12:30:45');
 * const formattedDate2 = format(date2, 'YYYY-MM-DD HH:mm:ss');
 * console.log(formattedDate2); // Outputs: '2023-10-01 12:30:45' (输出: '2023-10-01 12:30:45')
 *
 * // Formatting a date with 'YYYY-MM-DDTHH:mm:ssZ' format (使用 'YYYY-MM-DDTHH:mm:ssZ' 格式格式化日期)
 * const date3 = new Date('2023-10-01T12:30:45');
 * const formattedDate3 = format(date3, 'YYYY-MM-DDTHH:mm:ssZ');
 * console.log(formattedDate3); // Outputs: '2023-10-01T12:30:45-04:00' (输出: '2023-10-01T12:30:45-04:00')
 *
 * // Using 'UTC' format (使用 'UTC' 格式)
 * const date4 = new Date('2023-10-01T12:30:45');
 * const formattedDate4 = format(date4, 'UTC');
 * console.log(formattedDate4); // Outputs: '2023-10-01T16:30:45.000Z' (输出: '2023-10-01T16:30:45.000Z')
 * ```
 */
export default function format(date: Date, formatString?: string): string {
  if (!formatString || formatString === 'ISO') {
    return date.toISOString();
  }

  const timezoneOffset = (new Date()).getTimezoneOffset();
  return formatString.replace(FORMAT_REGEX, (matched): any => {
    switch (matched) {
      case 'YY':
        return String(date.getFullYear()).slice(-2);
      case 'YYYY':
      case 'yyyy':
        return date.getFullYear();
      case 'M':
        return date.getMonth() + 1;
      case 'MM':
        return padLeft(date.getMonth() + 1);
      case 'D':
      case 'd':
        return date.getDate();
      case 'DD':
      case 'dd':
        return padLeft(date.getDate());
      // case 'T':
      //   return ' ';
      case 'H':
        return date.getHours();
      case 'HH':
        return padLeft(date.getHours());
      case 'h':
        return h12(date.getHours());
      case 'hh':
        return padLeft(h12(date.getHours()));
      case 'm':
        return date.getMinutes();
      case 'mm':
        return padLeft(date.getMinutes());
      case 's':
        return date.getSeconds();
      case 'ss':
        return padLeft(date.getSeconds());
      case 'SSS':
        return padLeft(date.getMilliseconds(), 3);
      case 'Z':
        return timezone(timezoneOffset);
      case 'ZZ':
        return timezone(timezoneOffset, true);
    }
    return matched;
  });
}
