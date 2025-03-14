[**date-manip**](index.md)

***

[date-manip](modules.md) / isSame

# isSame

## Functions

### default()

> **default**(`date`, `input`, `unit`?): `boolean`

Defined in: [src/isSame.ts:61](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/isSame.ts#L61)

Checks if a date is the same as another date or a specified time unit.
检查一个日期是否与另一个日期或指定的时间单位相同。

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

A boolean indicating whether the first date is the same as the second date or time unit.
(布尔值，表示第一个日期是否与第二个日期或时间单位相同。)

#### Example

```ts
// Checking if a date is the same as another date (检查一个日期是否与另一个日期相同)
const date1 = new Date('2023-10-01');
const date2 = new Date('2023-10-01');
const isSameDate = isSame(date1, date2, 'day');
console.log(isSameDate); // Outputs: true (输出: true)

// Checking if a date is the same as a specific year (检查一个日期是否与特定年份相同)
const date3 = new Date('2023-10-01');
const isSameYear = isSame(date3, 2023, 'year');
console.log(isSameYear); // Outputs: true (输出: true)

// Checking if a date is the same as a specific month (检查一个日期是否与特定月份相同)
const date4 = new Date('2023-10-01');
const isSameMonth = isSame(date4, '2023-10', 'month');
console.log(isSameMonth); // Outputs: true (输出: true)

// Checking if a date is the same as a specific day (检查一个日期是否与特定天数相同)
const date5 = new Date('2023-10-01');
const isSameDay = isSame(date5, '2023-10-01', 'day');
console.log(isSameDay); // Outputs: true (输出: true)

// Checking if a date is the same as a specific hour (检查一个日期是否与特定小时相同)
const date6 = new Date('2023-10-01T12:00:00');
const isSameHour = isSame(date6, '2023-10-01T12:00:00', 'hour');
console.log(isSameHour); // Outputs: true (输出: true)

// Checking if a date is the same as a specific minute (检查一个日期是否与特定分钟相同)
const date7 = new Date('2023-10-01T12:00:00');
const isSameMinute = isSame(date7, '2023-10-01T12:00:00', 'minute');
console.log(isSameMinute); // Outputs: true (输出: true)

// Checking if a date is the same as a specific second (检查一个日期是否与特定秒数相同)
const date8 = new Date('2023-10-01T12:00:00');
const isSameSecond = isSame(date8, '2023-10-01T12:00:00', 'second');
console.log(isSameSecond); // Outputs: true (输出: true)

// Checking if a date is the same as a specific millisecond (检查一个日期是否与特定毫秒数相同)
const date9 = new Date('2023-10-01T12:00:00.000');
const isSameMillisecond = isSame(date9, '2023-10-01T12:00:00.000', 'millisecond');
console.log(isSameMillisecond); // Outputs: true (输出: true)
```
