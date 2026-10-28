# Two-way Binding

This page explains how `:model` writes form input back into data.

## Syntax

```demo
<div id="app">
  <input type="text" :model="username" />
  <p>Hello, {{ username }}</p>
</div>

<script>
  const app = new QUI({ id: "app", data: { username: "" } });
</script>
```

## Behavior per Element

| Element | Events | Value written to `app.data[key]` |
|---|---|---|
| Text `<input>`, `<textarea>` | `keyup`, `change` | `value`, `""` when empty |
| `<select>` | `change` | The selected option's `value` |
| `<input type="checkbox">`, `<input type="radio">` | `change` | Values of every checked input on the page with the same `name` and `type`, joined with `,` |

`:model` on any other element is ignored.
