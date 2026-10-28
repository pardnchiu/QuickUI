# 條件渲染

本頁說明 `:if`、`:else-if`、`:else` 的寫法、可用的比較運算子與判斷規則。

## 基本用法

```demo
<div id="app">
  <p :if="status == active">Active</p>
  <p :else-if="status == pending">Pending</p>
  <p :else>Disabled</p>
</div>

<script>
  const app = new QUI({ id: "app", data: { status: "active" } });
</script>
```

| 指令 | 說明 |
|---|---|
| `:if` | 開始一組條件 |
| `:else-if` / `:elif` | 必須緊接在同層前一個條件元素之後 |
| `:else` | 前面條件都不成立時顯示 |

同一組中只保留第一個成立的元素；都不成立且沒有 `:else` 時，整組移除。單獨出現、前面沒有 `:if` 的 `:else-if` 或 `:else` 會被當成一般元素永遠顯示。

## 比較運算子

| 運算子 | 比較方式 | 例 |
|---|---|---|
| 無 | 值的布林值 | `:if="isLogin"` |
| `==` / `===` | 轉成字串後相等 | `:if="status == active"` |
| `!=` / `!==` | 轉成字串後不相等 | `:if="status != disabled"` |
| `>` / `<` | 轉成數字比較 | `:if="count > 0"` |
| `>=` / `<=` | 轉成數字比較 | `:if="count <= 100"` |

## 特殊比較值

| 值 | `==` 時成立條件 | `!=` 時成立條件 |
|---|---|---|
| `null` | 值為 `null` 或不存在 | 值存在 |
| `true` | 值為 truthy | 值為 falsy |
| `false` | 值為 falsy | 值為 truthy |
| `empty` | 值為空字串或不存在 | 值非空 |

## 判斷規則

| 規則 | 說明 |
|---|---|
| 右側 | 一律當成常數，不會去讀資料；`count > max` 是和 `"max"` 比，轉成數字為 `0` |
| 否定 | 不支援 `!flag`，請寫 `flag == false` |
| 複合條件 | 不支援 `&&`、`||`；改用巢狀元素或在資料中先算好布林值 |
| 與 `:for` 並用 | `:for` 先展開，每個項目各自判斷 `:if`，可直接使用項目變數 |

```demo
<ul id="app">
  <li :for="user in users" :if="user.active == true">{{ user.name }}</li>
</ul>

<script>
  const app = new QUI({
    id: "app",
    data: {
      users: [
        { name: "Pardn", active: true },
        { name: "Chiu", active: false },
      ],
    },
  });
</script>
```
