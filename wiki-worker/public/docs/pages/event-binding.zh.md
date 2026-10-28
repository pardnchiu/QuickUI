# 事件綁定

本頁說明以 `@事件` 把 DOM 事件接到 `event` 選項中的處理函式。

## 寫法

```demo
<div id="app">
  <button @click="save">Save</button>
  <input type="text" @input="typing" />
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { text: "" },
    event: {
      save: (e) => console.log("saved", app.data.text),
      typing: (e) => {
        app.data.text = e.target.value;
      },
    },
  });
</script>
```

| 前綴 | 例 | 說明 |
|---|---|---|
| `@` | `@click` | 標準寫法 |
| `qe-` | `qe-click` | 等價寫法 |

`@click="save"` 會被轉成 `element.onclick = app.event.save`，處理完成後移除 `@click` 屬性。

## 規則

| 規則 | 說明 |
|---|---|
| 事件名稱 | 必須是元素有對應 `on*` 屬性的原生事件（`click`、`input`、`change`、`submit`、`keyup` 等）；自訂事件不會觸發 |
| 處理函式參數 | 只收到 `Event`；以 `function` 宣告時 `this` 為該元素 |
| 每種事件一個處理函式 | 以屬性指派，同一元素同一事件只保留一個 |
| 名稱查找 | 屬性值先當資料路徑查找，取得的值作為函式名稱；找不到時直接以屬性值為名稱 |
| 名稱不存在 | 指派為 `undefined`，點擊沒有反應也不報錯 |
| `:@click` | 不支援，屬性會被移除且不綁定 |

## 在迴圈中取得項目

處理函式拿不到 `:for` 的項目，請把識別值寫進 `data-*` 屬性：

```demo
<ul id="app">
  <li :for="user in users">
    <button :data-id="user.id" @click="remove">Remove {{ user.id }}</button>
  </li>
</ul>

<script>
  const app = new QUI({
    id: "app",
    data: { users: [{ id: 1 }, { id: 2 }] },
    event: {
      remove: (e) => {
        const id = +e.target.dataset.id;
        app.data.users = app.data.users.filter((u) => u.id !== id);
      },
    },
  });
</script>
```

## 在 QuickUI 以外使用

`app.event` 保留原始的函式集合，可以指派給動態建立的元素：

```javascript
const button = document.createElement("button");
button.onclick = app.event.save;
app.body.append(button);
```
