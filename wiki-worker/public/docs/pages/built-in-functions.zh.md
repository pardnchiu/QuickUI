# 內建函式

本頁列出可在 `{{ }}` 中使用的五個函式與各自的限制。

## 函式一覽

| 函式 | 語法 | 結果 |
|---|---|---|
| `LENGTH()` | `{{ LENGTH(items) }}` | 陣列或字串的長度；物件回傳 key 數量 |
| `CALC()` | `{{ CALC(price * 1.05) }}` | 資料值與數字常數運算 |
| `UPPER()` | `{{ UPPER(name) }}` | 轉大寫 |
| `LOWER()` | `{{ LOWER(name) }}` | 轉小寫 |
| `DATE()` | `{{ DATE(timestamp, YYYY-MM-DD HH:mm) }}` | 格式化 UNIX 時間戳（秒） |

函式名稱必須大寫，且一次只能包一層，不能巢狀。

## `CALC()`

```demo
<div id="app">
  <p>{{ CALC(price * 1.05) }}</p>
  <p>{{ CALC(count + 1) }}</p>
</div>

<script>
  const app = new QUI({ id: "app", data: { price: 100, count: 1 } });
</script>
```

支援的運算子：`+`、`-`、`*`、`/`。

## `UPPER()` / `LOWER()`

值必須是字串；值為 `null` 或不存在時會丟出 `TypeError` 並中斷該次渲染。

## `DATE()`

```demo
<div id="app">
  <p>{{ DATE(now, YYYY-MM-DD HH:mm:ss) }}</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { now: Math.floor(Date.now() / 1000) },
  });
</script>
```

| 代碼 | 輸出 |
|---|---|
| `YYYY` / `YY` | 四位／兩位年份 |
| `MM` / `M` | 補零／不補零月份 |
| `DD` / `D` | 補零／不補零日期 |
| `HH` / `H` | 24 小時制 |
| `hh` / `h` | 12 小時制 |
| `mm` / `m`、`ss` / `s` | 分、秒 |
| `SSS` | 毫秒 |
| `A` / `a` | `AM`／`PM`、`am`／`pm` |
| `ddd` | 星期；瀏覽器語言含 `zh` 時為「星期一」，否則為英文縮寫（Mon） |

格式字串只接受英數、空白、`-`、`:`、`,`；含 `/` 或 `.` 時不會被辨識為 `DATE()`，`{{ }}` 原樣保留。
