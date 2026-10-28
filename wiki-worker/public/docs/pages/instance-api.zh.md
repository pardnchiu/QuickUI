# 實例 API

本頁列出 `new QUI()` 回傳的實例上可用的方法與屬性。

## 方法

| 方法 | 簽名 | 說明 |
|---|---|---|
| `lang` | `lang(code: string): void` | 切換語系並觸發重新渲染；`code` 不在 `i18n` 中時忽略 |
| `fragment` | `fragment(): Promise<DocumentFragment>` | 重新渲染一次，回傳根元素子節點的複本 |

### `fragment()`

```demo
<script>
  const card = new QUI({
    render: () => `div.card[ h2[ "{{title}}" ] ]`,
    data: { title: "QuickUI" },
    when: {
      rendered: async () => {
        document.body.append(await card.fragment());
      },
    },
  });
</script>
```

| 規則 | 說明 |
|---|---|
| 渲染 | 會執行一次完整的模板處理，但不呼叫 `beforeUpdate` / `updated` |
| 文字節點 | 前後空白會被去除 |
| 回傳內容 | 是複本；修改它不影響實例，也不會再收到更新 |
| 呼叫時機 | 在 `rendered` 之後呼叫，確保資料已就緒 |

## 屬性

| 屬性 | 型別 | 說明 |
|---|---|---|
| `data` | `Proxy` | 響應式資料，見 [響應式資料](/zh/reactive-data) |
| `event` | `Record<string, Function>` | `event` 選項的原始物件 |
| `body` | `Element` | 掛載的根元素；無 `id` 時為 `QUIFragment` section |
| `isScheduled` | `boolean` | Patch 已排入 `requestAnimationFrame`、尚未套用時為 `true` |
| `lazyloadObserver` | `IntersectionObserver` | 共用的圖片延遲載入觀察器；停用 lazyload 時為 `undefined` |

`data`、`event`、`body` 在 i18n 載入完成後才指派。
