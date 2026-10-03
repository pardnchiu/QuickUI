# QuickUI - Documentation

> Back to [README](../README.md)

## Prerequisites

- A modern browser with ES2022, `Proxy`, `IntersectionObserver`, and `structuredClone` support
- Node.js and npm (only required for building from source)

## Installation

### Via npm

```bash
npm i @pardnchiu/quickui
```

### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@latest/dist/QuickUI.js"></script>
```

Loading the script attaches three globals to `window`: `QUI`, `$`, and `_`.

### ESM

```javascript
import { QUI } from "@pardnchiu/quickui";
```

The `module` field in `package.json` points to `dist/QuickUI.esm.js`, which exports `export const QUI = window.QUI`.

### From Source

```bash
git clone https://github.com/pardnchiu/QuickUI.git
cd QuickUI
npm install
npm run build:once
```

`build:once` bundles `src/` into `src/QuickUI.debug.js` with `tsc`, then emits `dist/QuickUI.js` and `dist/QuickUI.esm.js` with terser.

## Usage

### Basic: Interpolation

```html
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ user.name }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@latest/dist/QuickUI.js"></script>
<script>
  const app = new QUI({
    id: "app",
    data: {
      title: "Hello QuickUI",
      user: { name: "Pardn" },
    },
  });

  setTimeout(() => {
    app.data.title = "Updated";
  }, 1000);
</script>
```

`app.data` is a deep Proxy; assignments at any depth trigger an update.

### Conditional Rendering

```html
<div id="app">
  <p :if="status == active">Active</p>
  <p :else-if="status == pending">Pending</p>
  <p :else>Disabled</p>
  <p :if="count > 0">{{ count }} items</p>
  <p :if="name == empty">Name is missing</p>
</div>

<script>
  new QUI({
    id: "app",
    data: { status: "active", count: 3, name: "" },
  });
</script>
```

### Loop Rendering

```html
<div id="app">
  <ul>
    <li :for="item in items">{{ item }}</li>
  </ul>
  <ul>
    <li :for="(item, index) in items">{{ index }}: {{ item }}</li>
  </ul>
  <ul>
    <li :for="(key, value) in profile">{{ key }} = {{ value }}</li>
  </ul>
  <p>Total: {{ LENGTH(items) }}</p>
</div>

<script>
  new QUI({
    id: "app",
    data: {
      items: ["A", "B", "C"],
      profile: { name: "Pardn", role: "Developer" },
    },
  });
</script>
```

Arrays use `(value, index)`; objects use `(key, value)`.

### Events and Two-way Binding

```html
<div id="app">
  <input type="text" :model="keyword" />
  <select :model="sort">
    <option value="asc">asc</option>
    <option value="desc">desc</option>
  </select>
  <button @click="search">Search</button>
  <p>{{ keyword }} / {{ sort }}</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { keyword: "", sort: "asc" },
    event: {
      search: (e) => {
        if (app.data.keyword.trim() === "") {
          console.warn("keyword is empty");
          return;
        }
        console.log("search", app.data.keyword, app.data.sort);
      },
    },
  });
</script>
```

`checkbox` and `radio` inputs are grouped by `name`, and the checked values are joined with `,` before being written back.

### Attribute and Style Binding

```html
<div id="app">
  <a :href="link" :title="tip">{{ UPPER(label) }}</a>
  <div :background-color="color" :hide="hidden">box</div>
  <div :html="snippet"></div>
  <p>{{ CALC(price * 1.05) }}</p>
  <p>{{ DATE(createdAt, YYYY-MM-DD HH:mm) }}</p>
</div>

<script>
  new QUI({
    id: "app",
    data: {
      link: "https://github.com/pardnchiu/QuickUI",
      tip: "repo",
      label: "quickui",
      color: "#3498db",
      hidden: false,
      snippet: "<strong>raw html</strong>",
      price: 100,
      createdAt: 1735660800,
    },
  });
</script>
```

### i18n

```html
<div id="app">
  <h1>{{ i18n.title }}</h1>
  <input :placeholder="i18n.hint" />
  <button @click="toEn">English</button>
</div>

<script>
  const app = new QUI({
    id: "app",
    i18n: {
      zh: { title: "歡迎", hint: "請輸入" },
      en: "/locales/en.json",
    },
    i18nLang: "zh",
    event: {
      toEn: () => app.lang("en"),
    },
  });
</script>
```

String values are fetched as JSON. A failed fetch leaves that locale empty, and text falls back to the raw key. `lang()` ignores locales that are not defined.

### External HTML Blocks, Lazy Images, and Inline SVG

```html
<div id="app">
  <temp :path="headerPath"></temp>
  <img :lazyload="cover" :effect="circle" />
  <temp-svg :src="icon" class="icon"></temp-svg>
</div>

<script>
  new QUI({
    id: "app",
    data: {
      headerPath: "/components/header.html",
      cover: "/images/cover.jpg",
      icon: "/images/icon.svg",
    },
    option: { lazyload: true, svg: true },
  });
</script>
```

Failed images fall back to a default 404 image; failed SVG fetches replace the node content with `☒`.

### Lifecycle

```html
<script>
  const app = new QUI({
    id: "app",
    data: { ready: false },
    when: {
      beforeRender: () => {
        if (!navigator.onLine) {
          console.error("offline, skip render");
          return false;
        }
      },
      rendered: (sec) => console.log("rendered in", sec, "s"),
      beforeUpdate: () => console.log("before update"),
      updated: (sec) => console.log("updated in", sec, "s"),
    },
  });
</script>
```

Returning `false` from a `before*` hook aborts that render or update; `rendered` and `updated` receive the elapsed time in seconds.

### Render Function to DocumentFragment

```javascript
import { QUI } from "@pardnchiu/quickui";

const card = new QUI({
  render: () => `div.card[ h2[ "{{title}}" ] ]`,
  data: { title: "Card" },
  once: true,
  when: {
    rendered: () => {
      card
        .fragment()
        .then((fragment) => document.body.appendChild(fragment))
        .catch((err) => console.error("render failed", err));
    },
  },
});
```

Without `id`, the `render` output mounts onto a detached `<section class="QUIFragment">`; call `fragment()` to extract it and insert it yourself. `body` is assigned only after data initialization (including i18n fetches) completes, so call `fragment()` from `rendered` or later. The shorthand removes all whitespace inside double quotes (use `&#32;` for a space) and cannot express `:for`, `:if`, `:model`, or `<temp :path>`; use `q-` / `qe-` prefixes for attribute and event binding.

### Global Utilities `$` and `_`

```javascript
const root = $("#app");
if (root == null) {
  throw new Error("#app not found");
}

const list = _("ul.list", [
  _("li.item", "first"),
  _("li.item", { "data-id": "2", color: "red" }, "second"),
]);

root.appendChild(list);
```

## API Reference

### `new QUI(options)`

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `string` | Conditional | ID of the element to bind; `render` is required when omitted |
| `render` | `() => string` | Conditional | Returns a shorthand string (`tag#id.class(attr: "value")[ children ]`); with `id`, it replaces that element's children as the template |
| `data` | `Record<string, any>` | No | Reactive data |
| `event` | `Record<string, Function>` | No | Event handlers referenced by name from `@event` |
| `i18n` | `Record<string, object \| string>` | No | Locale definitions; strings are treated as JSON file URLs |
| `i18nLang` | `string` | No | Initial locale, defaults to `"zh"` |
| `once` | `boolean` | No | When `true`, data is not wrapped in a Proxy and renders once |
| `option.svg` | `boolean` | No | Enables `temp-svg` inlining, defaults to `true` |
| `option.lazyload` | `boolean` | No | Enables lazy image loading, defaults to `true` |
| `when` | `object` | No | Lifecycle hooks |

### Instance Members

| Member | Signature | Description |
|--------|-----------|-------------|
| `data` | `Record<string, any>` | Reactive data (a plain object when `once: true`) |
| `event` | `Record<string, Function>` | Event handler map |
| `body` | `Element` | Bound root element |
| `lang` | `lang(lang: string): void` | Switches locale; ignored when the locale is undefined |
| `fragment` | `fragment(): Promise<DocumentFragment>` | Re-renders and returns a copy of the root element's child nodes |

### Lifecycle Hooks (`when`)

| Hook | Argument | Description |
|------|----------|-------------|
| `beforeRender` | none | Before the initial render; return `false` to abort |
| `rendered` | `sec: number` | After the initial render |
| `beforeUpdate` | none | Before a data-triggered update; return `false` to abort |
| `updated` | `sec: number` | After an update |
| `beforeDestroy` / `destroyed` | none / `sec: number` | Accepted, but `QUI` currently exposes no method that triggers destruction |

### Template Syntax

| Syntax | Description | Example |
|--------|-------------|---------|
| `{{ key }}` | Text interpolation with nested paths | `{{ user.name }}` |
| `{{ i18n.key }}` | Translation for the current locale | `{{ i18n.title }}` |
| `:for` | Loop | `item in items`, `(item, index) in items`, `(key, value) in obj` |
| `:if` / `:else-if` / `:elif` / `:else` | Conditional branches (must be adjacent siblings) | `:if="count > 0"` |
| `:model` | Two-way binding (`input` / `select` / `textarea`) | `:model="keyword"` |
| `@event` / `qe-event` | Event binding; the value names a function in `event` | `@click="search"` |
| `:html` | Sets `innerHTML` | `:html="snippet"` |
| `:id` / `:src` / `:alt` / `:href` | Sets the matching DOM property | `:href="link"` |
| `:hide` | Applies `display: none` when truthy | `:hide="hidden"` |
| `:<css-property>` | Writes inline style when the name belongs to `style` | `:background-color="color"` |
| `:<attr>` / `q-<attr>` | Any other attribute is written via `setAttribute` | `:title="tip"`, `q-title="tip"` |
| `:lazyload` | Lazy image loading; `:effect="circle"` switches to a spinner placeholder | `:lazyload="cover"` |
| `<temp :path>` | Fetches external HTML and replaces the node | `<temp :path="headerPath">` |
| `<temp-svg :src>` | Inlines SVG on viewport entry, keeping `id`, `class`, and `onclick` | `<temp-svg :src="icon">` |

### Condition Operators

| Operator | Description |
|----------|-------------|
| (none) | Boolean check |
| `==` / `===` | String equality |
| `!=` / `!==` | String inequality |
| `>` / `<` / `>=` / `<=` | Numeric comparison |

When the right operand is `null`, `true`, `false`, or `empty`, it is treated as a special value that checks for `null`, truthy, falsy, or an empty string respectively.

### Built-in Functions

| Function | Example | Description |
|----------|---------|-------------|
| `LENGTH()` | `{{ LENGTH(items) }}` | Array/string length or object key count |
| `CALC()` | `{{ CALC(price * 1.05) }}` | `variable operator number`, supporting `+ - * / %` |
| `UPPER()` | `{{ UPPER(name) }}` | Uppercase |
| `LOWER()` | `{{ LOWER(name) }}` | Lowercase |
| `DATE()` | `{{ DATE(ts, YYYY-MM-DD HH:mm) }}` | Formats a UNIX timestamp in seconds |

`DATE` formats accept only alphanumerics, `-`, `:`, `,`, and spaces. Available tokens: `YYYY`, `YY`, `MM`, `M`, `DD`, `D`, `HH`, `H`, `hh`, `h`, `mm`, `m`, `ss`, `s`, `SSS`, `a`, `A`, `ddd`.

### Global Utilities

| Function | Signature | Description |
|----------|-----------|-------------|
| `$` | `$(text: string): HTMLElement \| null` | `#` prefix uses `getElementById`; text containing `.`, `[`, or `]` uses `querySelector`; otherwise tries ID first, then selector |
| `_` | `_(tag: string, attrs?: object, children?: string \| number \| Array)` | Creates an element; `tag` supports `div#id.class` notation, and `temp` creates a `DocumentFragment` |

In `_`, the `attrs` keys `value`, `innerText`, `innerHTML`, `textContent`, and `contentEditable` are set as properties; `color`, `backgroundColor`, `width`, `height`, `display`, and `float` go to `style`; all others use `setAttribute`. String or number `children` become `innerHTML` (or `src` for `img`/`source`); array `children` append strings and `Element`s in order. With two arguments, a string, number, or array is treated as `children`, and anything else as `attrs`.

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
