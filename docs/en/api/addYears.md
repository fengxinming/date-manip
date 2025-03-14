[**date-manip**](index.md)

***

[date-manip](modules.md) / addYears

# addYears

## Functions

### default()

> **default**(`date`, `years`): `Date`

Defined in: [src/addYears.ts:18](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/addYears.ts#L18)

Adds a specified number of years to a date.
向日期添加指定数量的年份。

#### Parameters

##### date

`Date`

The date to add years to. (要添加年份的日期。)

##### years

`number`

The number of years to add. (要添加的年份数。)

#### Returns

`Date`

A new date with the added years. (添加年份后的新日期。)

#### Example

```ts
// Adding 2 years to a date (向日期添加2年)
const originalDate = new Date('2023-10-01T12:00:00');
addYears(originalDate, 2);
console.log(originalDate.toISOString()); // Outputs: '2025-10-01T12:00:00.000Z' (输出: '2025-10-01T12:00:00.000Z')
```
