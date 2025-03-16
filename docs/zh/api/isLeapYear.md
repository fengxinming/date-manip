[**date-manip**](index.md)

***

[date-manip](modules.md) / isLeapYear

# isLeapYear

## 函数

### default()

> **default**(`date`): `boolean`

定义于: [src/isLeapYear.ts:22](https://github.com/fengxinming/date-manip/blob/74162e61fff73f0ace27e57ce0b5395775c035f2/src/isLeapYear.ts#L22)

Checks if a given date is in a leap year.
检查给定的日期是否在闰年。

#### 参数

##### date

`Date`

The date to check. (要检查的日期。)

#### 返回

`boolean`

A boolean indicating whether the given date is in a leap year. (布尔值，表示给定的日期是否在闰年。)

#### 示例

```ts
// Checking if a date is in a leap year (检查一个日期是否在闰年)
const date1 = new Date('2024-01-01');
const isLeap = isLeapYear(date1);
console.log(isLeap); // Outputs: true (输出: true)

// Checking if a date is not in a leap year (检查一个日期是否不在闰年)
const date2 = new Date('2023-01-01');
const isNotLeap = isLeapYear(date2);
console.log(isNotLeap); // Outputs: false (输出: false)
```
