[**date-manip**](index.md)

***

[date-manip](modules.md) / addMinutes

# addMinutes

## Functions

### default()

> **default**(`date`, `minutes`): `Date`

Defined in: [src/addMinutes.ts:19](https://github.com/fengxinming/date-manip/blob/8fccf261c90ecd05d2eaf7f8c5a47a123e2bb753/src/addMinutes.ts#L19)

Adds a specified number of minutes to a date.
向日期添加指定数量的分钟。

#### Parameters

##### date

`Date`

The date to add minutes to. (要添加分钟的日期。)

##### minutes

`number`

The number of minutes to add. (要添加的分钟数。)

#### Returns

`Date`

A new date with the added minutes. (添加分钟后的新日期。)

#### Example

```ts
// Adding 30 minutes to a date (向日期添加30分钟)
const originalDate = new Date('2023-10-01T12:00:00');
addMinutes(originalDate, 30);
console.log(originalDate.toISOString()); // Outputs: '2023-10-01T12:30:00.000Z' (输出: '2023-10-01T12:30:00.000Z')
```
