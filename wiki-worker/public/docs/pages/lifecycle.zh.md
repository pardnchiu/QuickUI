# 生命週期鉤子

本頁說明 `when` 選項中各鉤子的觸發時機、參數，以及如何中止渲染。

## 寫法

```demo
<div id="app">
  <p>{{ count }}</p>
  <button @click="add">+1</button>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { count: 0 },
    event: {
      add: () => app.data.count++,
    },
    when: {
      beforeRender: () => {},
      rendered: (sec) => console.log("rendered in", sec),
      beforeUpdate: () => app.data.count < 10,
      updated: (sec) => console.log("updated in", sec),
    },
  });
</script>
```

## 鉤子一覽

| 鉤子 | 觸發時機 | 參數 | 回傳 `false` |
|---|---|---|---|
| `beforeRender` | 初始渲染前 | 無 | 取消初始渲染，畫面維持原始模板 |
| `rendered` | 初始渲染套用到 DOM 後 | 耗時秒數 | 無作用 |
| `beforeUpdate` | 資料變更、去抖動 300 ms 後 | 無 | 取消這一次更新 |
| `updated` | 更新套用到 DOM 後 | 耗時秒數 | 無作用 |
| `beforeDestroy` | 目前版本不會觸發 | 無 | 無 |
| `destroyed` | 目前版本不會觸發 | 無 | 無 |

`beforeDestroy` 與 `destroyed` 會被接受，但 `QUI` 沒有公開的銷毀方法，因此不會被呼叫。

## 規則

| 規則 | 說明 |
|---|---|
| 取消判斷 | 只有同步回傳 `false` 才會取消；`async` 函式回傳 Promise，無法取消 |
| 更新去抖動 | 300 ms 內的多次資料寫入只觸發一次 `beforeUpdate` / `updated` |
| 讀寫資料 | `rendered` 之後 `app.data` 已就緒，見 [響應式資料](/zh/reactive-data) |

## 舊寫法

把鉤子放在 `lifecycle` 物件、直接放在選項頂層，或使用 `before_render`、`before_update`、`before_destroy` 等 snake_case 名稱仍可運作，但預計在 1.0.0 移除，見 [淘汰計畫](/zh/deprecations)。
