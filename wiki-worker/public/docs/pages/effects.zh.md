# 渲染效果

本頁說明根元素上的 `effect` 與 `mask` 屬性如何在初次渲染時提供淡入、展開與骨架載入效果。

## 寫法

```demo
<div id="app" effect="fade-in">
  <p>{{ message }}</p>
</div>

<script>
  const app = new QUI({ id: "app", data: { message: "Hello QuickUI" } });
</script>
```

QuickUI 載入時會在 `<head>` 注入對應的 CSS；渲染套用後，根元素加上 `show` class 觸發轉場，300 ms 後移除效果屬性與 `show`、`fade-in`、`expand`、`loading-block` class。

## 可用效果

| 屬性 | 效果 |
|---|---|
| `effect="fade-in"` | 透明度 0 → 1，0.3 秒 |
| `effect="expand"` | 高度由 0 展開到內容高度（以 `scrollHeight` 設定 `min-height`），0.3 秒 |
| `mask="1"` | 在內容上覆蓋灰色漸層骨架動畫，渲染完成後淡出 |

`effect` 也可寫成 `:effect`；`animation="fade-in"` 等舊寫法預計在 1.0.0 移除，見 [淘汰計畫](/zh/deprecations)。

## 規則

| 規則 | 說明 |
|---|---|
| 作用對象 | 只處理根元素（`id` 指向的元素） |
| 觸發次數 | 屬性在第一次渲染後被移除，之後的更新不會再播放 |
| `mask="true"` | 注入的 CSS 讓它的覆蓋層一開始就透明，看不到效果；請用 `mask="1"` |
| 圖片載入圖示 | `<img>` 上的 `:effect="circle"` 屬於 [圖片延遲載入](/zh/lazyload) |
