[**date-manip**](index.md)

***

[date-manip](modules.md) / subMilliseconds

# subMilliseconds

## 函数

### default()

> **default**(`date`, `ms`): `Date`

定义于: [src/subMilliseconds.ts:17](https://github.com/fengxinming/date-manip/blob/3800a276ff67972284419177dad55ada4d463d78/src/subMilliseconds.ts#L17)

Subtracts a specified number of milliseconds from a date.
从日期中减去指定的毫秒数。

#### 参数

##### date

`Date`

The date to subtract milliseconds from. (要从中减去毫秒的日期。)

##### ms

`number`

The number of milliseconds to subtract. (要减去的毫秒数。)

#### 返回

`Date`

A new date with the subtracted milliseconds. (减去毫秒后的新日期。)

#### 示例

```typescript
// Subtract 500 milliseconds from 10/31/2021 5:45:50 PM
const result = subMilliseconds(new Date(2021, 9, 31, 17, 45, 50, 500), 500);
//=> Thu Oct 31 2021 17:45:49.000
```
