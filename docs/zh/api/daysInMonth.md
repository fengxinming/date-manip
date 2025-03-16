[**date-manip**](index.md)

***

[date-manip](modules.md) / daysInMonth

# daysInMonth

## 函数

### default()

> **default**(`date`): `number`

定义于: [src/daysInMonth.ts:22](https://github.com/fengxinming/date-manip/blob/672f1dce8f57973c145b734bdf778535cf1bb983/src/daysInMonth.ts#L22)

Gets the number of days in the month for a given date.
获取给定日期所在月份的天数。

#### 参数

##### date

`Date`

The date to get the number of days in the month for. (要获取月份天数的日期。)

#### 返回

`number`

The number of days in the month. (月份的天数。)

#### 示例

```ts
// Getting the number of days in October 2023 (获取2023年10月的天数)
const date = new Date('2023-10-01');
const days = daysInMonth(date);
console.log(days); // Outputs: 31 (输出: 31)

// Getting the number of days in February 2024 (获取2024年2月的天数)
const date2 = new Date('2024-02-01');
const days2 = daysInMonth(date2);
console.log(days2); // Outputs: 29 (输出: 29)
```
