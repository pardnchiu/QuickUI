# 淘汰計畫

本頁列出目前仍可使用、但預計在 1.0.0 移除的寫法與對應的替代寫法。

1.0.0 起只維護 camelCase 命名與 `when` 物件，以統一寫法並縮小程式體積。目前尚無已移除的公開 API。

## 生命週期

| 預計移除 | 改用 |
|---|---|
| `lifecycle: { ... }` 物件 | `when: { ... }` |
| 直接寫在選項頂層的鉤子（如 `new QUI({ rendered() {} })`） | 放進 `when` |
| `before_render` | `beforeRender` |
| `before_update` | `beforeUpdate` |
| `before_destroy` | `beforeDestroy` |

```javascript
new QUI({
  id: "app",
  when: {
    beforeRender: () => {},
  },
});
```

## 樣式綁定

| 預計移除 | 改用 |
|---|---|
| `:bg-color`、`:bg-image`、`:bg-size` 等 `:bg-*` | `:background-color`、`:background-image`、`:background-size` |
| `:borderRadius`、`:backgroundColor` 等 camelCase 名稱 | `:border-radius`、`:background-color` |
| `:box-sahdow`（拼字錯誤的舊名） | `:box-shadow` |

kebab-case 的標準 CSS 屬性名稱不受影響，見 [樣式綁定](/zh/style-binding)。

## 渲染效果

| 預計移除 | 改用 |
|---|---|
| 根元素的 `animation="fade-in"`、`animation="expand"` | `effect="fade-in"`、`effect="expand"` |

見 [渲染效果](/zh/effects)。
