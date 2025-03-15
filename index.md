# date-manip

[![npm package](https://nodei.co/npm/date-manip.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/date-manip)

[![NPM Version](https://img.shields.io/npm/v/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![NPM Downloads](https://img.shields.io/npm/dm/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/date-manip/badge)](https://www.jsdelivr.com/package/npm/date-manip)

---

## Introduction

`date-manip` is a lightweight JavaScript date utility library designed to provide modularity, high performance, and additional features. It supports various date operations, including date addition and subtraction, formatting, comparison, etc.

## Installation

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
<script src="https://cdn.jsdelivr.net/npm/date-manip/dist/index.umd.js"></script>
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

<script src="https://cdn.jsdelivr.net/npm/date-manip/dist/chain.umd.js"></script>
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

## Features

- **Modularity**: Supports modular import and on-demand loading.
- **High Performance**: Optimized performance for various scenarios.
- **Chaining**: Supports chaining, making the code more concise.
- **Rich Features**: Supports date addition and subtraction, formatting, comparison, and other operations.

## API

The following is a list of APIs provided by `date-manip`, including types and return values.

### Date Addition and Subtraction

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

### Date Formatting

- **format(date: Date, formatString: string): string**

### Date Information Retrieval

- **dayOfYear(date: Date): number**
- **daysInMonth(date: Date): number**
- **get(date: Date, unit: Unit): number**

### Date Comparison

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

### Date Validation

- **isValid(date: Date): boolean**

### Date Parsing

- **parse(input: DateInput, format?: string): Date**

### Date Information Setting

- **set(date: Date, value: number): Date**

### Date Boundary Retrieval

- **endOf(date: Date, unit: Unit): Date**
- **startOf(date: Date, unit: Unit): Date**

## Example

### Adding and Subtracting Dates

- **add(date: Date, duration: DateAddingObject): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = add(date, { year: 1, month: 2, day: 3 });
  console.log(newDate); // 2024-12-04T12:00:00.000Z
  ```

- **add(date: Date, value: number, unit?: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = add(date, 5, 'days');
  console.log(newDate); // 2023-10-06T12:00:00.000Z
  ```

- **addDays(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = addDays(date, 5);
  console.log(newDate); // 2023-10-06T12:00:00.000Z
  ```

- **addHours(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = addHours(date, 3);
  console.log(newDate); // 2023-10-01T15:00:00.000Z
  ```

- **addMilliseconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = addMilliseconds(date, 500);
  console.log(newDate); // 2023-10-01T12:00:00.500Z
  ```

- **addMinutes(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = addMinutes(date, 30);
  console.log(newDate); // 2023-10-01T12:30:00.000Z
  ```

- **addMonths(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = addMonths(date, 2);
  console.log(newDate); // 2023-12-01T12:00:00.000Z
  ```

- **addSeconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = addSeconds(date, 45);
  console.log(newDate); // 2023-10-01T12:00:45.000Z
  ```

- **addYears(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = addYears(date, 1);
  console.log(newDate); // 2024-10-01T12:00:00.000Z
  ```

- **subDays(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = subDays(date, 3);
  console.log(newDate); // 2023-09-28T12:00:00.000Z
  ```

- **subHours(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = subHours(date, 2);
  console.log(newDate); // 2023-10-01T10:00:00.000Z
  ```

- **subMilliseconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00.500Z');
  const newDate = subMilliseconds(date, 200);
  console.log(newDate); // 2023-10-01T12:00:00.300Z
  ```

- **subMinutes(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:30:00Z');
  const newDate = subMinutes(date, 15);
  console.log(newDate); // 2023-10-01T12:15:00.000Z
  ```

- **subMonths(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = subMonths(date, 2);
  console.log(newDate); // 2023-08-01T12:00:00.000Z
  ```

- **subSeconds(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:45Z');
  const newDate = subSeconds(date, 20);
  console.log(newDate); // 2023-10-01T12:00:25.000Z
  ```

- **subYears(date: Date, amount: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = subYears(date, 1);
  console.log(newDate); // 2022-10-01T12:00:00.000Z
  ```

- **subtract(date: Date, duration: DateAddingObject): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = subtract(date, { year: 1, month: 1, day: 1 });
  console.log(newDate); // 2022-08-31T12:00:00.000Z
  ```

- **subtract(date: Date, value: number, unit?: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = subtract(date, 3, 'days');
  console.log(newDate); // 2023-09-28T12:00:00.000Z
  ```

### Formatting Dates

- **format(date: Date, formatString: string): string**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const formattedDate = format(date, 'YYYY-MM-DD HH:mm:ss');
  console.log(formattedDate); // 2023-10-01 12:00:00
  ```

### Getting Date Information

- **dayOfYear(date: Date): number**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const dayOfYear = dayOfYear(date);
  console.log(dayOfYear); // 275
  ```

- **daysInMonth(date: Date): number**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const daysInMonth = daysInMonth(date);
  console.log(daysInMonth); // 31
  ```

- **get(date: Date, unit: Unit): number**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const unitValue = get(date, 'day');
  console.log(unitValue); // 1
  ```

### Comparing Dates

- **diff(date1: Date, date2: Date, unit?: Unit): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = diff(date1, date2, 'days');
  console.log(diff); // 30
  ```

- **diffInDays(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = diffInDays(date1, date2);
  console.log(diff); // 30
  ```

- **diffInHours(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = diffInHours(date1, date2);
  console.log(diff); // 720
  ```

- **diffInMilliseconds(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = diffInMilliseconds(date1, date2);
  console.log(diff); // 2592000000
  ```

- **diffInMinutes(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = diffInMinutes(date1, date2);
  console.log(diff); // 43200
  ```

- **diffInMonths(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = diffInMonths(date1, date2);
  console.log(diff); // 1
  ```

- **diffInSeconds(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const diff = diffInSeconds(date1, date2);
  console.log(diff); // 2592000
  ```

- **diffInYears(date1: Date, date2: Date): number**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2022-10-01T12:00:00Z');
  const diff = diffInYears(date1, date2);
  console.log(diff); // 1
  ```

- **isAfter(date1: Date, date2: Date): boolean**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const isAfter = isAfter(date1, date2);
  console.log(isAfter); // true
  ```

- **isBefore(date1: Date, date2: Date): boolean**
  ```typescript
  const date1 = new Date('2023-09-01T12:00:00Z');
  const date2 = new Date('2023-10-01T12:00:00Z');
  const isBefore = isBefore(date1, date2);
  console.log(isBefore); // true
  ```

- **isBetween(date: Date, startDate: Date, endDate: Date, inclusivity?: string): boolean**
  ```typescript
  const date = new Date('2023-09-15T12:00:00Z');
  const startDate = new Date('2023-09-01T12:00:00Z');
  const endDate = new Date('2023-09-30T12:00:00Z');
  const isBetween = isBetween(date, startDate, endDate);
  console.log(isBetween); // true
  ```

- **isLeapYear(date: Date): boolean**
  ```typescript
  const date = new Date('2020-10-01T12:00:00Z');
  const isLeapYear = isLeapYear(date);
  console.log(isLeapYear); // true
  ```

- **isSame(date1: Date, date2: Date, unit?: Unit): boolean**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-10-01T12:00:00Z');
  const isSame = isSame(date1, date2);
  console.log(isSame); // true
  ```

- **isSameOrAfter(date1: Date, date2: Date, unit?: Unit): boolean**
  ```typescript
  const date1 = new Date('2023-10-01T12:00:00Z');
  const date2 = new Date('2023-09-01T12:00:00Z');
  const isSameOrAfter = isSameOrAfter(date1, date2);
  console.log(isSameOrAfter); // true
  ```

- **isSameOrBefore(date1: Date, date2: Date, unit?: Unit): boolean**
  ```typescript
  const date1 = new Date('2023-09-01T12:00:00Z');
  const date2 = new Date('2023-10-01T12:00:00Z');
  const isSameOrBefore = isSameOrBefore(date1, date2);
  console.log(isSameOrBefore); // true
  ```

### Validating Dates

- **isValid(date: Date): boolean**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const isValid = isValid(date);
  console.log(isValid); // true
  ```

### Parsing Dates

- **parse(input: DateInput, format?: string): Date**
  ```typescript
  const parsedDate = parse('2023-10-01 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  console.log(parsedDate); // 2023-10-01T04:00:00.000Z
  ```

### Setting Date Information

- **set(date: Date, value: number): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const newDate = set(date, { year: 2024 });
  console.log(newDate); // 2024-10-01T12:00:00.000Z
  ```

### Getting Date Boundaries

- **endOf(date: Date, unit: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const endOfDay = endOf(date, 'day');
  console.log(endOfDay); // 2023-10-01T23:59:59.999Z
  ```

- **startOf(date: Date, unit: Unit): Date**
  ```typescript
  const date = new Date('2023-10-01T12:00:00Z');
  const startOfDay = startOf(date, 'day');
  console.log(startOfDay); // 2023-10-01T00:00:00.000Z
  ```

### Type Definitions

```typescript
export interface DateAddingObject {
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

export interface InnerUnits {
  /**
   * Time unit (时间单位)
   */
  TIME: 'time';

  /**
   * Year unit (年单位)
   */
  YEAR: 'year';

  /**
   * Month unit (月单位)
   */
  MONTH: 'month';

  /**
   * Date unit (日单位)
   */
  DATE: 'date';

  /**
   * Day unit (日单位)
   */
  DAY: 'day';

  /**
   * Hour unit (时单位)
   */
  HOUR: 'hour';

  /**
   * Minute unit (分单位)
   */
  MINUTE: 'minute';

  /**
   * Second unit (秒单位)
   */
  SECOND: 'second';

  /**
   * Millisecond unit (毫秒单位)
   */
  MILLISECOND: 'millisecond';

  /**
   * UTC offset unit (时区单位)
   */
  UTC_OFFSET: 'utcOffset';
}

/**
 * Date unit
 * 日期单位
 */
export type Unit = 'Y' | 'y' | 'M' | 'D' | 'd' | 'h' | 'm' | 's' | 'ms' |
                  InnerUnit |
                  'years' | 'months' | 'dates' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

export type ChainInput = DateInput | IDateChain;

export interface IDateChain {
  add(input: DateAddingObject): this;
  add(num: number, unit: Unit): this;
  addDays(days: number): this;
  addHours(hours: number): this;
  addMilliseconds(ms: number): this;
  addMinutes(minutes: number): this;
  addMonths(months: number): this;
  addYears(years: number): this;
  dayOfYear(): number;
  dayOfYear(val: number): this;
  daysInMonth(): number;
  diff(input: ChainInput, unit: Unit, asFloat?: boolean): number;
  diffInDays(input: ChainInput, asFloat?: boolean): number;
  diffInHours(input: ChainInput, asFloat?: boolean): number;
  diffInMilliseconds(input: ChainInput, asFloat?: boolean): number;
  diffInMinutes(input: ChainInput, asFloat?: boolean): number;
  diffInMonths(input: ChainInput, asFloat?: boolean): number;
  diffInSeconds(input: ChainInput, asFloat?: boolean): number;
  diffInYears(input: ChainInput, asFloat?: boolean): number;
  endOf(unit: Unit): this;
  format(formatString?: string): string;
  get(unit: Unit): number;
  isAfter(input: ChainInput, unit: Unit): boolean;
  isBefore(input: ChainInput, unit: Unit): boolean;
  isBetween(from: ChainInput, to: ChainInput, unit: Unit, inclusivity?: string): boolean;
  isLeapYear(): boolean;
  isSame(input: ChainInput, unit: Unit): boolean;
  isSameOrAfter(input: ChainInput, unit: Unit): boolean;
  isSameOrBefore(input: ChainInput, unit: Unit): boolean;
  isValid(): boolean;
  set(unit: Unit, val: number): this;
  startOf(unit: Unit): this;
  subDays(days: number): this;
  subHours(hours: number): this;
  subMilliseconds(time: number): this;
  subMinutes(minutes: number): this;
  subMonths(months: number): this;
  subSeconds(seconds: number): this;
  subtract(input: number | DateAddingObject): this;
  subtract(num: number, unit: Unit): this;
  subYears(years: number): this;

  year(year: number): this;
  year(): number;
  month(month: number): this;
  month(): number;
  date(date: number): this;
  date(): number;
  day(day: number): this;
  day(): number;
  hour(hour: number): this;
  hour(): number;
  minute(minute: number): this;
  minute(): number;
  second(second: number): this;
  second(): number;
  millisecond(millisecond: number): this;
  millisecond(): number;
  time(time: number): this;
  time(): number;

  hours(hours: number): this;
  hours(): number;
  minutes(minutes: number): this;
  minutes(): number;
  seconds(seconds: number): this;
  seconds(): number;
  milliseconds(milliseconds: number): this;
  milliseconds(): number;

  clone(): IDateChain;
  toArray(): number[];
  toDate(): Date;
  toISOString(): string;
  toJSON(): string;
  toString(): string;
  valueOf(): number;
}

```