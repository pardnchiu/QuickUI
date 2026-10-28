# SVG 內嵌

本頁說明 `<temp-svg>` 如何把外部 SVG 檔換成內嵌的 `<svg>` 元素，讓 CSS 可以控制其樣式。

## 寫法

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

| 階段 | 行為 |
|---|---|
| 渲染 | `<temp-svg :src>` 設定 `src` 並交給 `IntersectionObserver` |
| 進入視窗 | `fetch` SVG 文字，解析出第一個子元素 |
| 取代 | 新 `<svg>` 沿用原元素的 `id`、所有 class 與 `onclick`，插入原位置後移除 `<temp-svg>` |
| 失敗 | `<temp-svg>` 內容改為 `☒` |

頁面上已存在、帶靜態 `src` 的 `<temp-svg>` 也會在監聽器建立時一併處理。

## 規則

| 規則 | 說明 |
|---|---|
| 保留的屬性 | 只有 `id`、class、`onclick`；其他屬性與事件不會轉移 |
| 檔案內容 | 只取回應中的第一個元素，該元素須為 `<svg>`；之後的同層元素會被捨棄 |
| 跨網域 | 需要 CORS 標頭 |

## 停用

```javascript
new QUI({ id: "app", option: { svg: false } });
```

停用後監聽器不會建立；此時模板中仍使用 `<temp-svg :src>` 會因觀察器不存在而拋出錯誤。
