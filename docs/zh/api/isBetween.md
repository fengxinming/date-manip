[**date-manip**](index.md)

***

[date-manip](modules.md) / isBetween

# isBetween

## 函数

### default()

> **default**(`date`, `from`, `to`, `unit`?, `inclusivity`?): `boolean`

定义于: [src/isBetween.ts:75](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/isBetween.ts#L75)

Checks if a date is between two other dates or specified time units.
检查一个日期是否在两个其他日期或指定的时间单位之间。

#### 参数

##### date

`Date`

The date to check. (要检查的日期。)

##### from

[`DateInput`](types.md#dateinput)

The start date or time unit. (起始日期或时间单位。)

##### to

[`DateInput`](types.md#dateinput)

The end date or time unit. (结束日期或时间单位。)

##### unit?

[`Unit`](types.md#unit)

The unit of time to compare (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
(要比较的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)

##### inclusivity?

`string`

A string indicating whether the comparison is inclusive or exclusive.
(表示比较是否包含边界的字符串。)
                     - '()' means exclusive (不包含边界) (默认值)
                     - '[)' means inclusive on the start, exclusive on the end (包含起始边界，不包含结束边界)
                     - '(]' means exclusive on the start, inclusive on the end (不包含起始边界，包含结束边界)
                     - '[]' means inclusive (包含边界)

#### 返回

`boolean`

A boolean indicating whether the date is between the two specified dates or time units.
(布尔值，表示日期是否在两个指定的日期或时间单位之间。)

#### 示例

```ts
// Checking if a date is between two dates (检查一个日期是否在两个日期之间)
const date = new Date('2023-10-01');
const from = new Date('2023-09-01');
const to = new Date('2023-11-01');
const isBetweenDates = isBetween(date, from, to, 'day');
console.log(isBetweenDates); // Outputs: true (输出: true)

// Checking if a date is between two years (检查一个日期是否在两个年份之间)
const date2 = new Date('2023-01-01');
const isBetweenYears = isBetween(date2, 2022, 2024, 'year');
console.log(isBetweenYears); // Outputs: true (输出: true)

// Checking if a date is between two months (检查一个日期是否在两个月份之间)
const date3 = new Date('2023-10-01');
const isBetweenMonths = isBetween(date3, '2023-09', '2023-11', 'month');
console.log(isBetweenMonths); // Outputs: true (输出: true)

// Checking if a date is between two days (检查一个日期是否在两个天数之间)
const date4 = new Date('2023-10-02');
const isBetweenDays = isBetween(date4, '2023-10-01', '2023-10-03', 'day');
console.log(isBetweenDays); // Outputs: true (输出: true)

// Checking if a date is between two hours (检查一个日期是否在两个小时之间)
const date5 = new Date('2023-10-01T12:00:00');
const isBetweenHours = isBetween(date5, '2023-10-01T11:00:00', '2023-10-01T13:00:00', 'hour');
console.log(isBetweenHours); // Outputs: true (输出: true)

// Checking if a date is between two minutes (检查一个日期是否在两个分钟之间)
const date6 = new Date('2023-10-01T12:01:00');
const isBetweenMinutes = isBetween(date6, '2023-10-01T12:00:00', '2023-10-01T12:02:00', 'minute');
console.log(isBetweenMinutes); // Outputs: true (输出: true)

// Checking if a date is between two seconds (检查一个日期是否在两个秒数之间)
const date7 = new Date('2023-10-01T12:00:01');
const isBetweenSeconds = isBetween(date7, '2023-10-01T12:00:00', '2023-10-01T12:00:02', 'second');
console.log(isBetweenSeconds); // Outputs: true (输出: true)

// Checking if a date is between two milliseconds (检查一个日期是否在两个毫秒数之间)
const date8 = new Date('2023-10-01T12:00:00.500');
const isBetweenMilliseconds = isBetween(date8, '2023-10-01T12:00:00.000', '2023-10-01T12:00:00.999', 'millisecond');
console.log(isBetweenMilliseconds); // Outputs: true (输出: true)

// Using different inclusivity options (使用不同的包含选项)
const date9 = new Date('2023-10-01');
const isBetweenInclusive = isBetween(date9, '2023-10-01', '2023-10-01', 'day', '[]');
console.log(isBetweenInclusive); // Outputs: true (输出: true)

const isBetweenExclusive = isBetween(date9, '2023-10-01', '2023-10-01', 'day', '()');
console.log(isBetweenExclusive); // Outputs: false (输出: false)
```
