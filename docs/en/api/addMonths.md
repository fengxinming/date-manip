[**date-manip**](index.md)

***

[date-manip](modules.md) / addMonths

# addMonths

## Functions

### default()

> **default**(`date`, `months`): `Date`

Defined in: [src/addMonths.ts:18](https://github.com/fengxinming/date-manip/blob/12d12a4c2a3486e81330ba529f3fb8271142d945/src/addMonths.ts#L18)

Adds a specified number of months to a date.
向日期添加指定数量的月份。

#### Parameters

##### date

`Date`

The date to add months to. (要添加月份的日期。)

##### months

`number`

The number of months to add. (要添加的月份数。)

#### Returns

`Date`

A new date with the added months. (添加月份后的新日期。)

#### Example

```ts
// Adding 2 months to a date (向日期添加2个月)
const originalDate = new Date('2023-10-31T12:00:00');
const newDate = addMonths(originalDate, 2);
console.log(newDate.toISOString()); // Outputs: '2023-12-31T12:00:00.000Z' (输出: '2023-12-31T12:00:00.000Z')
```
