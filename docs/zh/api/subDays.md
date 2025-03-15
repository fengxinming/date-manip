[**date-manip**](index.md)

***

[date-manip](modules.md) / subDays

# subDays

## 函数

### default()

> **default**(`date`, `days`): `Date`

定义于: [src/subDays.ts:16](https://github.com/fengxinming/date-manip/blob/3800a276ff67972284419177dad55ada4d463d78/src/subDays.ts#L16)

Subtracts a specified number of days from a date.
从日期中减去指定数量的天数。

#### 参数

##### date

`Date`

The date to subtract days from. (要减去天数的日期。)

##### days

`number`

The number of days to subtract. (要减去的天数。)

#### 返回

`Date`

A new date with the subtracted days. (减去天数后的新日期。)

#### 示例

```ts
const newDate = subDays(new Date(), 5);
console.log(newDate); // Outputs the date 5 days ago (输出5天前的日期)
```
