# Constructor Options

This page lists every option accepted by `new QUI(options)`, with its type, default, and how options interact.

## Type

```typescript
new QUI(options: {
  id?: string;
  render?: () => string;
  data?: Record<string, any>;
  event?: Record<string, Function>;
  i18n?: Record<string, string | object>;
  i18nLang?: string;
  once?: boolean;
  option?: { svg?: boolean; lazyload?: boolean };
  when?: {
    beforeRender?: () => boolean | void;
    rendered?: (sec: number) => void;
    beforeUpdate?: () => boolean | void;
    updated?: (sec: number) => void;
    beforeDestroy?: () => boolean | void;
    destroyed?: (sec: number) => void;
  };
})
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | None | ID of the element used as template and mount point |
| `render` | `() => string` | None | Returns a [Render Shorthand](/render-shorthand) string |
| `data` | `object` | `{}` | Reactive data, see [Reactive Data](/reactive-data) |
| `event` | `object` | `{}` | Event handlers, see [Event Binding](/event-binding) |
| `i18n` | `object` | None | Locale objects or JSON URLs, see [i18n](/i18n) |
| `i18nLang` | `string` | `"zh"` | Initial locale |
| `once` | `boolean` | `false` | When `true`, data is not wrapped in a Proxy and renders once |
| `option.svg` | `boolean` | `true` | Enables [SVG Inlining](/svg-inline) |
| `option.lazyload` | `boolean` | `true` | Enables [Image Lazy Loading](/lazyload) |
| `when` | `object` | None | [Lifecycle Hooks](/lifecycle) |

## Combining `id` and `render`

| `id` | `render` | Result |
|---|---|---|
| Set | Not set | The element's content is the template and the element is updated in place |
| Set | Set | The output of `render()` replaces the element's content and becomes the template |
| Not set | Set | A detached `<section class="QUIFragment">` is created; get the result with [`fragment()`](/instance-api) |
| Not set | Not set | An error is logged and the instance does not render |
| Points to a missing element | Any | An error is logged and the instance does not render |

## Interactions

| Combination | Result |
|---|---|
| `once: true` + `app.lang()` | The locale value changes but nothing re-renders |
| `option.lazyload: false` + `:lazyload` in the template | Throws |
| `option.svg: false` + `<temp-svg :src>` in the template | Throws |
| No `when` | Hooks are read from a `lifecycle` object, then from the top level of the options (legacy forms, see [Deprecations](/deprecations)) |
