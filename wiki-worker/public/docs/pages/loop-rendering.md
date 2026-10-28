# Loop Rendering

This page explains how `:for` expands arrays and objects, and which variables are reachable inside a loop.

## Arrays

```demo
<ul id="app">
  <li :for="item in items">{{ item }}</li>
  <li :for="(item, index) in items">{{ index }}. {{ item }}</li>
</ul>

<script>
  const app = new QUI({ id: "app", data: { items: ["A", "B", "C"] } });
</script>
```

| Syntax | Variables |
|---|---|
| `item in list` | `item` is the element |
| `(item, index) in list` | Adds a zero-based `index` |

## Objects

```demo
<ul id="app">
  <li :for="(key, value) in user">{{ key }}: {{ value }}</li>
</ul>

<script>
  const app = new QUI({ id: "app", data: { user: { name: "Pardn", role: "Developer" } } });
</script>
```

The first variable is the key and the second is the value; with a single variable you only get the key.

## Scope

| Reachable | Description |
|---|---|
| Loop variables | `item`, `index` (or `key`, `value`) |
| Source collection | Read from root data under the same name, for example `items` |
| Root data | Looked up in `app.data` when the loop scope has no match |
| Outer loop variables | Not reachable; the inner body of a nested loop only sees its own variables and root data |

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

The inner source path `group.members` may use the outer variable, but `{{ group.name }}` inside the inner element is not replaced.
