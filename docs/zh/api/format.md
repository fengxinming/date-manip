[**date-manip**](index.md)

***

[date-manip](modules.md) / format

# format

## 函数

### default()

> **default**(`date`, `formatString`?): `string`

定义于: [src/format.ts:122](https://github.com/fengxinming/date-manip/blob/74162e61fff73f0ace27e57ce0b5395775c035f2/src/format.ts#L122)

Formats a date according to the specified format string.
根据指定的格式字符串格式化日期。

#### 参数

##### date

`Date`

The date to format. (要格式化的日期。)

##### formatString?

`string`

The format string to use. (要使用的格式字符串。)

#### 返回

`string`

The formatted date string. (格式化后的日期字符串。)

#### 示例

```ts
// Formatting a date with 'YYYY-MM-DD' format (使用 'YYYY-MM-DD' 格式格式化日期)
const date1 = new Date('2023-10-01T12:00:00');
const formattedDate1 = format(date1, 'YYYY-MM-DD');
console.log(formattedDate1); // Outputs: '2023-10-01' (输出: '2023-10-01')

// Formatting a date with 'YYYY-MM-DD HH:mm:ss' format (使用 'YYYY-MM-DD HH:mm:ss' 格式格式化日期)
const date2 = new Date('2023-10-01T12:30:45');
const formattedDate2 = format(date2, 'YYYY-MM-DD HH:mm:ss');
console.log(formattedDate2); // Outputs: '2023-10-01 12:30:45' (输出: '2023-10-01 12:30:45')

// Formatting a date with 'YYYY-MM-DDTHH:mm:ssZ' format (使用 'YYYY-MM-DDTHH:mm:ssZ' 格式格式化日期)
const date3 = new Date('2023-10-01T12:30:45');
const formattedDate3 = format(date3, 'YYYY-MM-DDTHH:mm:ssZ');
console.log(formattedDate3); // Outputs: '2023-10-01T12:30:45-04:00' (输出: '2023-10-01T12:30:45-04:00')

// Using 'ISO' format (使用 'ISO' 格式)
const date4 = new Date('2023-10-01T12:30:45');
const formattedDate4 = format(date4, 'ISO');
console.log(formattedDate4); // Outputs: '2023-10-01T16:30:45.000Z' (输出: '2023-10-01T16:30:45.000Z')
```
