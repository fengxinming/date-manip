[**date-manip**](index.md)

***

[date-manip](modules.md) / subMilliseconds

# subMilliseconds

## Functions

### default()

> **default**(`date`, `ms`): `Date`

Defined in: [src/subMilliseconds.ts:17](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/subMilliseconds.ts#L17)

Subtracts a specified number of milliseconds from a date.
从日期中减去指定的毫秒数。

#### Parameters

##### date

`Date`

The date to subtract milliseconds from. (要从中减去毫秒的日期。)

##### ms

`number`

The number of milliseconds to subtract. (要减去的毫秒数。)

#### Returns

`Date`

A new date with the subtracted milliseconds. (减去毫秒后的新日期。)

#### Example

```typescript
// Subtract 500 milliseconds from 10/31/2021 5:45:50 PM
const result = subMilliseconds(new Date(2021, 9, 31, 17, 45, 50, 500), 500);
//=> Thu Oct 31 2021 17:45:49.000
```
