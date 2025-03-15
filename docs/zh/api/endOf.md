[**date-manip**](index.md)

***

[date-manip](modules.md) / endOf

# endOf

## 函数

### default()

> **default**(`date`, `unit`): `Date`

定义于: [src/endOf.ts:53](https://github.com/fengxinming/date-manip/blob/3800a276ff67972284419177dad55ada4d463d78/src/endOf.ts#L53)

Sets the date to the end of the specified unit of time.
将日期设置为指定时间单位的结束时间。

#### 参数

##### date

`Date`

The date to set to the end of the specified unit. (要设置为指定时间单位结束时间的日期。)

##### unit

[`Unit`](types.md#unit)

The unit of time to set the end of (e.g., 'year', 'month', 'day', 'hour', 'minute', 'second').
(要设置结束时间的时间单位，例如 'year'、'month'、'day'、'hour'、'minute'、'second'。)

#### 返回

`Date`

A new date object set to the end of the specified unit. (设置为指定时间单位结束时间的新日期对象。)

#### 示例

```ts
// Setting the end of the year (设置年份结束时间)
const date1 = new Date('2023-01-01');
const endOfYear = endOf(date1, 'year');
console.log(endOfYear.toISOString()); // Outputs: '2023-12-31T23:59:59.999Z' (输出: '2023-12-31T23:59:59.999Z')

// Setting the end of the month (设置月份结束时间)
const date2 = new Date('2023-10-01');
const endOfMonth = endOf(date2, 'month');
console.log(endOfMonth.toISOString()); // Outputs: '2023-10-31T23:59:59.999Z' (输出: '2023-10-31T23:59:59.999Z')

// Setting the end of the day (设置天数结束时间)
const date3 = new Date('2023-10-01T12:00:00');
const endOfDay = endOf(date3, 'day');
console.log(endOfDay.toISOString()); // Outputs: '2023-10-01T23:59:59.999Z' (输出: '2023-10-01T23:59:59.999Z')

// Setting the end of the hour (设置小时结束时间)
const date4 = new Date('2023-10-01T12:00:00');
const endOfHour = endOf(date4, 'hour');
console.log(endOfHour.toISOString()); // Outputs: '2023-10-01T12:59:59.999Z' (输出: '2023-10-01T12:59:59.999Z')

// Setting the end of the minute (设置分钟结束时间)
const date5 = new Date('2023-10-01T12:00:00');
const endOfMinute = endOf(date5, 'minute');
console.log(endOfMinute.toISOString()); // Outputs: '2023-10-01T12:00:59.999Z' (输出: '2023-10-01T12:00:59.999Z')

// Setting the end of the second (设置秒数结束时间)
const date6 = new Date('2023-10-01T12:00:00');
const endOfSecond = endOf(date6, 'second');
console.log(endOfSecond.toISOString()); // Outputs: '2023-10-01T12:00:00.999Z' (输出: '2023-10-01T12:00:00.999Z')
```
