[**date-manip**](index.md)

***

[date-manip](modules.md) / addHours

# addHours

## Functions

### default()

> **default**(`date`, `hours`): `Date`

Defined in: [src/addHours.ts:19](https://github.com/fengxinming/date-manip/blob/12d12a4c2a3486e81330ba529f3fb8271142d945/src/addHours.ts#L19)

Adds a specified number of hours to a date.
向日期添加指定数量的小时。

#### Parameters

##### date

`Date`

The date to add hours to. (要添加小时的日期。)

##### hours

`number`

The number of hours to add. (要添加的小时数。)

#### Returns

`Date`

A new date with the added hours. (添加小时后的新日期。)

#### Example

```ts
// Adding 3 hours to a date (向日期添加3小时)
const originalDate = new Date('2023-10-01T12:00:00');
const newDate = addHours(originalDate, 3);
console.log(newDate.toISOString()); // Outputs: '2023-10-01T15:00:00.000Z' (输出: '2023-10-01T15:00:00.000Z')
```
