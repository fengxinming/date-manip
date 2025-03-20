[**date-manip**](index.md)

***

[date-manip](modules.md) / subHours

# subHours

## Functions

### default()

> **default**(`date`, `hours`): `Date`

Defined in: [src/subHours.ts:17](https://github.com/fengxinming/date-manip/blob/8fccf261c90ecd05d2eaf7f8c5a47a123e2bb753/src/subHours.ts#L17)

Subtracts a specified number of hours from a date.
从日期中减去指定数量的小时。

#### Parameters

##### date

`Date`

The date to subtract hours from. (要从日期中减去的小时数。)

##### hours

`number`

The number of hours to subtract. (要减去的小时数。)

#### Returns

`Date`

A new date with the subtracted hours. (减去小时后的新日期。)

#### Example

```ts
//Subtracting 3 hours from a date (从日期中减去3)
subHours(new Date(2014, 6, 2, 11, 55), 3);
//=> Thu Jul 02 2015 08:55:00
```
