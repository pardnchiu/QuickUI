# 樣式綁定

本頁說明如何以 `:[CSS 屬性]` 把資料直接綁到行內樣式。

## 寫法

```demo
<div id="app">
  <button :width="width" :background-color="color">Save</button>
</div>

<script>
  const app = new QUI({ id: "app", data: { width: "120px", color: "#3498db" } });
</script>
```

結果：

```html
<button style="width: 120px; background-color: #3498db;">Save</button>
```

| 規則 | 說明 |
|---|---|
| 名稱 | 使用 kebab-case 的 CSS 屬性名，轉成 camelCase 後須存在於 `element.style` |
| 值 | 資料值或屬性值本身，需自帶單位，例如 `"120px"` |
| 前綴 | 只認 `:`；`q-width` 不會進 `style`，而是設定 `width` 屬性 |
| `:animation` | 值為 `fade-in` 或 `expand` 時不寫入 `style`，而是視為 [渲染效果](/zh/effects) |

## 舊式名稱

下列寫法仍可使用，但預計在 1.0.0 移除，詳見 [淘汰計畫](/zh/deprecations)。

| 舊寫法 | 改用 |
|---|---|
| `:bg-color`、`:bg-image` 等 `:bg-*` | `:background-color`、`:background-image` |
| `:borderRadius`、`:backgroundColor` 等 camelCase | `:border-radius`、`:background-color` |
