# Reactive Data

This page explains how `app.data` detects changes, when a re-render is triggered, and which writes do not trigger one.

## How It Works

The `data` option is wrapped recursively in a `Proxy` by `createReactiveObject`: reading a nested object returns a new Proxy, and a write whose new value differs from the old one (`!==`) tells the lifecycle to schedule an update.

```demo
<div id="app">
  <p>{{ count }} · {{ user.name }} · {{ LENGTH(items) }}</p>
  <button @click="update">Update</button>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { count: 0, user: { name: "Pardn" }, items: [] },
    event: {
      update: () => {
        app.data.count++;
        app.data.user.name = "Chiu";
        app.data.items.push("A");
      },
    },
    when: {
      updated: () => console.log("updated", app.data.count),
    },
  });
</script>
```

All three writes trigger an update; writes within 300 ms of each other are merged into one render.

## What Triggers an Update

| Write | Triggers |
|---|---|
| `app.data.key = value` (value changes) | Yes |
| Nested properties, array indexes, `push` / `splice` | Yes |
| Writing the same value | No |
| `delete app.data.key` | No, the Proxy does not trap deletion |
| Replacing `app.data = { ... }` | No, the replacement is not a Proxy |
| `once: true` | No, data is not wrapped and renders once |

## When to Access It

`app.data` is assigned only after i18n finishes loading; even without `i18n` it is deferred to the next microtask. Values written synchronously right after `new QUI()` land on a placeholder object and are lost. Read and write it inside the [`rendered` hook](/lifecycle) or an event handler.

## Template Lookup Rules

| Rule | Description |
|---|---|
| Paths | Use `.` for nested values, for example `{{ user.name }}` |
| Scope | The current `:for` item's data is searched first, then the root data |
| Missing value | The `{{ }}` placeholder stays on the page as written |
| Usable types | Strings, numbers, booleans, arrays, plain objects; functions and `Date` are lost in the snapshot |
