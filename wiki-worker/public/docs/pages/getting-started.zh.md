# 快速開始

本頁說明 QuickUI 的安裝方式，以及如何把第一個資料物件綁定到頁面上。

## 前置需求

| 項目 | 需求 |
|---|---|
| 瀏覽器 | 支援 ES2022、`Proxy`、`IntersectionObserver`、`structuredClone` |
| HTTP 伺服器 | 使用 `i18n` 外部檔或 `<temp :path>` 時必須透過 HTTP 載入；`file://` 下 `fetch` 會失敗 |
| Node.js | 只有從原始碼建置時需要 |

## 安裝

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@latest/dist/QuickUI.js"></script>
```

載入後全域會出現 `QUI`、`_`、`$` 三個名稱，詳見 [全域工具](/zh/global-helpers)。

### npm

```bash
npm i @pardnchiu/quickui
```

### ESM

```javascript
import { QUI } from "@pardnchiu/quickui";
```

`package.json` 的 `module` 指向 `dist/QuickUI.esm.js`，打包工具會把套件名稱直接解析到 ESM 版本。ESM 版本與 CDN 版本是同一份程式，只在結尾多匯出 `window.QUI`，所以匯入時仍會註冊全域名稱。

### 從原始碼建置

```bash
git clone https://github.com/pardnchiu/QuickUI.git
cd QuickUI
npm install
npm run build:once
```

`build:once` 先以 `tsc` 把 `src/` 合併成 `src/QuickUI.debug.js`，再用 terser 產出 `dist/QuickUI.js` 與 `dist/QuickUI.esm.js`。

## 第一個應用

```demo
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: {
      title: "Hello QuickUI",
      description: "A lightweight frontend framework",
    },
  });
</script>
```

`id` 指向既有元素，QuickUI 以該元素的內容作為模板；之後修改 `app.data.title` 會在約 300 ms 後重新渲染。

## 下一步

| 想做的事 | 頁面 |
|---|---|
| 了解模板語法 | [文字綁定](/zh/text-binding)、[條件渲染](/zh/conditional-rendering)、[迴圈渲染](/zh/loop-rendering) |
| 處理使用者輸入 | [事件綁定](/zh/event-binding)、[表單綁定](/zh/two-way-binding) |
| 查完整選項 | [建構子選項](/zh/constructor-options) |
