# 表單綁定

本頁說明 `:model` 如何把表單輸入寫回資料。

## 寫法

```demo
<div id="app">
  <input type="text" :model="username" />
  <p>Hello, {{ username }}</p>
</div>

<script>
  const app = new QUI({ id: "app", data: { username: "" } });
</script>
```

## 各元素的行為

| 元素 | 監聽事件 | 寫入 `app.data[key]` 的值 |
|---|---|---|
| `<input>`（文字類）、`<textarea>` | `keyup`、`change` | `value`，空值為 `""` |
| `<select>` | `change` | 選取項目的 `value` |
| `<input type="checkbox">`、`<input type="radio">` | `change` | 頁面上同 `name`、同 `type` 且已勾選者的 `value`，以 `,` 串接 |

其他元素上的 `:model` 會被忽略。
