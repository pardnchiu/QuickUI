# 響應式資料

本頁說明 `app.data` 如何偵測變更、何時觸發重新渲染，以及哪些寫法不會觸發。

## 運作方式

`data` 選項會被 `createReactiveObject` 以 `Proxy` 遞迴包裝：讀取巢狀物件時回傳新的 Proxy，寫入時若新值與舊值不同（`!==`）就通知生命週期排程更新。

```demo
<div id="app">
  <p>{{ count }} · {{ user.name }} · {{ LENGTH(items) }}</p>
  <button @click="update">Update</button>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { count: 0, user: { name: "Pardn" }, items: [] },
    event: {
      update: () => {
        app.data.count++;
        app.data.user.name = "Chiu";
        app.data.items.push("A");
      },
    },
    when: {
      updated: () => console.log("updated", app.data.count),
    },
  });
</script>
```

三行寫入都會觸發更新；300 ms 內的多次寫入合併為一次渲染。

## 觸發條件

| 寫法 | 是否觸發 |
|---|---|
| `app.data.key = value`（值改變） | 是 |
| 巢狀屬性、陣列索引、`push` / `splice` | 是 |
| 寫入相同的值 | 否 |
| `delete app.data.key` | 否，Proxy 沒有攔截刪除 |
| `app.data = { ... }` 整個取代 | 否，取代後的物件不是 Proxy |
| `once: true` | 否，資料不包 Proxy，只渲染一次 |

## 存取時機

`app.data` 在 i18n 載入完成後才指派，即使沒有設定 `i18n` 也會延後到下一個 microtask。在 `new QUI()` 之後同步寫入的值會寫到暫存物件而遺失；請在 [`rendered` 鉤子](/zh/lifecycle) 或事件處理函式中讀寫。

## 模板取值規則

| 規則 | 說明 |
|---|---|
| 路徑 | 以 `.` 存取巢狀值，例如 `{{ user.name }}` |
| 作用域 | 先找目前 `:for` 項目的資料，找不到再找根資料 |
| 找不到值 | `{{ }}` 原樣保留在畫面上 |
| 可用型別 | 字串、數字、布林、陣列、純物件；函式與 `Date` 會在快照時遺失 |
