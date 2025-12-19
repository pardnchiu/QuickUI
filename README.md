![](./cover.png)

# QuickUI: Lightweight Frontend Framework

[![Author](https://img.shields.io/badge/Author-邱敬幃%20Pardn%20Chiu-white)](https://github.com/pardnchiu)
[![version](https://img.shields.io/npm/v/@pardnchiu/quickui)](https://www.npmjs.com/package/@pardnchiu/quickui)
[![jsdeliver](https://img.shields.io/jsdelivr/npm/hm/@pardnchiu/quickui)](https://www.jsdelivr.com/package/npm/@pardnchiu/quickui)

> QuickUI is a lightweight frontend framework built on pure JavaScript and native APIs. Supports data binding, i18n support, event binding, conditional rendering, and loop rendering.

> [!NOTE]
> (Formerly known as PDQuickUI, renamed to QuickUI starting from version `0.6.0`)

## Features

### Efficient Virtual DOM
- Precise diffing algorithm for efficient DOM updates
- Smart attribute patching system that updates only changed values
- Intelligent child node comparison for minimal DOM manipulation

### Reactive Data Handling
- Deep data monitoring system for immediate state tracking
- Automatic UI updates on data changes, no manual operation needed
- Smart caching system to prevent unnecessary re-renders
- Support for nested data structures with reactive handling

### Advanced Template Features
- Built-in internationalization (i18n) support for easy localization
- Dynamic template loading with asynchronous processing
- Powerful expression system supporting calculations, dates, and text processing
- Comprehensive directive system for flexible DOM manipulation

### Performance Optimizations
- Lazy loading for images and SVG content to improve load times
- Minimal file size with zero external dependencies
- Smart event delegation and resource cleanup for optimized memory usage

## Documentation

- Website: [quickui.pardn.io](https://quickui.pardn.io/)
- Documentation: [quickui.pardn.io/doc.html](https://quickui.pardn.io/page/doc.html)

## Installation

### Install via npm
```shell
npm i @pardnchiu/quickui
```

### Include via CDN

#### Include the `QuickUI` library
```html
<!-- Version 0.6.0 and above -->
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.js"></script>

<!-- Version 0.5.4 and below -->
<script src="https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.js"></script>
```

#### Module version
```javascript
// Version 0.6.0 and above
import { QUI } from "https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@[VERSION]/dist/QuickUI.esm.js";

// Version 0.5.4 and below
import { QUI } from "https://cdn.jsdelivr.net/npm/pdquickui@[VERSION]/dist/PDQuickUI.module.js";
```

## How to use

### Initialize `QUI`
```Javascript
const app = new QUI({
    id: "", // Specify rendering element
    data: {
        // Custom DATA
    },
    event: {
        // Custom EVENT
    },
    when: {
        beforeRender: function () {
            // Stop rendering
        },
        rendered: function () {
            // Rendered
        },
        beforeUpdate: function () {
            // Stop updating
        },
        updated: function () {
            // Updated
        },
        beforeDestroy: function () {
            // Stop destruction
        },
        destroyed: function () {
            // Destroyed
        }
    }
});
```

### Render Template
- index.html
    ```HTML
    <body id="app"></body>
    <script>
        const test = new QUI({
            id: "app",
            data: {
                hint: "hint 123",
                title: "test 123"
            },
            render: () => `
                "{{ hint }}",
                h1 {
                    style: "background: red;", 
                    children: [ 
                        "{{ title }}"
                    ]
                }`
        })
    </script>
    ```
- result
    ```HTML
    <body id="app">
        hint 123
        <h1 style="background: red;">test 123</h1>
    </body>
    ```

## Overview

### Text & Content
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `{{value}}` | Dynamic text content | `<p>{{ userName }}</p>` displays user's name |
| `:html` | Raw HTML insertion | `<div :html="richContent"></div>` renders formatted content |

### Template Loading
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:path` | External template loading | `<temp :path="./templates/header.html"></temp>` loads header component |

### List & Iteration
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:for` | Array/Object iteration | `<li :for="item in items">{{ item.name }}</li>` renders list items |

### Conditional Rendering
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:if` | Conditional display | `<div :if="isLoggedIn">Welcome!</div>` |
| `:else-if`/`:elif` | Secondary conditions | `<div :elif="isPending">Loading...</div>` |
| `:else` | Fallback content | `<div :else>Please log in</div>` |

### Form Binding
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:model` | Two-way data binding | `<input :model="userInput">` syncs with data |

### Styling & Animation
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:animation` | Transition effects | `<div :animation="fade-in">Content</div>` |
| `:[css]` | Dynamic styling | `<div :background-color="bgColor">Styled content</div>` |

### Dynamic Attributes
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `:[attr]` | Dynamic attributes | `<img :src="imageUrl" :alt="imageDesc">` |

### Event Handling
| Attribute | Use Case | Example |
|-----------|----------|---------|
| `@[event]` | Event listeners | `<button @click="handleClick">Click me</button>` |

## License

Similar to MIT License but provides obfuscated code only:
- Same as MIT: Free to use, modify and redistribute, including commercial use 
- Main difference: Provides obfuscated code by default, source code available for purchase
- License terms: Must retain original copyright notice (same as MIT)

For detailed terms and conditions, please see the [Software Usage Agreement](https://github.com/pardnchiu/QuickUI/blob/main/LICENSE).

## Creator

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;">

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

<a href="mailto:dev@pardn.io" target="_blank">
    <img src="https://pardn.io/image/email.svg" width="48" height="48">
</a> <a href="https://linkedin.com/in/pardnchiu" target="_blank">
    <img src="https://pardn.io/image/linkedin.svg" width="48" height="48">
</a>

## Star History

[![Star](https://api.star-history.com/svg?repos=pardnchiu/QuickUI&type=Date)](https://www.star-history.com/#pardnchiu/QuickUI&Date)

***

©️ 2024 [邱敬幃 Pardn Chiu](https://pardn.io)
