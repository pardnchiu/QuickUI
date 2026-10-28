# 迴圈渲染

本頁說明 `:for` 如何展開陣列與物件，以及迴圈內可以存取哪些變數。

## 陣列

```demo
<ul id="app">
  <li :for="item in items">{{ item }}</li>
  <li :for="(item, index) in items">{{ index }}. {{ item }}</li>
</ul>

<script>
  const app = new QUI({ id: "app", data: { items: ["A", "B", "C"] } });
</script>
```

| 寫法 | 變數 |
|---|---|
| `item in list` | `item` 為項目 |
| `(item, index) in list` | 另有從 `0` 開始的 `index` |

## 物件

```demo
<ul id="app">
  <li :for="(key, value) in user">{{ key }}: {{ value }}</li>
</ul>

<script>
  const app = new QUI({ id: "app", data: { user: { name: "Pardn", role: "Developer" } } });
</script>
```

第一個變數是 key、第二個是 value；只寫一個變數時只取得 key。

## 作用域

| 可存取 | 說明 |
|---|---|
| 迴圈變數 | `item`、`index`（或 `key`、`value`） |
| 來源集合 | 從根資料以同名取得，例如 `items` |
| 根資料 | 迴圈作用域找不到時回到 `app.data` 查找 |
| 外層迴圈變數 | 不可存取；巢狀迴圈的內層只看得到自己的變數與根資料 |

```demo
<div id="app">
  <div :for="group in groups">
    <h3>{{ group.name }}</h3>
    <p :for="member in group.members">{{ member }}</p>
  </div>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: {
      groups: [
        { name: "Frontend", members: ["Pardn", "Chiu"] },
        { name: "Backend", members: ["Ching-Wei"] },
      ],
    },
  });
</script>
```

內層的來源路徑 `group.members` 可以使用外層變數，但內層元素中的 `{{ group.name }}` 不會被替換。
