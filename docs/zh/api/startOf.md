[**date-manip**](index.md)

***

[date-manip](modules.md) / startOf

# startOf

## 函数

### default()

> **default**(`date`, `unit`): `Date`

定义于: [src/startOf.ts:53](https://github.com/fengxinming/date-manip/blob/12d12a4c2a3486e81330ba529f3fb8271142d945/src/startOf.ts#L53)

Sets the date to the start of the specified unit of time.
将日期设置为指定时间单位的开始时间。

#### 参数

##### date

`Date`

The date to set to the start of the specified unit. (要设置为指定时间单位开始时间的日期。)

##### unit

[`Unit`](types.md#unit)

The unit of time to set the start of (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second').
(要设置开始时间的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'。)

#### 返回

`Date`

A new date object set to the start of the specified unit. (设置为指定时间单位开始时间的新日期对象。)

#### 示例

```ts
// Setting the start of the year (设置年份开始时间)
const date1 = new Date('2023-10-01');
const startOfYear = startOf(date1, 'year');
console.log(startOfYear.toISOString()); // Outputs: '2023-01-01T00:00:00.000Z' (输出: '2023-01-01T00:00:00.000Z')

// Setting the start of the month (设置月份开始时间)
const date2 = new Date('2023-10-01');
const startOfMonth = startOf(date2, 'month');
console.log(startOfMonth.toISOString()); // Outputs: '2023-10-01T00:00:00.000Z' (输出: '2023-10-01T00:00:00.000Z')

// Setting the start of the day (设置天数开始时间)
const date3 = new Date('2023-10-01T12:30:45');
const startOfDay = startOf(date3, 'day');
console.log(startOfDay.toISOString()); // Outputs: '2023-10-01T00:00:00.000Z' (输出: '2023-10-01T00:00:00.000Z')

// Setting the start of the hour (设置小时开始时间)
const date4 = new Date('2023-10-01T12:30:45');
const startOfHour = startOf(date4, 'hour');
console.log(startOfHour.toISOString()); // Outputs: '2023-10-01T12:00:00.000Z' (输出: '2023-10-01T12:00:00.000Z')

// Setting the start of the minute (设置分钟开始时间)
const date5 = new Date('2023-10-01T12:30:45');
const startOfMinute = startOf(date5, 'minute');
console.log(startOfMinute.toISOString()); // Outputs: '2023-10-01T12:30:00.000Z' (输出: '2023-10-01T12:30:00.000Z')

// Setting the start of the second (设置秒数开始时间)
const date6 = new Date('2023-10-01T12:30:45.678');
const startOfSecond = startOf(date6, 'second');
console.log(startOfSecond.toISOString()); // Outputs: '2023-10-01T12:30:45.000Z' (输出: '2023-10-01T12:30:45.000Z')
```
