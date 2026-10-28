# Render Shorthand

This page covers the shorthand string format returned by the `render` option, and which directives it can and cannot express.

## Format

```text
tag#id.class1.class2(key: "value", key2: "value")[ children ]
```

| Part | Description |
|---|---|
| `tag` | Tag name, required |
| `#id`, `.class` | Optional; multiple classes allowed |
| `( ... )` | Attributes, `key: "value"` separated by commas or whitespace |
| `[ ... ]` | Children: nested elements or double-quoted text, may span lines |
| `"text"` | Parsed with `innerHTML`, so HTML entities work |

```demo
<div id="app"></div>

<script>
  const app = new QUI({
    id: "app",
    data: { title: "QuickUI", link: "https://quickui.pardn.io" },
    event: { open: () => {} },
    render: () => `
      section.hero[
        h1[ "{{title}}" ]
        a(q-href: "link", qe-click: "open")[ "Docs" ]
      ]
    `,
  });
</script>
```

## Whitespace

All whitespace inside double quotes is removed, attribute values included. Use an HTML entity when you need a space:

```text
p[ "Hello World" ]
p[ "Hello&#32;World" ]
```

The first line renders HelloWorld and the second renders Hello World.

## Available Directives

Attribute names only accept letters, digits, `-` and `_`, so directives starting with `:` or `@` cannot be written.

| Feature | Shorthand form |
|---|---|
| Text interpolation | `"{{title}}"` |
| Attribute binding | `q-` prefix, for example `q-href`, `q-html`, `q-hide` |
| Events | `qe-` prefix, for example `qe-click` |
| `:for`, `:if`, `:model`, `<temp :path>` | Not supported |

For loops or conditions, use `id` with an HTML template instead.
