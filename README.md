# date-manip

[![npm package](https://nodei.co/npm/date-manip.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/date-manip)

> Note:  A modern JavaScript Date utility library delivering modularity, performance, & extras.

[![NPM version](https://img.shields.io/npm/v/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![NPM Downloads](https://img.shields.io/npm/dm/date-manip.svg?style=flat)](https://npmjs.org/package/date-manip)
[![](https://data.jsdelivr.com/v1/package/npm/date-manip/badge)](https://www.jsdelivr.com/package/npm/date-manip)

---

## Installation

### Load `date-manip` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/date-manip/date-manip.umd.min.js"></script>
<script>
  // window.dateManip
  dateManip.add
  dateManip.format
  // ...
</script>

```

```html
<script src="https://cdn.jsdelivr.net/npm/date-manip/date-chain.umd.min.js"></script>
<script>
  // window.DateChain
  DateChain.add
  DateChain.format
  // ...

  var now = new DateChain(); // DateChain();
  now.add
  now.format
  // ...
</script>

```

### CommonJS style with npm

```bash
npm install date-manip --save
```

```javascript

// es6
import { 
  add, 
  format, 
  // ...
} from 'date-manip';
// or
import { ... } from 'date-manip/es';

// modularity
import add from 'date-manip/add';
import format from 'date-manip/format';

// date-chain
import moment from 'date-manip/date-chain';

moment('2000-2-29')
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

```

## API

  - add
  - addDays
  - addHours
  - addMilliseconds
  - addMinutes
  - addMonths
  - addSeconds
  - addYears
  - clone
  - dayOfYear
  - daysInMonth
  - diff
  - endOf
  - format
  - get
  - isAfter
  - isBefore
  - isBetween
  - isLeapYear
  - isSame
  - isSameOrAfter
  - isSameOrBefore
  - isValid
  - parse
  - set
  - startOf
  - subtract
