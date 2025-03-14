[**date-manip**](index.md)

***

[date-manip](modules.md) / dayOfYear

# dayOfYear

## 函数

### default()

Gets or sets the day of the year for a given date.
获取或设置给定日期的年份中的第几天。

#### 参数

The date to get or set the day of the year for. (要获取或设置年份中的第几天的日期。)

#### 参数

The day of the year to set. (要设置的年份中的第几天。)

#### 示例

```ts
// Getting the day of the year (获取年份中的第几天)
const date = new Date('2023-10-01');
const dayOfYear = dayOfYear(date);
console.log(dayOfYear); // Outputs: 274 (输出: 274)

// Setting the day of the year (设置年份中的第几天)
const newDate = dayOfYear(new Date('2023-01-01'), 274);
console.log(newDate.toISOString()); // Outputs: '2023-10-01T00:00:00.000Z' (输出: '2023-10-01T00:00:00.000Z')
```

#### 调用签名

> **default**(`date`): `number`

定义于: [src/dayOfYear.ts:4](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/dayOfYear.ts#L4)

##### 参数

###### date

`Date`

##### 返回

`number`

#### 调用签名

> **default**(`date`, `val`): `Date`

定义于: [src/dayOfYear.ts:5](https://github.com/fengxinming/date-manip/blob/c2d62c1a39faed6b959a43feaabc15f4e2d60a5a/src/dayOfYear.ts#L5)

##### 参数

###### date

`Date`

###### val

`number`

##### 返回

`Date`
