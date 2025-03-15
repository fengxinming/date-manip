[**date-manip**](index.md)

***

[date-manip](modules.md) / subYears

# subYears

## 函数

### default()

> **default**(`date`, `years`): `Date`

定义于: [src/subYears.ts:18](https://github.com/fengxinming/date-manip/blob/3800a276ff67972284419177dad55ada4d463d78/src/subYears.ts#L18)

Subtracts a specified number of years from a date.
从日期中减去指定数量的年份。

#### 参数

##### date

`Date`

The date to subtract years from. (要减去年份的日期。)

##### years

`number`

The number of years to subtract. (要减去的年份数。)

#### 返回

`Date`

A new date with the subtracted years. (减去年份后的新日期。)

#### 示例

```ts
//Subtracting 2 years from a date (从日期中减去2)
const date = new Date('2023-10-01T12:00:00Z');
subYears(date, 2);
// Returns: 2021-10-01T12:00:00.000Z (返回: 2021-10-01T12:00:00.000Z)
```
