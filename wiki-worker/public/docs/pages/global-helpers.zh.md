# 全域工具

本頁說明 QuickUI 載入後掛在全域的 `_` 與 `$` 兩個 DOM 工具函式。

## `$(selector)`

取得單一元素，回傳 `HTMLElement | null`。

```demo
<div id="app" class="card">
  <input name="email" />
  <button>Send</button>
</div>

<script>
  console.log($("#app").id);
  console.log($("app").id);
  console.log($(".card").className);
  console.log($("input[name=email]").name);
  console.log($("button").textContent);
</script>
```

| 輸入 | 查找方式 |
|---|---|
| 以 `#` 開頭 | `getElementById`（去掉 `#`） |
| 含 `.`、`[`、`]` | `querySelector` |
| 其他 | 先 `getElementById`，找不到再 `querySelector` |

只回傳第一個符合的元素；需要多個時使用 `document.querySelectorAll`。

## `_(selector, attributes?, children?)`

以 CSS 選擇器語法建立元素。

```demo
<script>
  const card = _("div#card.box.shadow", { title: "Card", color: "red" }, [
    _("h2", "Title"),
    "plain text",
  ]);
  const img = _("img", "/logo.png");
  const text = _("temp", "text only");
  document.body.append(card);
  console.log(card.outerHTML);
  console.log(img.outerHTML);
  console.log(text.textContent);
</script>
```

| 參數 | 說明 |
|---|---|
| `selector` | `tag#id.class`；必須以標籤開頭，否則回傳 `undefined`；`temp` 建立 `DocumentFragment` |
| `attributes` | 物件，見下表 |
| `children` | 字串、數字或陣列；只傳一個參數時，字串／數字／陣列視為 `children`，物件視為 `attributes` |

| `attributes` 的 key | 寫入方式 |
|---|---|
| `value`、`innerText`、`innerHTML`、`textContent`、`contentEditable` | 元素屬性（property） |
| `color`、`backgroundColor`、`width`、`height`、`display`、`float` | `style` |
| 其他 | `setAttribute`；值為 `null` 或 `undefined` 時略過 |

| `children` 型別 | 結果 |
|---|---|
| 字串或數字 | 寫入 `innerHTML`；`img`、`source` 改寫入 `src`；`temp` 建立文字節點 |
| 陣列 | 依序附加；字串與數字建立文字節點，`Element` 直接附加，其他略過 |

字串 `children` 以 `innerHTML` 寫入，不要放入未經處理的使用者輸入。
