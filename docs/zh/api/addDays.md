[**date-manip**](index.md)

***

[date-manip](modules.md) / addDays

# addDays

## 函数

### default()

> **default**(`date`, `days`): `Date`

定义于: [src/addDays.ts:17](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/addDays.ts#L17)

Adds a specified number of days to a date.
向日期添加指定数量的天数。

#### 参数

##### date

`Date`

The date to add days to. (要添加天数的日期。)

##### days

`number`

The number of days to add. (要添加的天数。)

#### 返回

`Date`

A new date with the added days. (添加天数后的新日期。)

#### 示例

```ts
const newDate = addDays(new Date(), 5);
console.log(newDate); // Outputs the date 5 days from now (输出5天后的日期)
```
