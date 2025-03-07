[**date-manip**](index.md)

***

[date-manip](modules.md) / format

# format

## Functions

### default()

> **default**(`date`, `formatString`?): `string`

Defined in: [src/format.ts:56](https://github.com/fengxinming/date-manip/blob/12d12a4c2a3486e81330ba529f3fb8271142d945/src/format.ts#L56)

Formats a date according to the specified format string.
根据指定的格式字符串格式化日期。

#### Parameters

##### date

`Date`

The date to format. (要格式化的日期。)

##### formatString?

`string`

The format string to use. (要使用的格式字符串。)

#### Returns

`string`

The formatted date string. (格式化后的日期字符串。)

#### Example

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

// Using 'UTC' format (使用 'UTC' 格式)
const date4 = new Date('2023-10-01T12:30:45');
const formattedDate4 = format(date4, 'UTC');
console.log(formattedDate4); // Outputs: '2023-10-01T16:30:45.000Z' (输出: '2023-10-01T16:30:45.000Z')
```
