# QuickUI - Architecture

> Back to [README](../README.md)

## Overview

```mermaid
graph TB
    subgraph Input
        A[DOM Element by id]
        B[render Function Shorthand String]
    end
    B --> P[htmlParser]
    A --> M[vDOM Template Model]
    P --> M
    I[i18n Locale Loading] --> D[Proxy Reactive Data]
    D -->|Change| L[Lifecycle update 300ms Debounce]
    M --> V[vDOM Expand for / if / path / Interpolation]
    L --> V
    V --> F[Diff to Patches]
    F -->|requestAnimationFrame| R[Apply Patches to Real DOM]
    R --> E[Event / model / Attribute Binding]
    R --> O[Lazyload / SVG Listeners]
```

## Module: Template Parser (htmlParser)

Parses the shorthand string returned by `render` (`tag#id.class(attr)[children]`) into an element tree that vDOM uses as the template model.

```mermaid
graph LR
    subgraph htmlParser
        A[Shorthand String] --> B[Parse Tag / id / class]
        B --> C[Parse Attributes]
        C --> D[Recursively Parse Children]
        D --> E[DocumentFragment]
    end
    E --> F[vDOM Template Model]
```

## Module: vDOM

Builds a new virtual tree from the template model and data, then diffs it against the previous tree to emit patches.

```mermaid
graph TB
    subgraph vDOM
        A[updateChildren] --> B[Expand :for]
        B --> C[Filter :if / :else-if / :else]
        C --> D[Load temp :path External HTML]
        D --> E[Expand :for / :if Again]
        E --> F["Replace {{ }} and i18n Text"]
        F --> G[getPatches]
        G --> H[diff Nodes]
        H --> I[diffProps Attributes]
        H --> J[diffChildren Children]
    end
    K[Data Snapshot] --> A
    I --> P[Patch List]
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

## Module: QUI Core

Handles initialization, render scheduling, patch application, and interaction binding.

```mermaid
graph TB
    subgraph QUI
        A[constructor] --> B[geti18nData]
        B --> C[createReactiveObject]
        C --> D[Lifecycle]
        D --> E[updateVdom]
        E --> F[renderChange]
        F --> G[applyPatch]
        G --> G1[patchDoRemove Deepest First]
        G --> G2[patchDoCreate / Replace / Append]
        G --> G3[patchProp]
        G3 --> H1[addEventListener @ / qe-]
        G3 --> H2[addInputListener :model]
        G3 --> H3[setAttribute : / q-]
    end
    H3 --> S[lazyloadObserver / svgObserver]
    U[lang / fragment] --> E
```

## Module: Reactive Data

`createReactiveObject` wraps data in recursive Proxies and reports the changed path to trigger an update.

```mermaid
graph LR
    subgraph createReactiveObject
        A[get] -->|Value Is Object| B[Wrap in Proxy Recursively]
        C[set] -->|Old and New Differ| D[callback]
    end
    D --> E[Lifecycle.update]
```

## Module: Lifecycle

Wraps the render, update, and destroy flows with abortable pre-hooks and timed post-hooks.

```mermaid
graph TB
    subgraph Lifecycle
        A[render] --> A1[beforeRender] --> A2[Run Render] --> A3[rendered Elapsed Seconds]
        B[update] --> B0[Clear Timer 300ms Debounce] --> B1[beforeUpdate] --> B2[Run Update] --> B3[updated Elapsed Seconds]
        C[destroy] --> C1[beforeDestroy] --> C2[Run Destroy] --> C3[destroyed Elapsed Seconds]
    end
```

## Module: Listeners

Uses IntersectionObserver to defer images and SVGs until they enter the viewport.

```mermaid
graph TB
    subgraph LazyloadListener
        A[img lazyload] --> B{In Viewport}
        B --> C[check200]
        C -->|Success| D[Set src]
        C -->|Failure| E[Default 404 Image]
    end
    subgraph SVGListener
        F[temp-svg src] --> G{In Viewport}
        G --> H[Fetch SVG Text]
        H -->|Success| I[Replace with svg Node Keeping id class onclick]
        H -->|Failure| J[Set Content to ☒]
    end
```

## Module: Global Utilities

```mermaid
graph LR
    subgraph window
        A[window.QUI] --> A1[QUI Class]
        B[window.$] --> B1[getElement]
        C[window._] --> C1[createElement]
    end
    B1 --> D[getElementById / querySelector]
    C1 --> E["tag#id.class Parsing / Attributes / Children"]
```

## Data Flow

```mermaid
sequenceDiagram
    participant U as User Code
    participant Q as QUI
    participant P as Proxy Data
    participant L as Lifecycle
    participant V as vDOM
    participant D as Real DOM
    U->>Q: new QUI(options)
    Q->>Q: Load i18n
    Q->>L: render
    L->>V: Build new vDOM and diff
    V-->>Q: Patch list
    Q->>D: Apply patches on requestAnimationFrame
    U->>P: app.data.x = y
    P->>L: update (300ms debounce)
    L->>V: Rebuild vDOM and diff
    V-->>Q: Patch list
    Q->>D: Apply differences
```

## State Machine

```mermaid
stateDiagram-v2
    [*] --> Initializing: new QUI
    Initializing --> Rendering: i18n and data ready
    Rendering --> Idle: rendered
    Rendering --> Idle: beforeRender returns false
    Idle --> Debouncing: data change
    Debouncing --> Debouncing: change within 300ms
    Debouncing --> Updating: timer fires
    Updating --> Idle: updated
    Updating --> Idle: beforeUpdate returns false
```

***

©️ 2024 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)
