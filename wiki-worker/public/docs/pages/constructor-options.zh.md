# 建構子選項

本頁列出 `new QUI(options)` 接受的每個選項、型別、預設值與選項之間的交互作用。

## 型別

```typescript
new QUI(options: {
  id?: string;
  render?: () => string;
  data?: Record<string, any>;
  event?: Record<string, Function>;
  i18n?: Record<string, string | object>;
  i18nLang?: string;
  once?: boolean;
  option?: { svg?: boolean; lazyload?: boolean };
  when?: {
    beforeRender?: () => boolean | void;
    rendered?: (sec: number) => void;
    beforeUpdate?: () => boolean | void;
    updated?: (sec: number) => void;
    beforeDestroy?: () => boolean | void;
    destroyed?: (sec: number) => void;
  };
})
```

## 選項

| 選項 | 型別 | 預設 | 說明 |
|---|---|---|---|
| `id` | `string` | 無 | 作為模板與掛載點的元素 ID |
| `render` | `() => string` | 無 | 回傳 [render 簡寫語法](/zh/render-shorthand) 字串 |
| `data` | `object` | `{}` | 響應式資料，見 [響應式資料](/zh/reactive-data) |
| `event` | `object` | `{}` | 事件處理函式，見 [事件綁定](/zh/event-binding) |
| `i18n` | `object` | 無 | 語系物件或 JSON URL，見 [i18n](/zh/i18n) |
| `i18nLang` | `string` | `"zh"` | 初始語系 |
| `once` | `boolean` | `false` | `true` 時資料不包 Proxy，只渲染一次 |
| `option.svg` | `boolean` | `true` | 啟用 [SVG 內嵌](/zh/svg-inline) |
| `option.lazyload` | `boolean` | `true` | 啟用 [圖片延遲載入](/zh/lazyload) |
| `when` | `object` | 無 | [生命週期鉤子](/zh/lifecycle) |

## `id` 與 `render` 的組合

| `id` | `render` | 結果 |
|---|---|---|
| 有 | 無 | 以元素內容為模板，直接更新該元素 |
| 有 | 有 | 以 `render()` 的輸出取代元素內容作為模板 |
| 無 | 有 | 建立不在文件中的 `<section class="QUIFragment">`；以 [`fragment()`](/zh/instance-api) 取得結果 |
| 無 | 無 | 主控台輸出錯誤，實例不渲染 |
| 指向不存在的元素 | 任意 | 主控台輸出錯誤，實例不渲染 |

## 交互作用

| 組合 | 結果 |
|---|---|
| `once: true` + `app.lang()` | 語系值會更新，但不重新渲染 |
| `option.lazyload: false` + 模板中的 `:lazyload` | 拋出錯誤 |
| `option.svg: false` + 模板中的 `<temp-svg :src>` | 拋出錯誤 |
| `when` 未提供 | 依序改從 `lifecycle` 物件、選項頂層讀取鉤子（舊寫法，見 [淘汰計畫](/zh/deprecations)） |
