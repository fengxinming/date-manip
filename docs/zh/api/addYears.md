[**date-manip**](index.md)

***

[date-manip](modules.md) / addYears

# addYears

## 函数

### default()

> **default**(`date`, `years`): `Date`

定义于: [src/addYears.ts:18](https://github.com/fengxinming/date-manip/blob/3800a276ff67972284419177dad55ada4d463d78/src/addYears.ts#L18)

Adds a specified number of years to a date.
向日期添加指定数量的年份。

#### 参数

##### date

`Date`

The date to add years to. (要添加年份的日期。)

##### years

`number`

The number of years to add. (要添加的年份数。)

#### 返回

`Date`

A new date with the added years. (添加年份后的新日期。)

#### 示例

```ts
// Adding 2 years to a date (向日期添加2年)
const originalDate = new Date('2023-10-01T12:00:00');
addYears(originalDate, 2);
console.log(originalDate.toISOString()); // Outputs: '2025-10-01T12:00:00.000Z' (输出: '2025-10-01T12:00:00.000Z')
```
