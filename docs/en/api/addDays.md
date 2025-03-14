[**date-manip**](index.md)

***

[date-manip](modules.md) / addDays

# addDays

## Functions

### default()

> **default**(`date`, `days`): `Date`

Defined in: [src/addDays.ts:17](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/addDays.ts#L17)

Adds a specified number of days to a date.
向日期添加指定数量的天数。

#### Parameters

##### date

`Date`

The date to add days to. (要添加天数的日期。)

##### days

`number`

The number of days to add. (要添加的天数。)

#### Returns

`Date`

A new date with the added days. (添加天数后的新日期。)

#### Example

```ts
const newDate = addDays(new Date(), 5);
console.log(newDate); // Outputs the date 5 days from now (输出5天后的日期)
```
