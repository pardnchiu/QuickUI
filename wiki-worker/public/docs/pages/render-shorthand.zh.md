# render 簡寫語法

本頁說明 `render` 選項回傳的簡寫字串格式，以及它能與不能表達的指令。

## 格式

```text
tag#id.class1.class2(key: "value", key2: "value")[ children ]
```

| 部分 | 說明 |
|---|---|
| `tag` | 標籤名稱，必填 |
| `#id`、`.class` | 選填，可多個 class |
| `( ... )` | 屬性，`key: "value"` 以逗號或空白分隔 |
| `[ ... ]` | 子節點：巢狀元素或以雙引號包住的文字，可跨行 |
| `"文字"` | 以 `innerHTML` 解析，可寫 HTML 實體 |

```demo
<div id="app"></div>

<script>
  const app = new QUI({
    id: "app",
    data: { title: "QuickUI", link: "https://quickui.pardn.io" },
    event: { open: () => {} },
    render: () => `
      section.hero[
        h1[ "{{title}}" ]
        a(q-href: "link", qe-click: "open")[ "Docs" ]
      ]
    `,
  });
</script>
```

## 空白處理

雙引號內的所有空白都會被移除，屬性值也一樣。需要空白時使用 HTML 實體：

```text
p[ "Hello World" ]
p[ "Hello&#32;World" ]
```

第一行輸出 HelloWorld，第二行輸出 Hello World。

## 可用的指令

屬性名稱只接受英數、`-`、`_`，因此 `:` 與 `@` 開頭的指令無法表達。

| 功能 | 簡寫中的寫法 |
|---|---|
| 文字插值 | `"{{title}}"` |
| 屬性綁定 | `q-` 前綴，例如 `q-href`、`q-html`、`q-hide` |
| 事件 | `qe-` 前綴，例如 `qe-click` |
| `:for`、`:if`、`:model`、`<temp :path>` | 不支援 |

需要迴圈或條件時，改用 `id` 搭配 HTML 模板。
