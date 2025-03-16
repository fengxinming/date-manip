[**date-manip**](index.md)

***

[date-manip](modules.md) / isBefore

# isBefore

## Functions

### default()

> **default**(`date`, `input`, `unit`?): `boolean`

Defined in: [src/isBefore.ts:60](https://github.com/fengxinming/date-manip/blob/74162e61fff73f0ace27e57ce0b5395775c035f2/src/isBefore.ts#L60)

Checks if a date is before another date or a specified time unit.
检查一个日期是否在另一个日期或指定的时间单位之前。

#### Parameters

##### date

`Date`

The date to compare. (要比较的日期。)

##### input

[`DateInput`](types.md#dateinput)

The date or time unit to compare against. (要比较的日期或时间单位。)

##### unit?

[`Unit`](types.md#unit)

The unit of time to compare (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
(要比较的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)

#### Returns

`boolean`

A boolean indicating whether the first date is before the second date or time unit.
(布尔值，表示第一个日期是否在第二个日期或时间单位之前。)

#### Example

```ts
// Checking if a date is before another date (检查一个日期是否在另一个日期之前)
const date1 = new Date('2023-09-01');
const date2 = new Date('2023-10-01');
const isBeforeDate = isBefore(date1, date2, 'day');
console.log(isBeforeDate); // Outputs: true (输出: true)

// Checking if a date is before a specific year (检查一个日期是否在特定年份之前)
const date3 = new Date('2022-12-31');
const isBeforeYear = isBefore(date3, 2023, 'year');
console.log(isBeforeYear); // Outputs: true (输出: true)

// Checking if a date is before a specific month (检查一个日期是否在特定月份之前)
const date4 = new Date('2023-09-01');
const isBeforeMonth = isBefore(date4, '2023-10', 'month');
console.log(isBeforeMonth); // Outputs: true (输出: true)

// Checking if a date is before a specific day (检查一个日期是否在特定天数之前)
const date5 = new Date('2023-10-01');
const isBeforeDay = isBefore(date5, '2023-10-02', 'day');
console.log(isBeforeDay); // Outputs: true (输出: true)

// Checking if a date is before a specific hour (检查一个日期是否在特定小时之前)
const date6 = new Date('2023-10-01T12:00:00');
const isBeforeHour = isBefore(date6, '2023-10-01T13:00:00', 'hour');
console.log(isBeforeHour); // Outputs: true (输出: true)

// Checking if a date is before a specific minute (检查一个日期是否在特定分钟之前)
const date7 = new Date('2023-10-01T12:00:00');
const isBeforeMinute = isBefore(date7, '2023-10-01T12:01:00', 'minute');
console.log(isBeforeMinute); // Outputs: true (输出: true)

// Checking if a date is before a specific second (检查一个日期是否在特定秒数之前)
const date8 = new Date('2023-10-01T12:00:00');
const isBeforeSecond = isBefore(date8, '2023-10-01T12:00:01', 'second');
console.log(isBeforeSecond); // Outputs: true (输出: true)

// Checking if a date is before a specific millisecond (检查一个日期是否在特定毫秒数之前)
const date9 = new Date('2023-10-01T12:00:00.000');
const isBeforeMillisecond = isBefore(date9, '2023-10-01T12:00:00.500', 'millisecond');
console.log(isBeforeMillisecond); // Outputs: true (输出: true)
```
