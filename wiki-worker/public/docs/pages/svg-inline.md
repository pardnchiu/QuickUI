# SVG Inlining

This page covers how `<temp-svg>` swaps an external SVG file for an inline `<svg>` element, so CSS can style it.

## Syntax

```demo
<div id="app">
  <temp-svg :src="icon" class="icon" @click="close"></temp-svg>
  <temp-svg src="/icons/menu.svg"></temp-svg>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { icon: "/icons/close.svg" },
    event: { close: () => {} },
  });
</script>
```

| Stage | Behavior |
|---|---|
| Render | `<temp-svg :src>` sets `src` and hands the element to an `IntersectionObserver` |
| Enters the viewport | The SVG text is fetched and its first child element is parsed |
| Replacement | The new `<svg>` takes the original element's `id`, every class and `onclick`, is inserted in its place, and `<temp-svg>` is removed |
| Failure | The content of `<temp-svg>` becomes `☒` |

`<temp-svg>` elements already on the page with a static `src` are processed too when the listener is created.

## Rules

| Rule | Description |
|---|---|
| Carried over | Only `id`, classes and `onclick`; other attributes and events are not transferred |
| File content | Only the first element in the response is used and it must be `<svg>`; sibling elements after it are discarded |
| Cross-origin | Requires CORS headers |

## Disabling

```javascript
new QUI({ id: "app", option: { svg: false } });
```

With it disabled, no listener is created; using `<temp-svg :src>` in the template then throws because the observer does not exist.
