[**date-manip**](index.md)

***

[date-manip](modules.md) / compile

# compile

## Functions

### default()

> **default**(`formatString`): `CompileResult`

Defined in: [src/compile.ts:54](https://github.com/fengxinming/date-manip/blob/74162e61fff73f0ace27e57ce0b5395775c035f2/src/compile.ts#L54)

Compile a format string into a regular expression and extract date parts.
编译格式字符串，生成正则表达式和匹配的日期部分

#### Parameters

##### formatString

`string`

The format string to compile. (要编译的格式字符串。)

#### Returns

`CompileResult`

A compiled result object containing the regular expression pattern and extracted date parts.
(包含正则表达式模式的编译结果对象，以及提取的日期部分。)

#### Example

```ts
compile('YYYY-MM-DD HH:mm:ss.SSS');
// {
//   pattern: '(\\d{1,4})-(\\d{1,2})-(\\d{1,2}) (\\d{1,2}):(\\d{1,2}):(\\d{1,2})\\.(\\d{1,3})',
//   tokens: ['YYYY', 'MM', 'DD','HH', 'mm', 'ss', 'SSS']
// }
```
