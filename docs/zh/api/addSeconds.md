[**date-manip**](index.md)

***

[date-manip](modules.md) / addSeconds

# addSeconds

## 函数

### default()

> **default**(`date`, `seconds`): `Date`

定义于: [src/addSeconds.ts:19](https://github.com/fengxinming/date-manip/blob/672f1dce8f57973c145b734bdf778535cf1bb983/src/addSeconds.ts#L19)

Adds a specified number of seconds to a date.
向日期添加指定数量的秒。

#### 参数

##### date

`Date`

The date to add seconds to. (要添加秒的日期。)

##### seconds

`number`

The number of seconds to add. (要添加的秒数。)

#### 返回

`Date`

A new date with the added seconds. (添加秒后的新日期。)

#### 示例

```ts
// Adding 30 seconds to a date (向日期添加30秒)
const originalDate = new Date('2023-10-01T12:00:00');
addSeconds(originalDate, 30);
console.log(originalDate.toISOString()); // Outputs: '2023-10-01T12:00:30.000Z' (输出: '2023-10-01T12:00:30.000Z')
```
