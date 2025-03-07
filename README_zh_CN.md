# date-manip

[![npm package](https://nodei.co/npm/date-manip.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/date-manip)

> 一个轻量级的 JavaScript 日期工具库，提供模块化、高性能和额外功能。它支持多种日期操作，包括日期的增减、格式化、比较等。

[![NPM 版本](https://img.shields.io/npm/v/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![NPM 下载量](https://img.shields.io/npm/dm/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/date-manip/badge)](https://www.jsdelivr.com/package/npm/date-manip)

---

## [文档](https://fengxinming.github.io/date-manip/)

## 简介

`date-manip` 是一个轻量级的 JavaScript 日期工具库，旨在提供模块化、高性能和额外功能。它支持多种日期操作，包括日期的增减、格式化、比较等。

## 安装

::: code-group

```bash [npm]
npm add date-manip
```

```bash [pnpm]
pnpm add date-manip
```

```bash [yarn]
yarn add date-manip
```

```bash [bun]
bun add date-manip
```

```html [HTML]
<script src="https://cdn.jsdelivr.net/npm/date-manip/index.umd.js"></script>
<script>
  // window.dateManip
  const date = new Date('2023-10-01T12:00:00Z');

  console.log(dateManip.addDays(date, 5)); // 2023-10-06T12:00:00.000Z
  console.log(dateManip.subMonths(date, 2)); // 2023-08-01T12:00:00.000Z
  console.log(dateManip.format(date, 'YYYY-MM-DD HH:mm:ss')); // 2023-10-01 12:00:00
  console.log(dateManip.isAfter(date2, date1)); // true
  console.log(dateManip.isBefore(date1, date2)); // true
  console.log(dateManip.isSame(date1, date2)); // false
  // ...
</script>

<script src="https://cdn.jsdelivr.net/npm/date-manip/chain.umd.js"></script>
<script>
  // window.dateManip
  const now = dateManip.chain('2000-02-29')
    .add({
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      minute: 1,
      second: 1,
      millisecond: 1
    })
    .add(1, 'month')
    .startOf('date')
    .format('YYYY-MM-DD');

  console.log(now); // 2001-04-01
  // ...
</script>
```

:::

## 功能特性

- :package: **模块化**：支持模块化引入，按需加载。
- :zap: **高性能**：经过优化的性能，适用于各种场景。
- :link: **链式调用**：支持链式调用，代码更简洁。
- :checkered_flag: **丰富的功能**：支持日期的增减、格式化、比较等操作。

## API

以下是 `date-manip` 提供的 API 列表，包含类型和返回值。

### 增减日期

- **add(date: Date, duration: DateAddingObject): Date**
- **add(date: Date, value: number, unit?: Unit): Date**
- **addDays(date: Date, amount: number): Date**
- **addHours(date: Date, amount: number): Date**
- **addMilliseconds(date: Date, amount: number): Date**
- **addMinutes(date: Date, amount: number): Date**
- **addMonths(date: Date, amount: number): Date**
- **addSeconds(date: Date, amount: number): Date**
- **addYears(date: Date, amount: number): Date**
- **subDays(date: Date, amount: number): Date**
- **subHours(date: Date, amount: number): Date**
- **subMilliseconds(date: Date, amount: number): Date**
- **subMinutes(date: Date, amount: number): Date**
- **subMonths(date: Date, amount: number): Date**
- **subSeconds(date: Date, amount: number): Date**
- **subYears(date: Date, amount: number): Date**
- **subtract(date: Date, duration: DateAddingObject): Date**
- **subtract(date: Date, value: number, unit?: Unit): Date**

### 格式化日期

- **format(date: Date, formatString: string): string**

### 获取日期信息

- **dayOfYear(date: Date): number**
- **daysInMonth(date: Date): number**
- **get(date: Date, unit: Unit): number**

### 日期比较

- **diff(date1: Date, date2: Date, unit?: Unit): number**
- **diffInDays(date1: Date, date2: Date): number**
- **diffInHours(date1: Date, date2: Date): number**
- **diffInMilliseconds(date1: Date, date2: Date): number**
- **diffInMinutes(date1: Date, date2: Date): number**
- **diffInMonths(date1: Date, date2: Date): number**
- **diffInSeconds(date1: Date, date2: Date): number**
- **diffInYears(date1: Date, date2: Date): number**
- **isAfter(date1: Date, date2: Date): boolean**
- **isBefore(date1: Date, date2: Date): boolean**
- **isBetween(date: Date, startDate: Date, endDate: Date, inclusivity?: string): boolean**
- **isLeapYear(date: Date): boolean**
- **isSame(date1: Date, date2: Date, unit?: Unit): boolean**
- **isSameOrAfter(date1: Date, date2: Date, unit?: Unit): boolean**
- **isSameOrBefore(date1: Date, date2: Date, unit?: Unit): boolean**

### 日期验证

- **isValid(date: Date): boolean**

### 解析日期

- **parse(input: DateInput, format?: string): Date**

### 设置日期信息

- **set(date: Date, value: number): Date**

### 获取日期边界

- **endOf(date: Date, unit: Unit): Date**
- **startOf(date: Date, unit: Unit): Date**

## 示例

### 增减日期

- **add(date: Date, duration: DateAddingObject): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.add(date, { year: 1, month: 2, day: 3 });
  console.log(newDate); // 2024-12-04T12:00:00.000Z
  ```

- **add(date: Date, value: number, unit?: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.add(date, 5, 'days');
  console.log(newDate); // 2023-10-06T12:00:00.000Z
  ```

- **addDays(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.addDays(date, 5);
  console.log(newDate); // 2023-10-06T12:00:00.000Z
  ```

- **addHours(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.addHours(date, 3);
  console.log(newDate); // 2023-10-01T15:00:00.000Z
  ```

- **addMilliseconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.addMilliseconds(date, 500);
  console.log(newDate); // 2023-10-01T12:00:00.500Z
  ```

- **addMinutes(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.addMinutes(date, 30);
  console.log(newDate); // 2023-10-01T12:30:00.000Z
  ```

- **addMonths(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.addMonths(date, 2);
  console.log(newDate); // 2023-12-01T12:00:00.000Z
  ```

- **addSeconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.addSeconds(date, 45);
  console.log(newDate); // 2023-10-01T12:00:45.000Z
  ```

- **addYears(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.addYears(date, 1);
  console.log(newDate); // 2024-10-01T12:00:00.000Z
  ```

- **subDays(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.subDays(date, 3);
  console.log(newDate); // 2023-09-28T12:00:00.000Z
  ```

- **subHours(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.subHours(date, 2);
  console.log(newDate); // 2023-10-01T10:00:00.000Z
  ```

- **subMilliseconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00.500Z');
  const newDate = dateManip.subMilliseconds(date, 200);
  console.log(newDate); // 2023-10-01T12:00:00.300Z
  ```

- **subMinutes(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:30:00Z');
  const newDate = dateManip.subMinutes(date, 15);
  console.log(newDate); // 2023-10-01T12:15:00.000Z
  ```

- **subMonths(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.subMonths(date, 2);
  console.log(newDate); // 2023-08-01T12:00:00.000Z
  ```

- **subSeconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:45Z');
  const newDate = dateManip.subSeconds(date, 20);
  console.log(newDate); // 2023-10-01T12:00:25.000Z
  ```

- **subYears(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.subYears(date, 1);
  console.log(newDate); // 2022-10-01T12:00:00.000Z
  ```

- **subtract(date: Date, duration: DateAddingObject): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.subtract(date, { year: 1, month: 1, day: 1 });
  console.log(newDate); // 2022-08-31T12:00:00.000Z
  ```

- **subtract(date: Date, value: number, unit?: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.subtract(date, 3, 'days');
  console.log(newDate); // 2023-09-28T12:00:00.000Z
  ```

### 格式化日期

- **format(date: Date, formatString: string): string**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const formattedDate = dateManip.format(date, 'YYYY-MM-DD HH:mm:ss');
  console.log(formattedDate); // 2023-10-01 12:00:00
  ```

### 获取日期信息

- **dayOfYear(date: Date): number**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const dayOfYear = dateManip.dayOfYear(date);
  console.log(dayOfYear); // 275
  ```

- **daysInMonth(date: Date): number**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const daysInMonth = dateManip.daysInMonth(date);
  console.log(daysInMonth); // 31
  ```

- **get(date: Date, unit: Unit): number**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const unitValue = dateManip.get(date, 'day');
  console.log(unitValue); // 1
  ```

### 日期比较

- **diff(date1: Date, date2: Date, unit?: Unit): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = dateManip.diff(date1, date2, 'days');
  console.log(diff); // 30
  ```

- **diffInDays(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = dateManip.diffInDays(date1, date2);
  console.log(diff); // 30
  ```

- **diffInHours(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = dateManip.diffInHours(date1, date2);
  console.log(diff); // 720
  ```

- **diffInMilliseconds(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = dateManip.diffInMilliseconds(date1, date2);
  console.log(diff); // 2592000000
  ```

- **diffInMinutes(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = dateManip.diffInMinutes(date1, date2);
  console.log(diff); // 43200
  ```

- **diffInMonths(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = dateManip.diffInMonths(date1, date2);
  console.log(diff); // 1
  ```

- **diffInSeconds(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = dateManip.diffInSeconds(date1, date2);
  console.log(diff); // 2592000
  ```

- **diffInYears(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2022-10-01T12:00:00Z');
  const diff = dateManip.diffInYears(date1, date2);
  console.log(diff); // 1
  ```

- **isAfter(date1: Date, date2: Date): boolean**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const isAfter = dateManip.isAfter(date1, date2);
  console.log(isAfter); // true
  ```

- **isBefore(date1: Date, date2: Date): boolean**
  ```typescript
  const date1 = new Date('2023-09-01T12:00:00Z');
  const date2 = new Date('2023-10-01T12:00:00Z');
  const isBefore = dateManip.isBefore(date1, date2);
  console.log(isBefore); // true
  ```

- **isBetween(date: Date, startDate: Date, endDate: Date, inclusivity?: string): boolean**
  ```typescript
  const date = new Date('2023-09-15T12:00:00Z');
  const startDate = new Date('2023-09-01T12:00:00Z');
  const endDate = new Date('2023-09-30T12:00:00Z');
  const isBetween = dateManip.isBetween(date, startDate, endDate);
  console.log(isBetween); // true
  ```

- **isLeapYear(date: Date): boolean**
  ```typescript
  const date = new Date('2020-10-01T12:00:00Z');
  const isLeapYear = dateManip.isLeapYear(date);
  console.log(isLeapYear); // true
  ```

- **isSame(date1: Date, date2: Date, unit?: Unit): boolean**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-10-01T12:00:00Z');
  const isSame = dateManip.isSame(date1, date2);
  console.log(isSame); // true
  ```

- **isSameOrAfter(date1: Date, date2: Date, unit?: Unit): boolean**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const isSameOrAfter = dateManip.isSameOrAfter(date1, date2);
  console.log(isSameOrAfter); // true
  ```

- **isSameOrBefore(date1: Date, date2: Date, unit?: Unit): boolean**
  ```typescript
  const date1 = new Date('2023-09-01T12:00:00Z');
  const date2 = new Date('2023-10-01T12:00:00Z');
  const isSameOrBefore = dateManip.isSameOrBefore(date1, date2);
  console.log(isSameOrBefore); // true
  ```

### 日期验证

- **isValid(date: Date): boolean**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const isValid = dateManip.isValid(date);
  console.log(isValid); // true
  ```

### 解析日期

- **parse(input: DateInput, format?: string): Date**
  ```typescript
  const parsedDate = dateManip.parse('2023-10-01 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  console.log(parsedDate); // 2023-10-01T12:00:00.000Z
  ```

### 设置日期信息

- **set(date: Date, value: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = dateManip.set(date, { year: 2024 });
  console.log(newDate); // 2024-10-01T12:00:00.000Z
  ```

### 获取日期边界

- **endOf(date: Date, unit: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const endOfDay = dateManip.endOf(date, 'day');
  console.log(endOfDay); // 2023-10-01T23:59:59.999Z
  ```

- **startOf(date: Date, unit: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const startOfDay = dateManip.startOf(date, 'day');
  console.log(startOfDay); // 2023-10-01T00:00:00.000Z
  ```

### 类型定义

```typescript
/export interface DateAddingObject {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;

  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;

  Y?: number;
  y?: number;
  M?: number;
  d?: number;
  h?: number;
  m?: number;
  s?: number;
  ms?: number;
}

export interface InnerDateParsingObject {
  year?: number;
  month?: number;
  date?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
  utcOffset?: number;
}

export interface DateParsingObject extends DateAddingObject{
  utcOffset?: number;
}

/**
 * Date input type
 * 日期输入类型
 */
export type DateInput = string | number | Date | number[] | DateParsingObject;

/**
 * Internal date unit
 * 内部日期单位
 */
export type InnerUnit = 'year' | 'month' | 'date' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';

/**
 * Date unit
 * 日期单位
 */
export type Unit = 'Y' | 'y' | 'M' | 'D' | 'd' | 'h' | 'm' | 's' | 'ms' |
                  InnerUnit |
                  'years' | 'months' | 'dates' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

```