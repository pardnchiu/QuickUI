# Text Binding

This page covers writing data into text with `{{ }}` and inserting HTML with `:html`.

## `{{ value }}`

```demo
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ user.name }} · {{ LENGTH(items) }} items</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { title: "QuickUI", user: { name: "Pardn" }, items: [1, 2, 3] },
  });
</script>
```

| Rule | Description |
|---|---|
| Allowed characters | Letters, digits, underscores and `.`; may be wrapped in a [built-in function](/built-in-functions) |
| Whitespace | Both `{{title}}` and `{{ title }}` work |
| Missing value | `{{ title }}` stays on the page as written |
| Localization | `{{ i18n.key }}` reads the current locale, see [i18n](/i18n) |
| Position | Replaced only in text nodes; `{{ }}` inside plain attributes is left alone, use [Attribute Binding](/attribute-binding) for attributes |

## `:html`

```demo
<div id="app">
  <section :html="content"></section>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { content: "<b>bold</b> text" },
  });
</script>
```

`:html` writes the value to `innerHTML`; when no matching data exists, the attribute value itself is written. Content is not sanitized, so never pass unescaped user input, or the page is open to XSS.
