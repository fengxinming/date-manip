[**date-manip**](index.md)

***

[date-manip](modules.md) / subMinutes

# subMinutes

## Functions

### default()

> **default**(`date`, `minutes`): `Date`

Defined in: [src/subMinutes.ts:18](https://github.com/fengxinming/date-manip/blob/672f1dce8f57973c145b734bdf778535cf1bb983/src/subMinutes.ts#L18)

Subtracts a specified number of minutes from a date.
从日期中减去指定数量的分钟。

#### Parameters

##### date

`Date`

The date to subtract minutes from. (要从日期中减去的日期。)

##### minutes

`number`

The number of minutes to subtract. (要减去的分钟数。)

#### Returns

`Date`

A new date with the subtracted minutes. (减去分钟后的新日期。)

#### Example

```ts
// Subtracting 30 minutes from a date (从日期中减去30分钟)
const date = new Date('2023-10-01T12:00:00Z');
subMinutes(date, 30);
// Returns: 2023-10-01T11:30:00.000Z (返回: 2023-10-01T11:30:00.000Z)
```
