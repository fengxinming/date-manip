[**date-manip**](index.md)

***

[date-manip](modules.md) / isValid

# isValid

## 函数

### default()

> **default**(`date`): `boolean`

定义于: [src/isValid.ts:20](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/isValid.ts#L20)

Checks if a given date is valid.
检查给定的日期是否有效。

#### 参数

##### date

`Date`

The date to check. (要检查的日期。)

#### 返回

`boolean`

A boolean indicating whether the given date is valid. (布尔值，表示给定的日期是否有效。)

#### 示例

```ts
// Checking if a date is valid (检查一个日期是否有效)
const date1 = new Date('2023-10-01');
const isValidDate1 = isValid(date1);
console.log(isValidDate1); // Outputs: true (输出: true)

// Checking if an invalid date is valid (检查一个无效的日期是否有效)
const date2 = new Date('invalid-date');
const isValidDate2 = isValid(date2);
console.log(isValidDate2); // Outputs: false (输出: false)
```
