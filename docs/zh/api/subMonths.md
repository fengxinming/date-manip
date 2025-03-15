[**date-manip**](index.md)

***

[date-manip](modules.md) / subMonths

# subMonths

## 函数

### default()

> **default**(`date`, `months`): `Date`

定义于: [src/subMonths.ts:18](https://github.com/fengxinming/date-manip/blob/3800a276ff67972284419177dad55ada4d463d78/src/subMonths.ts#L18)

Subtracts a specified number of months from a date.
从日期中减去指定数量的月份。

#### 参数

##### date

`Date`

The date to subtract months from. (要减去月份的日期。)

##### months

`number`

The number of months to subtract. (要减去的月份数。)

#### 返回

`Date`

A new date with the subtracted months. (减去月份后的新日期。)

#### 示例

```ts
//Subtracting 2 months from a date (从日期中减去2)
const date = new Date('2023-10-31T12:00:00Z');
subMonths(date, 2);
// Returns: 2023-08-31T12:00:00Z (返回: 2023-08-31T12:00:00Z)
```
