# 屬性綁定

本頁說明以 `:` 或 `q-` 前綴把資料綁到 HTML 屬性，以及 `:hide` 的判斷方式。

## 寫法

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

| 前綴 | 說明 |
|---|---|
| `:` | 標準寫法，例如 `:href` |
| `q-` | 等價寫法，例如 `q-href`；適合不接受 `:` 屬性名的工具鏈 |

屬性值先當成資料路徑查找；找不到時直接使用屬性值本身。值中含 `{{ }}` 時，只替換第一個 `{{ }}`，前後文字保留。處理完成後原本的 `:` 屬性會被移除。

## 分派規則

| 屬性 | 寫入方式 |
|---|---|
| `:id`、`:src`、`:alt`、`:href` | 設定元素屬性（property） |
| `:html` | `innerHTML`，見 [文字綁定](/zh/text-binding) |
| `:` 前綴且名稱對應到 CSS 屬性（如 `:width`、`:color`） | 寫入 `style`，見 [樣式綁定](/zh/style-binding) |
| `:hide` | 值為真時設 `display: none` |
| `:lazyload` | 見 [圖片延遲載入](/zh/lazyload) |
| 其他（如 `:title`、`:data-id`、`:value`） | 去掉前綴後 `setAttribute` |

名稱與 CSS 屬性相同者一律進 `style`：`<img :width="w">` 設定的是 CSS `width`，不是 `width` 屬性。

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

| 值 | 結果 |
|---|---|
| `true`、非零數字、非空字串 | 隱藏 |
| `false`、`0`、`"0"`、空字串 | 顯示；值會寫成 `hide` 屬性（例如 `hide="false"`） |
| 資料中不存在的鍵 | 使用屬性值本身（非空字串），因此會隱藏 |

字串 `"false"` 也會被視為真值而隱藏；請使用布林值。

元素一旦隱藏，再把值改回假值也不會移除 `display: none`，元素維持隱藏。在上方預覽連按兩次 Toggle 即可重現。

## 多語系屬性值

任何屬性的值若是 `i18n.key`，會被替換為目前語系的翻譯，例如 `placeholder="i18n.search"`。屬性只支援單層 key，見 [i18n](/zh/i18n)。
