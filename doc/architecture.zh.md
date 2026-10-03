# QuickUI - 架構

> 返回 [README](./README.zh.md)

## 概覽

```mermaid
graph TB
    subgraph 輸入
        A[id 指定的 DOM 元素]
        B[render 函式簡寫字串]
    end
    B --> P[htmlParser]
    A --> M[vDOM 模板模型]
    P --> M
    I[i18n 語系載入] --> D[Proxy 響應式資料]
    D -->|變動| L[生命週期 update 300ms 防抖]
    M --> V[vDOM 展開 for / if / path / 插值]
    L --> V
    V --> F[Diff 產生 Patch]
    F -->|requestAnimationFrame| R[套用 Patch 至真實 DOM]
    R --> E[事件 / model / 屬性綁定]
    R --> O[懶載入 / SVG 監聽器]
```

## Module: 模板解析（htmlParser）

將 `render` 回傳的簡寫字串（`tag#id.class(attr)[children]`）解析為元素樹，供 vDOM 建立模板模型。

```mermaid
graph LR
    subgraph htmlParser
        A[簡寫字串] --> B[解析標籤 / id / class]
        B --> C[解析屬性]
        C --> D[遞迴解析子節點]
        D --> E[DocumentFragment]
    end
    E --> F[vDOM 模板模型]
```

## Module: vDOM

以模板模型與資料產生新的虛擬樹，並與上一棵樹比對輸出 Patch。

```mermaid
graph TB
    subgraph vDOM
        A[updateChildren] --> B[展開 :for]
        B --> C[篩選 :if / :else-if / :else]
        C --> D[載入 temp :path 外部 HTML]
        D --> E[再次展開 :for / :if]
        E --> F["替換 {{ }} 與 i18n 文字"]
        F --> G[getPatches]
        G --> H[diff 節點]
        H --> I[diffProps 屬性]
        H --> J[diffChildren 子節點]
    end
    K[資料快照] --> A
    I --> P[Patch 清單]
    J --> P
```

```mermaid
classDiagram
    class Patch {
        <<union>>
        CREATE vdom index
        APPEND vdom index
        REPLACE vdom index
        TEXT vdom value index
        PROP vdom key value index
        REMOVE index
    }
```

## Module: QUI 核心

負責初始化、排程渲染、套用 Patch 與綁定互動行為。

```mermaid
graph TB
    subgraph QUI
        A[constructor] --> B[geti18nData]
        B --> C[createReactiveObject]
        C --> D[Lifecycle]
        D --> E[updateVdom]
        E --> F[renderChange]
        F --> G[applyPatch]
        G --> G1[patchDoRemove 由深至淺]
        G --> G2[patchDoCreate / Replace / Append]
        G --> G3[patchProp]
        G3 --> H1[addEventListener @ / qe-]
        G3 --> H2[addInputListener :model]
        G3 --> H3[setAttribute : / q-]
    end
    H3 --> S[lazyloadObserver / svgObserver]
    U[lang / fragment] --> E
```

## Module: 響應式資料

`createReactiveObject` 以遞迴 Proxy 包裝資料，值改變時回報路徑並觸發更新。

```mermaid
graph LR
    subgraph createReactiveObject
        A[get] -->|值為物件| B[遞迴包 Proxy]
        C[set] -->|新舊值不同| D[callback]
    end
    D --> E[Lifecycle.update]
```

## Module: 生命週期

包裝渲染、更新、銷毀三種流程，提供前置中止與後置計時回呼。

```mermaid
graph TB
    subgraph Lifecycle
        A[render] --> A1[beforeRender] --> A2[執行渲染] --> A3[rendered 耗時秒數]
        B[update] --> B0[清除計時器 300ms 防抖] --> B1[beforeUpdate] --> B2[執行更新] --> B3[updated 耗時秒數]
        C[destroy] --> C1[beforeDestroy] --> C2[執行銷毀] --> C3[destroyed 耗時秒數]
    end
```

## Module: 監聽器

以 IntersectionObserver 延遲處理進入視窗的圖片與 SVG。

```mermaid
graph TB
    subgraph LazyloadListener
        A[img lazyload] --> B{進入視窗}
        B --> C[check200]
        C -->|成功| D[設定 src]
        C -->|失敗| E[404 預設圖]
    end
    subgraph SVGListener
        F[temp-svg src] --> G{進入視窗}
        G --> H[fetch SVG 文字]
        H -->|成功| I[以 svg 節點取代 保留 id class onclick]
        H -->|失敗| J[內容改為 ☒]
    end
```

## Module: 全域工具

```mermaid
graph LR
    subgraph window
        A[window.QUI] --> A1[QUI 類別]
        B[window.$] --> B1[getElement]
        C[window._] --> C1[createElement]
    end
    B1 --> D[getElementById / querySelector]
    C1 --> E["tag#id.class 解析 / 屬性 / 子節點"]
```

## 資料流

```mermaid
sequenceDiagram
    participant U as 使用者程式
    participant Q as QUI
    participant P as Proxy 資料
    participant L as Lifecycle
    participant V as vDOM
    participant D as 真實 DOM
    U->>Q: new QUI(options)
    Q->>Q: 載入 i18n
    Q->>L: render
    L->>V: 建立新 vDOM 並 diff
    V-->>Q: Patch 清單
    Q->>D: requestAnimationFrame 套用 Patch
    U->>P: app.data.x = y
    P->>L: update（300ms 防抖）
    L->>V: 重新建立 vDOM 並 diff
    V-->>Q: Patch 清單
    Q->>D: 套用差異
```

## 狀態機

```mermaid
stateDiagram-v2
    [*] --> 初始化: new QUI
    初始化 --> 渲染中: i18n 與資料就緒
    渲染中 --> 閒置: rendered
    渲染中 --> 閒置: beforeRender 回傳 false
    閒置 --> 等待防抖: 資料變動
    等待防抖 --> 等待防抖: 300ms 內再次變動
    等待防抖 --> 更新中: 計時結束
    更新中 --> 閒置: updated
    更新中 --> 閒置: beforeUpdate 回傳 false
```

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
