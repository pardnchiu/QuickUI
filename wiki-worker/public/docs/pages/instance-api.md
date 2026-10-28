# Instance API

This page lists the methods and properties available on the instance returned by `new QUI()`.

## Methods

| Method | Signature | Description |
|---|---|---|
| `lang` | `lang(code: string): void` | Switches the locale and triggers a re-render; ignored when `code` is not in `i18n` |
| `fragment` | `fragment(): Promise<DocumentFragment>` | Renders once more and returns a copy of the root element's child nodes |

### `fragment()`

```demo
<script>
  const card = new QUI({
    render: () => `div.card[ h2[ "{{title}}" ] ]`,
    data: { title: "QuickUI" },
    when: {
      rendered: async () => {
        document.body.append(await card.fragment());
      },
    },
  });
</script>
```

| Rule | Description |
|---|---|
| Rendering | Runs the full template processing once, without calling `beforeUpdate` / `updated` |
| Text nodes | Leading and trailing whitespace is trimmed |
| Return value | A copy; changing it does not affect the instance and it receives no further updates |
| When to call | After `rendered`, so data is ready |

## Properties

| Property | Type | Description |
|---|---|---|
| `data` | `Proxy` | Reactive data, see [Reactive Data](/reactive-data) |
| `event` | `Record<string, Function>` | The original `event` option object |
| `body` | `Element` | The mounted root element; the `QUIFragment` section when there is no `id` |
| `isScheduled` | `boolean` | `true` while patches are queued in `requestAnimationFrame` and not yet applied |
| `lazyloadObserver` | `IntersectionObserver` | The shared image lazy-loading observer; `undefined` when lazyload is disabled |

`data`, `event` and `body` are assigned only after i18n finishes loading.
