[**date-manip**](index.md)

***

[date-manip](modules.md) / parse

# parse

## 函数

### default()

> **default**(`input`, `format`?): `Date`

定义于: [src/parse.ts:102](https://github.com/fengxinming/date-manip/blob/672f1dce8f57973c145b734bdf778535cf1bb983/src/parse.ts#L102)

Parses a date from various input types.
从各种输入类型中解析日期。

#### 参数

##### input

The input to parse, which can be a string, number, Date, or array of numbers.
(要解析的输入，可以是字符串、数字、Date 对象或数字数组。)

[`DateInput`](types.md#dateinput) | \{ `isValid`: () => `any`; \}

##### format?

`string`

An optional format string that specifies the format of the input string if the input is a string.
Or A boolean indicating whether the date should be in UTC.
(可选的格式字符串，指定输入字符串的格式，如果输入是字符串。 或者是布尔值，表示日期是否应为 UTC。)

#### 返回

`Date`

A Date object representing the parsed date. (表示解析后日期的 Date 对象。)

#### 示例

```ts
// 从字符串中解析日期
const result = parse('20231001123456', 'YYYYMMDDHHmmss');
console.log(result); // 输出: 2023-10-01T12:34:56.000Z

// 从 ISO 8601 字符串中解析日期
const isoResult = parse('2023-10-01T12:34:56Z');
console.log(isoResult); // 输出: 2023-10-01T12:34:56.000Z

// 从数字数组中解析日期
const arrayResult = parse([2023, 9, 1, 12, 34, 56]);
console.log(arrayResult); // 输出: 2023-10-01T12:34:56.000Z

// 从数字中解析日期
const numberResult = parse(1696119296000);
console.log(numberResult); // 输出: 2023-10-01T12:34:56.000Z

// 从 Date 对象中解析日期
const dateResult = parse(new Date('2023-10-01T12:34:56Z'));
console.log(dateResult); // 输出: 2023-10-01T12:34:56.000Z
```
