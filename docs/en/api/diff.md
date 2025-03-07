[**date-manip**](index.md)

***

[date-manip](modules.md) / diff

# diff

## Functions

### default()

> **default**(`date`, `input`, `unit`, `asFloat`?): `number`

Defined in: [src/diff.ts:60](https://github.com/fengxinming/date-manip/blob/12d12a4c2a3486e81330ba529f3fb8271142d945/src/diff.ts#L60)

Calculates the difference between two dates in specified time units.
计算两个日期之间的指定时间单位差异。

#### Parameters

##### date

`Date`

The first date. (第一个日期。)

##### input

[`DateInput`](types.md#dateinput)

The second date. (第二个日期。)

##### unit

[`Unit`](types.md#unit)

The unit of time to calculate the difference in
(e.g., 'year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond').
(要计算差异的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'、'millisecond'。)

##### asFloat?

`boolean`

Whether to return the difference as a floating-point number. (是否以浮点数形式返回差异。)

#### Returns

`number`

The difference between the two dates in the specified time units. (两个日期之间的指定时间单位差异。)

#### Example

```ts
// Calculating the difference in years (计算年份差异)
const date1 = new Date('2023-01-01');
const date2 = new Date('2024-01-01');
const yearsDiff = diff(date1, date2, 'year');
console.log(yearsDiff); // Outputs: 1 (输出: 1)

// Calculating the difference in months (计算月份差异)
const monthsDiff = diff(date1, date2, 'month');
console.log(monthsDiff); // Outputs: 12 (输出: 12)

// Calculating the difference in days (计算天数差异)
const daysDiff = diff(date1, date2, 'day');
console.log(daysDiff); // Outputs: 365 (输出: 365)

// Calculating the difference in hours (计算小时差异)
const hoursDiff = diff(date1, date2, 'hour');
console.log(hoursDiff); // Outputs: 8760 (输出: 8760)

// Calculating the difference in minutes (计算分钟差异)
const minutesDiff = diff(date1, date2, 'minute');
console.log(minutesDiff); // Outputs: 525600 (输出: 525600)

// Calculating the difference in seconds (计算秒数差异)
const secondsDiff = diff(date1, date2, 'second');
console.log(secondsDiff); // Outputs: 31536000 (输出: 31536000)

// Calculating the difference in milliseconds (计算毫秒差异)
const msDiff = diff(date1, date2, 'millisecond');
console.log(msDiff); // Outputs: 31536000000 (输出: 31536000000)
```
