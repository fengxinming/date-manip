[**date-manip**](index.md)

***

[date-manip](modules.md) / addMinutes

# addMinutes

## 函数

### default()

> **default**(`date`, `minutes`): `Date`

定义于: [src/addMinutes.ts:19](https://github.com/fengxinming/date-manip/blob/74162e61fff73f0ace27e57ce0b5395775c035f2/src/addMinutes.ts#L19)

Adds a specified number of minutes to a date.
向日期添加指定数量的分钟。

#### 参数

##### date

`Date`

The date to add minutes to. (要添加分钟的日期。)

##### minutes

`number`

The number of minutes to add. (要添加的分钟数。)

#### 返回

`Date`

A new date with the added minutes. (添加分钟后的新日期。)

#### 示例

```ts
// Adding 30 minutes to a date (向日期添加30分钟)
const originalDate = new Date('2023-10-01T12:00:00');
addMinutes(originalDate, 30);
console.log(originalDate.toISOString()); // Outputs: '2023-10-01T12:30:00.000Z' (输出: '2023-10-01T12:30:00.000Z')
```
