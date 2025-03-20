[**date-manip**](index.md)

***

[date-manip](modules.md) / isSameOrAfter

# isSameOrAfter

## Functions

### default()

> **default**(`date`, `input`, `unit`?): `boolean`

Defined in: [src/isSameOrAfter.ts:63](https://github.com/fengxinming/date-manip/blob/8fccf261c90ecd05d2eaf7f8c5a47a123e2bb753/src/isSameOrAfter.ts#L63)

Checks if a date is the same as or after another date or a specified time unit.
检查一个日期是否与另一个日期或指定的时间单位相同或在其之后。

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

A boolean indicating whether the first date is the same as or after the second date or time unit.
(布尔值，表示第一个日期是否与第二个日期或时间单位相同或在其之后。)

#### Example

```ts
// Checking if a date is the same as or after another date (检查一个日期是否与另一个日期相同或在其之后)
const date1 = new Date('2023-10-01');
const date2 = new Date('2023-10-01');
const isSameOrAfterDate = isSameOrAfter(date1, date2, 'day');
console.log(isSameOrAfterDate); // Outputs: true (输出: true)

// Checking if a date is after another date (检查一个日期是否在另一个日期之后)
const date3 = new Date('2023-10-02');
const isSameOrAfterDate2 = isSameOrAfter(date3, date2, 'day');
console.log(isSameOrAfterDate2); // Outputs: true (输出: true)

// Checking if a date is the same as or after a specific year (检查一个日期是否与特定年份相同或在其之后)
const date4 = new Date('2023-01-01');
const isSameOrAfterYear = isSameOrAfter(date4, 2023, 'year');
console.log(isSameOrAfterYear); // Outputs: true (输出: true)

// Checking if a date is the same as or after a specific month (检查一个日期是否与特定月份相同或在其之后)
const date5 = new Date('2023-10-01');
const isSameOrAfterMonth = isSameOrAfter(date5, '2023-10', 'month');
console.log(isSameOrAfterMonth); // Outputs: true (输出: true)

// Checking if a date is the same as or after a specific day (检查一个日期是否与特定天数相同或在其之后)
const date6 = new Date('2023-10-01');
const isSameOrAfterDay = isSameOrAfter(date6, '2023-10-01', 'day');
console.log(isSameOrAfterDay); // Outputs: true (输出: true)

// Checking if a date is the same as or after a specific hour (检查一个日期是否与特定小时相同或在其之后)
const date7 = new Date('2023-10-01T12:00:00');
const isSameOrAfterHour = isSameOrAfter(date7, '2023-10-01T12:00:00', 'hour');
console.log(isSameOrAfterHour); // Outputs: true (输出: true)

// Checking if a date is the same as or after a specific minute (检查一个日期是否与特定分钟相同或在其之后)
const date8 = new Date('2023-10-01T12:00:00');
const isSameOrAfterMinute = isSameOrAfter(date8, '2023-10-01T12:00:00', 'minute');
console.log(isSameOrAfterMinute); // Outputs: true (输出: true)

// Checking if a date is the same as or after a specific second (检查一个日期是否与特定秒数相同或在其之后)
const date9 = new Date('2023-10-01T12:00:00');
const isSameOrAfterSecond = isSameOrAfter(date9, '2023-10-01T12:00:00', 'second');
console.log(isSameOrAfterSecond); // Outputs: true (输出: true)

// Checking if a date is the same as or after a specific millisecond (检查一个日期是否与特定毫秒数相同或在其之后)
const date10 = new Date('2023-10-01T12:00:00.000');
const isSameOrAfterMillisecond = isSameOrAfter(date10, '2023-10-01T12:00:00.000', 'millisecond');
console.log(isSameOrAfterMillisecond); // Outputs: true (输出: true)
```
