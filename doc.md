# QuickUI - Documentation

> Back to [README](./README.md)

## Prerequisites

- Modern browser (ES6+, `Proxy`, `MutationObserver` support required)
- Node.js ≥ 18 (only needed for development builds)

## Installation

### Via npm

```bash
npm i @pardnchiu/quickui
```

### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@latest/dist/QuickUI.js"></script>
```

### ESM Module

```javascript
import { QUI } from "@pardnchiu/quickui/dist/QuickUI.esm.js";
```

### Build from Source

```bash
git clone https://github.com/pardnchiu/QuickUI.git
cd QuickUI
npm install
npm run build:once
```

## Usage

### Basic

Create a QuickUI instance and bind data:

```html
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
</div>

<script>
const app = new QUI({
  id: "app",
  data: {
    title: "Hello QuickUI",
    description: "A lightweight frontend framework"
  }
});
</script>
```

### Conditional Rendering

Control element visibility with `:if`, `:else-if`, `:else`:

```html
<div id="app">
  <p :if="status == active">Active</p>
  <p :else-if="status == pending">Pending</p>
  <p :else>Disabled</p>
</div>

<script>
const app = new QUI({
  id: "app",
  data: {
    status: "active"
  }
});
</script>
```

### Loop Rendering

Iterate over arrays or objects with `:for`:

```html
<div id="app">
  <!-- Array iteration -->
  <ul>
    <li :for="item in items">{{ item }}</li>
  </ul>

  <!-- Object iteration with key -->
  <ul>
    <li :for="(key, value) in user">{{ key }}: {{ value }}</li>
  </ul>
</div>

<script>
const app = new QUI({
  id: "app",
  data: {
    items: ["Item A", "Item B", "Item C"],
    user: { name: "Pardn", role: "Developer" }
  }
});
</script>
```

### Event Binding

Bind DOM events with `@event` syntax:

```html
<div id="app">
  <button @click="handleClick">Click</button>
  <input type="text" @input="handleInput" />
</div>

<script>
const app = new QUI({
  id: "app",
  data: {
    message: ""
  },
  event: {
    handleClick: (e) => {
      console.log("clicked");
    },
    handleInput: (e) => {
      app.data.message = e.target.value;
    }
  }
});
</script>
```

### Two-Way Binding

Synchronize form elements with data using `:model`:

```html
<div id="app">
  <input type="text" :model="username" />
  <p>Hello, {{ username }}</p>
</div>

<script>
const app = new QUI({
  id: "app",
  data: {
    username: ""
  }
});
</script>
```

### i18n Multi-Language

Switch languages through JSON locale files and `i18n.key` syntax:

```html
<div id="app">
  <h1>{{ i18n.title }}</h1>
  <button @click="switchLang">Switch Language</button>
</div>

<script>
const app = new QUI({
  id: "app",
  i18n: {
    zh: { title: "歡迎" },
    en: { title: "Welcome" }
  },
  i18nLang: "zh",
  data: {},
  event: {
    switchLang: () => {
      app.lang("en");
    }
  }
});
</script>
```

### Lifecycle Hooks

Define lifecycle hooks via `when`:

```html
<script>
const app = new QUI({
  id: "app",
  data: {},
  when: {
    before_render: () => {
      console.log("Before render");
    },
    rendered: () => {
      console.log("Rendered");
    },
    before_update: () => {
      console.log("Before update");
    },
    updated: () => {
      console.log("Updated");
    },
    before_destroy: () => {
      console.log("Before destroy");
    },
    destroyed: () => {
      console.log("Destroyed");
    }
  }
});
</script>
```

## API Reference

### QUI Constructor

```typescript
new QUI(options: {
  id?: string;
  render?: () => string;
  data?: Record<string, any>;
  event?: Record<string, Function>;
  i18n?: Record<string, string | object>;
  i18nLang?: string;
  once?: boolean;
  option?: {
    svg?: boolean;
    lazyload?: boolean;
  };
  when?: {
    before_render?: () => void;
    rendered?: () => void;
    before_update?: () => void;
    updated?: () => void;
    before_destroy?: () => void;
    destroyed?: () => void;
  };
})
```

### Constructor Options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | `string` | Conditional | Target DOM element ID, mutually exclusive with `render` |
| `render` | `() => string` | Conditional | Custom render function returning HTML string |
| `data` | `Record<string, any>` | No | Reactive data object |
| `event` | `Record<string, Function>` | No | Event handler collection |
| `i18n` | `Record<string, string \| object>` | No | Locale definitions, values as JSON paths or objects |
| `i18nLang` | `string` | No | Default locale, defaults to `"zh"` |
| `once` | `boolean` | No | Set `true` to skip Proxy creation (static rendering) |
| `option.svg` | `boolean` | No | Enable SVG listener, defaults to `true` |
| `option.lazyload` | `boolean` | No | Enable image lazy loading, defaults to `true` |

### Instance Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `lang` | `lang(lang: string): void` | Switch current locale |
| `fragment` | `fragment(): Promise<DocumentFragment>` | Get rendered DOM fragment |

### Template Syntax

| Syntax | Description | Example |
|--------|-------------|---------|
| `{{ value }}` | Text interpolation | `{{ title }}` |
| `:for` | Loop rendering | `item in items`, `(key, value) in obj` |
| `:if` | Conditional rendering | `:if="show"`, `:if="count > 0"` |
| `:else-if` / `:elif` | Condition branch | `:else-if="status == pending"` |
| `:else` | Default branch | `:else` |
| `:html` | HTML content binding | `:html="content"` |
| `:model` | Two-way data binding | `:model="username"` |
| `:path` | Load external HTML | `:path="/components/header.html"` |
| `:lazyload` | Image lazy loading | `:lazyload="image_url"` |
| `:hide` | Conditional hide | `:hide="isHidden"` |
| `@click` | Event binding | `@click="handleClick"` |
| `:src` | Dynamic source | `:src="imageUrl"` |
| `:href` | Dynamic link | `:href="linkUrl"` |

### Built-in Functions

| Function | Syntax | Description |
|----------|--------|-------------|
| `LENGTH()` | `{{ LENGTH(items) }}` | Get array or object length |
| `CALC()` | `{{ CALC(price * 1.05) }}` | Numeric calculation |
| `UPPER()` | `{{ UPPER(name) }}` | Convert to uppercase |
| `LOWER()` | `{{ LOWER(name) }}` | Convert to lowercase |
| `DATE()` | `{{ DATE(timestamp, YYYY-MM-DD) }}` | Date formatting |

### Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `==` / `===` | Equal | `:if="status == active"` |
| `!=` / `!==` | Not equal | `:if="status != disabled"` |
| `>` | Greater than | `:if="count > 0"` |
| `<` | Less than | `:if="count < 10"` |
| `>=` | Greater or equal | `:if="count >= 5"` |
| `<=` | Less or equal | `:if="count <= 100"` |

### Special Comparison Values

| Value | Description | Example |
|-------|-------------|---------|
| `null` | Check for null | `:if="value == null"` |
| `true` | Check boolean true | `:if="isActive == true"` |
| `false` | Check boolean false | `:if="isActive == false"` |
| `empty` | Check empty string | `:if="name == empty"` |

***

©️ 2024 [邱敬幃 Pardn Chiu](https://linkedin.com/in/pardnchiu)
