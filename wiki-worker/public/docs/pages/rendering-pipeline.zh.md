# 渲染流程

本頁說明一次渲染從模板到實體 DOM 經過的步驟，以及 Patch 的套用順序。

## 初始化

| 步驟 | 行為 |
|---|---|
| 1 | 依 `id` 取得元素；沒有 `id` 但有 `render` 時，建立一個不在文件中的 `<section class="QUIFragment">` |
| 2 | 複製元素作為原始模板，並以未處理的模板建立第一份 vDOM 作為比對基準 |
| 3 | 有 `render` 時，以其輸出取代模板內容 |
| 4 | 載入 `i18n`（字串值會 `fetch`），完成後才設定 `app.data`、`app.event`、`app.body` |
| 5 | 依 `option` 啟用 SVG 與 lazyload 監聽器，建立 `Lifecycle` 並執行初始渲染 |

找不到元素或兩者皆未提供時，主控台輸出錯誤，實例不渲染任何內容。

## 每次渲染

| 階段 | 行為 |
|---|---|
| 重建 vDOM | 從原始模板複本建立新 vDOM，資料取 `JSON.parse(JSON.stringify(app.data))` 快照 |
| 展開指令 | 依序處理 `:for` → `:if` → `<temp :path>`，再對 `:path` 插入的內容重跑 `:for` 與 `:if` |
| 替換文字 | 先替換 `{{ i18n.* }}`，再替換其餘 `{{ }}` |
| 比對 | 以子節點索引逐一比對新舊 vDOM，產生 Patch |
| 套用 | 在 `requestAnimationFrame` 內套用 Patch，接著移除殘留的 `:if` 屬性並處理 [渲染效果](/zh/effects) |

## Patch 類型

| 類型 | 觸發條件 | 動作 |
|---|---|---|
| `REMOVE` | 新樹缺少該位置的節點 | 由最深、最後的位置開始移除，避免索引位移 |
| `CREATE` | 舊樹缺少節點 | 建立元素並附加到父節點 |
| `APPEND` | 子節點數量增加 | 插入到對應索引位置 |
| `REPLACE` | 同位置標籤名稱不同 | 以新元素取代 |
| `PROP` | 每個新節點的每個屬性 | 依屬性前綴分派到 [屬性](/zh/attribute-binding)、[事件](/zh/event-binding)、[表單](/zh/two-way-binding) 處理 |
| `TEXT` | 同位置文字不同 | 覆寫文字內容 |

`REMOVE` 一律先於其他 Patch 執行。

## 邊界行為

| 情況 | 結果 |
|---|---|
| 清單在前端插入項目 | 比對沒有 key，以索引對齊，插入點之後的每個項目都會收到 Patch |
| 模板內的 `<script>` | 建立 vDOM 時被移到 `<head>`；`src` 或內容與既有 `<script>` 相同時不重複加入 |
| 快照無法序列化的值 | 函式、`Date`、`Map` 等在模板中取不到原值；需先轉成字串或數字 |
