# Built-in Functions

This page lists the five functions available inside `{{ }}` and the limits of each.

## Function List

| Function | Syntax | Result |
|---|---|---|
| `LENGTH()` | `{{ LENGTH(items) }}` | Length of an array or string; key count for objects |
| `CALC()` | `{{ CALC(price * 1.05) }}` | Arithmetic between a data value and a number literal |
| `UPPER()` | `{{ UPPER(name) }}` | Uppercase |
| `LOWER()` | `{{ LOWER(name) }}` | Lowercase |
| `DATE()` | `{{ DATE(timestamp, YYYY-MM-DD HH:mm) }}` | Formats a UNIX timestamp in seconds |

Function names must be uppercase and only one level is allowed; functions cannot be nested.

## `CALC()`

```demo
<div id="app">
  <p>{{ CALC(price * 1.05) }}</p>
  <p>{{ CALC(count + 1) }}</p>
</div>

<script>
  const app = new QUI({ id: "app", data: { price: 100, count: 1 } });
</script>
```

Supported operators: `+`, `-`, `*`, `/`.

## `UPPER()` / `LOWER()`

The value must be a string; a `null` or missing value throws a `TypeError` and aborts that render.

## `DATE()`

```demo
<div id="app">
  <p>{{ DATE(now, YYYY-MM-DD HH:mm:ss) }}</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { now: Math.floor(Date.now() / 1000) },
  });
</script>
```

| Token | Output |
|---|---|
| `YYYY` / `YY` | Four-digit / two-digit year |
| `MM` / `M` | Zero-padded / unpadded month |
| `DD` / `D` | Zero-padded / unpadded day |
| `HH` / `H` | 24-hour clock |
| `hh` / `h` | 12-hour clock |
| `mm` / `m`, `ss` / `s` | Minutes, seconds |
| `SSS` | Milliseconds |
| `A` / `a` | `AM` / `PM`, `am` / `pm` |
| `ddd` | Weekday; 星期一 when the browser language contains `zh`, otherwise the English abbreviation (Mon) |

The format string only accepts letters, digits, spaces, `-`, `:` and `,`; with `/` or `.` it is not recognized as `DATE()` and `{{ }}` stays as written.
