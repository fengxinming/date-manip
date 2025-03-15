[**date-manip**](index.md)

***

[date-manip](modules.md) / addMilliseconds

# addMilliseconds

## Functions

### default()

> **default**(`date`, `ms`): `Date`

Defined in: [src/addMilliseconds.ts:16](https://github.com/fengxinming/date-manip/blob/3800a276ff67972284419177dad55ada4d463d78/src/addMilliseconds.ts#L16)

Adds a specified number of milliseconds to a date.
向日期添加指定数量的毫秒。

#### Parameters

##### date

`Date`

The date to add milliseconds to. (要添加毫秒的日期。)

##### ms

`number`

The number of milliseconds to add. (要添加的毫秒数。)

#### Returns

`Date`

A new date with the added milliseconds. (添加毫秒后的新日期。)

#### Example

```ts
// Adding 5000 milliseconds to a date (向日期添加5000毫秒)
const originalDate = new Date('2023-10-01T12:00:00');
addMilliseconds(originalDate, 5000);
console.log(originalDate.toISOString()); // Outputs: '2023-10-01T12:00:05.000Z' (输出: '2023-10-01T12:00:05.000Z')
```
