# Global Helpers

This page covers `_` and `$`, the two DOM helpers QuickUI attaches to the global object when it loads.

## `$(selector)`

Returns a single element, `HTMLElement | null`.

```demo
<div id="app" class="card">
  <input name="email" />
  <button>Send</button>
</div>

<script>
  console.log($("#app").id);
  console.log($("app").id);
  console.log($(".card").className);
  console.log($("input[name=email]").name);
  console.log($("button").textContent);
</script>
```

| Input | Lookup |
|---|---|
| Starts with `#` | `getElementById` with `#` removed |
| Contains `.`, `[` or `]` | `querySelector` |
| Anything else | `getElementById` first, then `querySelector` |

Only the first match is returned; use `document.querySelectorAll` when you need several.

## `_(selector, attributes?, children?)`

Creates an element from CSS selector syntax.

```demo
<script>
  const card = _("div#card.box.shadow", { title: "Card", color: "red" }, [
    _("h2", "Title"),
    "plain text",
  ]);
  const img = _("img", "/logo.png");
  const text = _("temp", "text only");
  document.body.append(card);
  console.log(card.outerHTML);
  console.log(img.outerHTML);
  console.log(text.textContent);
</script>
```

| Argument | Description |
|---|---|
| `selector` | `tag#id.class`; must start with a tag or `undefined` is returned; `temp` creates a `DocumentFragment` |
| `attributes` | An object, see the table below |
| `children` | A string, number or array; with a single argument, a string / number / array is treated as `children` and an object as `attributes` |

| `attributes` key | Written as |
|---|---|
| `value`, `innerText`, `innerHTML`, `textContent`, `contentEditable` | Element property |
| `color`, `backgroundColor`, `width`, `height`, `display`, `float` | `style` |
| Anything else | `setAttribute`; skipped when the value is `null` or `undefined` |

| `children` type | Result |
|---|---|
| String or number | Written to `innerHTML`; `img` and `source` get `src` instead; `temp` creates a text node |
| Array | Appended in order; strings and numbers become text nodes, `Element` values are appended as is, anything else is skipped |

String `children` are written with `innerHTML`, so never pass unescaped user input.
