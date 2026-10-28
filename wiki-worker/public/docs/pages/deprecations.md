# Deprecations

This page lists forms that still work today but are planned for removal in 1.0.0, along with their replacements.

From 1.0.0 only camelCase names and the `when` object are maintained, to keep the syntax consistent and the bundle small. No public API has been removed yet.

## Lifecycle

| Planned removal | Use instead |
|---|---|
| A `lifecycle: { ... }` object | `when: { ... }` |
| Hooks at the top level of the options (such as `new QUI({ rendered() {} })`) | Move them into `when` |
| `before_render` | `beforeRender` |
| `before_update` | `beforeUpdate` |
| `before_destroy` | `beforeDestroy` |

```javascript
new QUI({
  id: "app",
  when: {
    beforeRender: () => {},
  },
});
```

## Style Binding

| Planned removal | Use instead |
|---|---|
| `:bg-*` such as `:bg-color`, `:bg-image`, `:bg-size` | `:background-color`, `:background-image`, `:background-size` |
| camelCase names such as `:borderRadius`, `:backgroundColor` | `:border-radius`, `:background-color` |
| `:box-sahdow` (legacy misspelled name) | `:box-shadow` |

Standard kebab-case CSS property names are unaffected; see [Style Binding](/style-binding).

## Render Effects

| Planned removal | Use instead |
|---|---|
| `animation="fade-in"` and `animation="expand"` on the root element | `effect="fade-in"` and `effect="expand"` |

See [Render Effects](/effects).
