export const ASP_NET_JSON_REGEX = /^\/?Date\((-?\d+)/i;

export const BASIC_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

export const DATES_REGEX = [
  ['YYYY-MM-DD', /(\d{4})-(\d\d)-(\d\d)/],
  ['YYYY-MM', /(\d{4})-(\d\d)/, false],
  // ['MM/DD/YYYY', /(\d\d)\/(\d\d)\/(\d{4})/],
  ['YYYYMMDD', /(\d{4})(\d\d)(\d\d)/],
  ['YYYYMM', /(\d{4})(\d\d)/, false],
  ['YYYY', /\d{4}/, false]
];

export const EXTENDED_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

// export const COMPAT_NON_ISO_REGEX = /^\s*((?:\d\d[-/]\d\d|W\d\d[-/]\d|W\d\d|\d\d\d|\d\d)[-/](?:\d{6}|\d{4}))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

export const FORMAT_REGEX = /\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g;

export const TIMES_REGEX = [
  ['HH:mm:ss.SSSS', /(\d\d):(\d\d):(\d\d)\.(\d+)/],
  ['HH:mm:ss,SSSS', /(\d\d):(\d\d):(\d\d),(\d+)/],
  ['HH:mm:ss', /(\d\d):(\d\d):(\d\d)/],
  ['HH:mm', /(\d\d):(\d\d)/],
  ['HHmmss.SSSS', /(\d\d)(\d\d)(\d\d)\.(\d+)/],
  ['HHmmss,SSSS', /(\d\d)(\d\d)(\d\d),(\d+)/],
  ['HHmmss', /(\d\d)(\d\d)(\d\d)/],
  ['HHmm', /(\d\d)(\d\d)/],
  ['HH', /\d\d/]
];

export const TZ_REGEX = /(Z)|[+-](\d\d)(?::?(\d\d))?/;
