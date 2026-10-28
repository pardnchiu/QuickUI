# 文字綁定

本頁說明如何用 `{{ }}` 把資料寫進文字，以及用 `:html` 插入 HTML。

## `{{ value }}`

```demo
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ user.name }} · {{ LENGTH(items) }} items</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { title: "QuickUI", user: { name: "Pardn" }, items: [1, 2, 3] },
  });
</script>
```

| 規則 | 說明 |
|---|---|
| 可用字元 | 英數、底線、`.`；也可包一層 [內建函式](/zh/built-in-functions) |
| 空白 | `{{title}}` 與 `{{ title }}` 皆可 |
| 找不到值 | 原樣保留 `{{ title }}` |
| 多語系 | `{{ i18n.key }}` 讀取目前語系，見 [i18n](/zh/i18n) |
| 位置 | 只在文字節點中替換；一般屬性內的 `{{ }}` 不會處理，屬性請用 [屬性綁定](/zh/attribute-binding) |

## `:html`

```demo
<div id="app">
  <section :html="content"></section>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { content: "<b>bold</b> text" },
  });
</script>
```

`:html` 把值寫入 `innerHTML`；找不到對應資料時寫入屬性值本身。內容不經過任何過濾，不要放入未經處理的使用者輸入，以免造成 XSS。
