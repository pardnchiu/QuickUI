# Getting Started

This page covers how to install QuickUI and bind your first data object to a page.

## Prerequisites

| Item | Requirement |
|---|---|
| Browser | ES2022, `Proxy`, `IntersectionObserver` and `structuredClone` support |
| HTTP server | Required when using external `i18n` files or `<temp :path>`; `fetch` fails under `file://` |
| Node.js | Only needed when building from source |

## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@latest/dist/QuickUI.js"></script>
```

Loading the script registers three globals: `QUI`, `_` and `$`. See [Global Helpers](/global-helpers).

### npm

```bash
npm i @pardnchiu/quickui
```

### ESM

```javascript
import { QUI } from "@pardnchiu/quickui";
```

`package.json` points `module` at `dist/QuickUI.esm.js`, so bundlers resolve the bare package name to the ESM build. The ESM build is the same code as the CDN build with `window.QUI` exported at the end, so importing it still registers the globals.

### From Source

```bash
git clone https://github.com/pardnchiu/QuickUI.git
cd QuickUI
npm install
npm run build:once
```

`build:once` runs `tsc` to bundle `src/` into `src/QuickUI.debug.js`, then terser produces `dist/QuickUI.js` and `dist/QuickUI.esm.js`.

## Your First App

```demo
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: {
      title: "Hello QuickUI",
      description: "A lightweight frontend framework",
    },
  });
</script>
```

`id` points to an existing element whose content becomes the template. Changing `app.data.title` later re-renders the page about 300 ms after the change.

## Next Steps

| Goal | Page |
|---|---|
| Learn the template syntax | [Text Binding](/text-binding), [Conditional Rendering](/conditional-rendering), [Loop Rendering](/loop-rendering) |
| Handle user input | [Event Binding](/event-binding), [Two-way Binding](/two-way-binding) |
| Look up every option | [Constructor Options](/constructor-options) |
