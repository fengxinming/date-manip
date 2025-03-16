[**date-manip**](index.md)

***

[date-manip](modules.md) / subDays

# subDays

## Functions

### default()

> **default**(`date`, `days`): `Date`

Defined in: [src/subDays.ts:16](https://github.com/fengxinming/date-manip/blob/672f1dce8f57973c145b734bdf778535cf1bb983/src/subDays.ts#L16)

Subtracts a specified number of days from a date.
从日期中减去指定数量的天数。

#### Parameters

##### date

`Date`

The date to subtract days from. (要减去天数的日期。)

##### days

`number`

The number of days to subtract. (要减去的天数。)

#### Returns

`Date`

A new date with the subtracted days. (减去天数后的新日期。)

#### Example

```ts
const newDate = subDays(new Date(), 5);
console.log(newDate); // Outputs the date 5 days ago (输出5天前的日期)
```
