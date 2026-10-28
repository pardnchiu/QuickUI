# Render Effects

This page covers how the `effect` and `mask` attributes on the root element provide fade-in, expand and skeleton loading effects on the first render.

## Syntax

```demo
<div id="app" effect="fade-in">
  <p>{{ message }}</p>
</div>

<script>
  const app = new QUI({ id: "app", data: { message: "Hello QuickUI" } });
</script>
```

QuickUI injects the matching CSS into `<head>` when it loads. After the render is applied, the root element gets the `show` class to start the transition, and 300 ms later the effect attributes and the `show`, `fade-in`, `expand` and `loading-block` classes are removed.

## Available Effects

| Attribute | Effect |
|---|---|
| `effect="fade-in"` | Opacity 0 → 1 over 0.3 s |
| `effect="expand"` | Height grows from 0 to the content height (sets `min-height` from `scrollHeight`) over 0.3 s |
| `mask="1"` | Covers the content with a grey gradient skeleton animation that fades out after rendering |

`effect` can also be written as `:effect`; legacy forms such as `animation="fade-in"` are planned for removal in 1.0.0, see [Deprecations](/deprecations).

## Rules

| Rule | Description |
|---|---|
| Target | Only the root element (the one referenced by `id`) |
| How often | The attributes are removed after the first render, so later updates do not replay them |
| `mask="true"` | The injected CSS makes its overlay transparent from the start, so nothing shows; use `mask="1"` |
| Image loader | `:effect="circle"` on `<img>` belongs to [Image Lazy Loading](/lazyload) |
