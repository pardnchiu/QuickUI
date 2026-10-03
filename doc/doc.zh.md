# QuickUI - 技術文件

> 返回 [README](./README.zh.md)

## 前置需求

- 支援 ES2022、`Proxy`、`IntersectionObserver`、`structuredClone` 的現代瀏覽器
- Node.js 與 npm（僅從原始碼建置時需要）

## 安裝

### 透過 npm

```bash
npm i @pardnchiu/quickui
```

### 透過 CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@latest/dist/QuickUI.js"></script>
```

載入後會在 `window` 上掛載 `QUI`、`$`、`_` 三個全域符號。

### ESM

```javascript
import { QUI } from "@pardnchiu/quickui";
```

`package.json` 的 `module` 指向 `dist/QuickUI.esm.js`，該檔案以 `export const QUI = window.QUI` 匯出。

### 從原始碼建置

```bash
git clone https://github.com/pardnchiu/QuickUI.git
cd QuickUI
npm install
npm run build:once
```

`build:once` 先以 `tsc` 將 `src/` 打包為 `src/QuickUI.debug.js`，再以 terser 輸出 `dist/QuickUI.js` 與 `dist/QuickUI.esm.js`。

## 使用方式

### 基礎：資料插值

```html
<div id="app">
  <h1>{{ title }}</h1>
  <p>{{ user.name }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/quickui@latest/dist/QuickUI.js"></script>
<script>
  const app = new QUI({
    id: "app",
    data: {
      title: "Hello QuickUI",
      user: { name: "Pardn" },
    },
  });

  setTimeout(() => {
    app.data.title = "Updated";
  }, 1000);
</script>
```

`app.data` 為深層 Proxy，任何層級的賦值都會觸發更新。

### 條件渲染

```html
<div id="app">
  <p :if="status == active">Active</p>
  <p :else-if="status == pending">Pending</p>
  <p :else>Disabled</p>
  <p :if="count > 0">共 {{ count }} 筆</p>
  <p :if="name == empty">名稱未填</p>
</div>

<script>
  new QUI({
    id: "app",
    data: { status: "active", count: 3, name: "" },
  });
</script>
```

### 迴圈渲染

```html
<div id="app">
  <ul>
    <li :for="item in items">{{ item }}</li>
  </ul>
  <ul>
    <li :for="(item, index) in items">{{ index }}: {{ item }}</li>
  </ul>
  <ul>
    <li :for="(key, value) in profile">{{ key }} = {{ value }}</li>
  </ul>
  <p>總數：{{ LENGTH(items) }}</p>
</div>

<script>
  new QUI({
    id: "app",
    data: {
      items: ["A", "B", "C"],
      profile: { name: "Pardn", role: "Developer" },
    },
  });
</script>
```

陣列使用 `(值, 索引)`，物件使用 `(鍵, 值)`。

### 事件與雙向綁定

```html
<div id="app">
  <input type="text" :model="keyword" />
  <select :model="sort">
    <option value="asc">asc</option>
    <option value="desc">desc</option>
  </select>
  <button @click="search">搜尋</button>
  <p>{{ keyword }} / {{ sort }}</p>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { keyword: "", sort: "asc" },
    event: {
      search: (e) => {
        if (app.data.keyword.trim() === "") {
          console.warn("keyword is empty");
          return;
        }
        console.log("search", app.data.keyword, app.data.sort);
      },
    },
  });
</script>
```

`checkbox`／`radio` 以相同 `name` 分組，勾選值以 `,` 串接後寫回資料。

### 屬性與樣式綁定

```html
<div id="app">
  <a :href="link" :title="tip">{{ UPPER(label) }}</a>
  <div :background-color="color" :hide="hidden">box</div>
  <div :html="snippet"></div>
  <p>{{ CALC(price * 1.05) }}</p>
  <p>{{ DATE(createdAt, YYYY-MM-DD HH:mm) }}</p>
</div>

<script>
  new QUI({
    id: "app",
    data: {
      link: "https://github.com/pardnchiu/QuickUI",
      tip: "repo",
      label: "quickui",
      color: "#3498db",
      hidden: false,
      snippet: "<strong>raw html</strong>",
      price: 100,
      createdAt: 1735660800,
    },
  });
</script>
```

### i18n

```html
<div id="app">
  <h1>{{ i18n.title }}</h1>
  <input :placeholder="i18n.hint" />
  <button @click="toEn">English</button>
</div>

<script>
  const app = new QUI({
    id: "app",
    i18n: {
      zh: { title: "歡迎", hint: "請輸入" },
      en: "/locales/en.json",
    },
    i18nLang: "zh",
    event: {
      toEn: () => app.lang("en"),
    },
  });
</script>
```

字串值會以 `fetch` 讀取 JSON；讀取失敗時該語系為空物件，文字回退顯示原始鍵值。`lang()` 傳入未定義的語系時不做任何事。

### 外部 HTML 區塊、懶載入與 SVG 內嵌

```html
<div id="app">
  <temp :path="headerPath"></temp>
  <img :lazyload="cover" :effect="circle" />
  <temp-svg :src="icon" class="icon"></temp-svg>
</div>

<script>
  new QUI({
    id: "app",
    data: {
      headerPath: "/components/header.html",
      cover: "/images/cover.jpg",
      icon: "/images/icon.svg",
    },
    option: { lazyload: true, svg: true },
  });
</script>
```

圖片載入失敗時會改用預設 404 圖；SVG 讀取失敗時節點內容改為 `☒`。

### 生命週期

```html
<script>
  const app = new QUI({
    id: "app",
    data: { ready: false },
    when: {
      beforeRender: () => {
        if (!navigator.onLine) {
          console.error("offline, skip render");
          return false;
        }
      },
      rendered: (sec) => console.log("rendered in", sec, "s"),
      beforeUpdate: () => console.log("before update"),
      updated: (sec) => console.log("updated in", sec, "s"),
    },
  });
</script>
```

`before*` 鉤子回傳 `false` 會中止該次渲染／更新；`rendered`／`updated` 收到本次耗時（秒）。

### 以 render 函式產生 DocumentFragment

```javascript
import { QUI } from "@pardnchiu/quickui";

const card = new QUI({
  render: () => `div.card[ h2[ "{{title}}" ] ]`,
  data: { title: "Card" },
  once: true,
  when: {
    rendered: () => {
      card
        .fragment()
        .then((fragment) => document.body.appendChild(fragment))
        .catch((err) => console.error("render failed", err));
    },
  },
});
```

未提供 `id` 時，`render` 的結果會掛在一個不在文件中的 `<section class="QUIFragment">`，以 `fragment()` 取出後自行插入。`body` 於資料初始化（含 i18n 讀取）完成後才設定，因此 `fragment()` 須在 `rendered` 之後呼叫。簡寫語法會移除雙引號內所有空白（需要空格時寫 `&#32;`），且無法表達 `:for`、`:if`、`:model`、`<temp :path>`；屬性與事件綁定改用 `q-`／`qe-` 前綴。

### 全域工具 `$` 與 `_`

```javascript
const root = $("#app");
if (root == null) {
  throw new Error("#app not found");
}

const list = _("ul.list", [
  _("li.item", "first"),
  _("li.item", { "data-id": "2", color: "red" }, "second"),
]);

root.appendChild(list);
```

## API 參考

### `new QUI(options)`

| 參數 | 型別 | 必要 | 說明 |
|------|------|------|------|
| `id` | `string` | 條件性 | 綁定的元素 ID；未提供時須提供 `render` |
| `render` | `() => string` | 條件性 | 回傳簡寫字串（`tag#id.class(attr: "value")[ children ]`）；與 `id` 併用時取代該元素的子節點作為模板 |
| `data` | `Record<string, any>` | 否 | 響應式資料 |
| `event` | `Record<string, Function>` | 否 | 事件處理函式，供 `@event` 以名稱引用 |
| `i18n` | `Record<string, object \| string>` | 否 | 語系定義；字串視為 JSON 檔網址 |
| `i18nLang` | `string` | 否 | 初始語系，預設 `"zh"` |
| `once` | `boolean` | 否 | `true` 時資料不包 Proxy，僅渲染一次 |
| `option.svg` | `boolean` | 否 | 啟用 `temp-svg` 內嵌，預設 `true` |
| `option.lazyload` | `boolean` | 否 | 啟用圖片懶載入，預設 `true` |
| `when` | `object` | 否 | 生命週期鉤子 |

### 實例成員

| 成員 | 簽章 | 說明 |
|------|------|------|
| `data` | `Record<string, any>` | 響應式資料（`once: true` 時為一般物件） |
| `event` | `Record<string, Function>` | 事件處理函式表 |
| `body` | `Element` | 綁定的根元素 |
| `lang` | `lang(lang: string): void` | 切換語系，語系不存在時忽略 |
| `fragment` | `fragment(): Promise<DocumentFragment>` | 重新渲染後回傳根元素子節點的複本 |

### 生命週期鉤子（`when`）

| 鉤子 | 參數 | 說明 |
|------|------|------|
| `beforeRender` | 無 | 初次渲染前；回傳 `false` 中止 |
| `rendered` | `sec: number` | 初次渲染完成 |
| `beforeUpdate` | 無 | 資料變動觸發更新前；回傳 `false` 中止 |
| `updated` | `sec: number` | 更新完成 |
| `beforeDestroy` / `destroyed` | 無 / `sec: number` | 可設定，但目前 `QUI` 未公開觸發銷毀的方法 |

### 模板語法

| 語法 | 說明 | 範例 |
|------|------|------|
| `{{ key }}` | 文字插值，支援巢狀路徑 | `{{ user.name }}` |
| `{{ i18n.key }}` | 目前語系的翻譯 | `{{ i18n.title }}` |
| `:for` | 迴圈 | `item in items`、`(item, index) in items`、`(key, value) in obj` |
| `:if` / `:else-if` / `:elif` / `:else` | 條件分支（須為相鄰兄弟節點） | `:if="count > 0"` |
| `:model` | 雙向綁定（`input`／`select`／`textarea`） | `:model="keyword"` |
| `@event` / `qe-event` | 事件綁定，值為 `event` 內的函式名 | `@click="search"` |
| `:html` | 設定 `innerHTML` | `:html="snippet"` |
| `:id` / `:src` / `:alt` / `:href` | 設定對應 DOM property | `:href="link"` |
| `:hide` | 值為真時 `display: none` | `:hide="hidden"` |
| `:<css-property>` | 屬性名屬於 `style` 時寫入行內樣式 | `:background-color="color"` |
| `:<attr>` / `q-<attr>` | 其餘屬性以 `setAttribute` 寫入 | `:title="tip"`、`q-title="tip"` |
| `:lazyload` | 圖片懶載入；`:effect="circle"` 改用旋轉載入圖示 | `:lazyload="cover"` |
| `<temp :path>` | 讀取外部 HTML 並取代該節點 | `<temp :path="headerPath">` |
| `<temp-svg :src>` | 進入視窗時內嵌 SVG，保留 `id`、`class`、`onclick` | `<temp-svg :src="icon">` |

### 條件運算子

| 運算子 | 說明 |
|--------|------|
| （無） | 以布林值判斷 |
| `==` / `===` | 字串相等 |
| `!=` / `!==` | 字串不等 |
| `>` / `<` / `>=` / `<=` | 轉為數值比較 |

右值為 `null`、`true`、`false`、`empty` 時視為特殊值：分別判斷 `null`、真值、假值、空字串。

### 內建函式

| 函式 | 範例 | 說明 |
|------|------|------|
| `LENGTH()` | `{{ LENGTH(items) }}` | 陣列／字串長度或物件鍵數 |
| `CALC()` | `{{ CALC(price * 1.05) }}` | `變數 運算子 數字`，支援 `+ - * / %` |
| `UPPER()` | `{{ UPPER(name) }}` | 轉大寫 |
| `LOWER()` | `{{ LOWER(name) }}` | 轉小寫 |
| `DATE()` | `{{ DATE(ts, YYYY-MM-DD HH:mm) }}` | 格式化 UNIX 秒數時間戳 |

`DATE` 格式字元僅接受英數、`-`、`:`、`,` 與空白；可用代碼：`YYYY`、`YY`、`MM`、`M`、`DD`、`D`、`HH`、`H`、`hh`、`h`、`mm`、`m`、`ss`、`s`、`SSS`、`a`、`A`、`ddd`。

### 全域工具

| 函式 | 簽章 | 說明 |
|------|------|------|
| `$` | `$(text: string): HTMLElement \| null` | `#` 開頭走 `getElementById`；含 `.`、`[`、`]` 走 `querySelector`；其餘先 ID 再選擇器 |
| `_` | `_(tag: string, attrs?: object, children?: string \| number \| Array)` | 建立元素；`tag` 支援 `div#id.class` 寫法，`temp` 產生 `DocumentFragment` |

`_` 的 `attrs` 中 `value`、`innerText`、`innerHTML`、`textContent`、`contentEditable` 寫入 property；`color`、`backgroundColor`、`width`、`height`、`display`、`float` 寫入 `style`；其餘以 `setAttribute` 寫入。`children` 為字串／數字時設為 `innerHTML`（`img`／`source` 則設為 `src`），為陣列時依序附加字串與 `Element`。只傳兩個參數時，字串／數字／陣列視為 `children`，其餘視為 `attrs`。

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
