[**date-manip**](index.md)

***

[date-manip](modules.md) / subSeconds

# subSeconds

## Functions

### default()

> **default**(`date`, `seconds`): `Date`

Defined in: [src/subSeconds.ts:17](https://github.com/fengxinming/date-manip/blob/8fccf261c90ecd05d2eaf7f8c5a47a123e2bb753/src/subSeconds.ts#L17)

Subtracts a specified number of seconds from a date.
从日期中减去指定数量的秒。

#### Parameters

##### date

`Date`

The date to subtract seconds from. (要从日期中减去秒的日期。)

##### seconds

`number`

The number of seconds to subtract. (要减去的秒数。)

#### Returns

`Date`

A new date with the subtracted seconds. (减去秒后的新日期。)

#### Example

```ts
// Subtracting 30 seconds from a date (从日期中减)
subSeconds(new Date(2014, 1, 28, 0, 30, 40), 30);
//=> Thu Feb 27 2014 23:59:10
```
