# 圖片延遲載入

本頁說明 `:lazyload` 如何在圖片進入視窗時才載入，以及失敗時的替代圖。

## 寫法

```demo
<div id="app">
  <img :lazyload="photo" width="240" />
  <img :lazyload="photo" :effect="circle" width="240" />
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { photo: "/static/image/cover.png" },
  });
</script>
```

| 階段 | 行為 |
|---|---|
| 初始渲染 | `src` 先設為透明佔位圖；加 `:effect="circle"` 時改為旋轉的載入圖示 |
| 進入視窗 | `IntersectionObserver` 觸發，先送 `HEAD` 再 `GET`，以 blob URL 設定 `src` |
| 完成後 | 移除 `lazyload` 與 `effect` 屬性 |
| 之後的渲染 | 已載入的圖片直接設定 `src`，不再重新觀察 |

未經 QuickUI 渲染、但已在頁面上帶有 `lazyload="url"` 屬性的 `<img>`，也會在監聽器建立時一併觀察。

## 失敗處理

| 情況 | `src` |
|---|---|
| 錯誤訊息為 `Load failed` 的 `TypeError`（Safari 的 CORS 失敗）或圖片 `Event` | 直接使用原始網址 |
| 其他錯誤（含 404，以及 Chrome 等錯誤訊息不同的 CORS 失敗） | `https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg` |

跨網域圖片請確認伺服器回傳 CORS 標頭，否則在 Chrome 中會顯示 404 替代圖。

## 停用

```javascript
new QUI({ id: "app", option: { lazyload: false } });
```

停用後監聽器不會建立；此時模板中仍使用 `:lazyload` 會因觀察器不存在而拋出錯誤，請改用 `:src`。
