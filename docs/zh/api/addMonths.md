[**date-manip**](index.md)

***

[date-manip](modules.md) / addMonths

# addMonths

## 函数

### default()

> **default**(`date`, `months`): `Date`

定义于: [src/addMonths.ts:18](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/addMonths.ts#L18)

Adds a specified number of months to a date.
向日期添加指定数量的月份。

#### 参数

##### date

`Date`

The date to add months to. (要添加月份的日期。)

##### months

`number`

The number of months to add. (要添加的月份数。)

#### 返回

`Date`

A new date with the added months. (添加月份后的新日期。)

#### 示例

```ts
// Adding 2 months to a date (向日期添加2个月)
const originalDate = new Date('2023-10-31T12:00:00');
addMonths(originalDate, 2);
console.log(originalDate.toISOString()); // Outputs: '2023-12-31T12:00:00.000Z' (输出: '2023-12-31T12:00:00.000Z')
```
