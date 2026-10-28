# 區塊插入

本頁說明如何以 `<temp :path>` 載入外部 HTML 檔並插入模板。

## 寫法

```demo
<div id="app">
  <temp :path="/components/header.html"></temp>
  <temp :path="footerUrl"></temp>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { title: "QuickUI", footerUrl: "/components/footer.html" },
  });
</script>
```

`header.html` 的內容會取代 `<temp>` 元素本身；插入的內容一樣可以使用 `{{ }}`、`:for`、`:if` 與其他指令。

## 規則

| 規則 | 說明 |
|---|---|
| 標籤 | 只有 `<temp>` 上的 `:path` 有效 |
| 路徑 | 先當資料鍵查找，找不到時直接當 URL |
| 載入時機 | 每次渲染都會重新 `fetch`；快取交給瀏覽器 HTTP 快取 |
| 處理順序 | 在 `:for`、`:if` 之後載入，載入後對插入內容再跑一次 `:for` 與 `:if` |
| 執行環境 | 必須透過 HTTP 伺服器；`file://` 下 `fetch` 會失敗 |

## 錯誤情況

| 情況 | 結果 |
|---|---|
| 回應為 404 等錯誤狀態 | 不檢查狀態碼，錯誤頁的內容會被插入 |
| 網路錯誤或 CORS 拒絕 | `fetch` 拋出例外，該次渲染中止，畫面停在上一次的結果 |

部署時請確認每個 `:path` 都指向存在的檔案。
