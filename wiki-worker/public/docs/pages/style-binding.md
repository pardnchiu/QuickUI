# Style Binding

This page covers binding data straight to inline styles with `:[CSS property]`.

## Syntax

```demo
<div id="app">
  <button :width="width" :background-color="color">Save</button>
</div>

<script>
  const app = new QUI({ id: "app", data: { width: "120px", color: "#3498db" } });
</script>
```

Result:

```html
<button style="width: 120px; background-color: #3498db;">Save</button>
```

| Rule | Description |
|---|---|
| Name | A kebab-case CSS property name whose camelCase form exists on `element.style` |
| Value | The data value or the attribute value itself, including units, for example `"120px"` |
| Prefix | Only `:`; `q-width` does not reach `style` and sets the `width` attribute instead |
| `:animation` | Values `fade-in` and `expand` are not written to `style`; they are treated as [Render Effects](/effects) |

## Legacy Names

The forms below still work but are planned for removal in 1.0.0; see [Deprecations](/deprecations).

| Legacy | Use instead |
|---|---|
| `:bg-*` such as `:bg-color`, `:bg-image` | `:background-color`, `:background-image` |
| camelCase such as `:borderRadius`, `:backgroundColor` | `:border-radius`, `:background-color` |
