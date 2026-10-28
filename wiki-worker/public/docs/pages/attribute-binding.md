# Attribute Binding

This page covers binding data to HTML attributes with the `:` or `q-` prefix, and how `:hide` is evaluated.

## Syntax

```demo
<div id="app">
  <a :href="link" :title="label">{{ label }}</a>
  <img :src="avatar" :alt="name" />
  <button q-data-id="userId">Edit</button>
  <a :href="/user/{{ userId }}">Profile</a>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: {
      link: "https://quickui.pardn.io",
      label: "Docs",
      avatar: "https://quickui.pardn.io/favicon.png",
      name: "QuickUI",
      userId: 42,
    },
    when: {
      rendered: () => [...$("app").children].forEach((e) => console.log(e.outerHTML)),
    },
  });
</script>
```

| Prefix | Description |
|---|---|
| `:` | Standard form, for example `:href` |
| `q-` | Equivalent form, for example `q-href`; useful for toolchains that reject `:` in attribute names |

The attribute value is first looked up as a data path; when nothing matches, the value itself is used. When the value contains `{{ }}`, only the first `{{ }}` is replaced and the surrounding text is kept. The original `:` attribute is removed afterwards.

## Dispatch Rules

| Attribute | Written as |
|---|---|
| `:id`, `:src`, `:alt`, `:href` | Element property |
| `:html` | `innerHTML`, see [Text Binding](/text-binding) |
| `:` prefix and the name matches a CSS property (such as `:width`, `:color`) | Written to `style`, see [Style Binding](/style-binding) |
| `:hide` | Sets `display: none` when truthy |
| `:lazyload` | See [Image Lazy Loading](/lazyload) |
| Anything else (such as `:title`, `:data-id`, `:value`) | `setAttribute` with the prefix stripped |

Names that match a CSS property always go to `style`: `<img :width="w">` sets the CSS `width`, not the `width` attribute.

## `:hide`

```demo
<div id="app">
  <div :hide="isHidden">Content</div>
  <button @click="toggle">Toggle</button>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { isHidden: false },
    event: {
      toggle: () => {
        app.data.isHidden = !app.data.isHidden;
      },
    },
    when: {
      updated: () => console.log(app.data.isHidden, $("app").children[0].outerHTML),
    },
  });
</script>
```

| Value | Result |
|---|---|
| `true`, non-zero numbers, non-empty strings | Hidden |
| `false`, `0`, `"0"`, empty string | Shown; the value is written as a `hide` attribute (for example `hide="false"`) |
| A key that does not exist in data | The attribute value itself (a non-empty string) is used, so the element is hidden |

The string `"false"` is truthy and also hides the element; use booleans.

Once hidden, setting the value back to a falsy one does not remove `display: none`, so the element stays hidden. Press Toggle twice in the preview above to reproduce it.

## Localized Attribute Values

Any attribute whose value is `i18n.key` is replaced with the translation for the current locale, for example `placeholder="i18n.search"`. Attributes only support single-level keys, see [i18n](/i18n).
