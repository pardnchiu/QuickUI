# Lifecycle Hooks

This page covers when each hook in the `when` option fires, what it receives, and how to cancel a render.

## Syntax

```demo
<div id="app">
  <p>{{ count }}</p>
  <button @click="add">+1</button>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { count: 0 },
    event: {
      add: () => app.data.count++,
    },
    when: {
      beforeRender: () => {},
      rendered: (sec) => console.log("rendered in", sec),
      beforeUpdate: () => app.data.count < 10,
      updated: (sec) => console.log("updated in", sec),
    },
  });
</script>
```

## Hook List

| Hook | Fires | Argument | Returning `false` |
|---|---|---|---|
| `beforeRender` | Before the initial render | None | Cancels the initial render; the raw template stays on screen |
| `rendered` | After the initial render reaches the DOM | Duration in seconds | No effect |
| `beforeUpdate` | After a data change and the 300 ms debounce | None | Cancels this update |
| `updated` | After the update reaches the DOM | Duration in seconds | No effect |
| `beforeDestroy` | Never fires in the current version | None | None |
| `destroyed` | Never fires in the current version | None | None |

`beforeDestroy` and `destroyed` are accepted, but `QUI` has no public destroy method, so they are never called.

## Rules

| Rule | Description |
|---|---|
| Cancelling | Only a synchronous `false` cancels; an `async` function returns a Promise and cannot cancel |
| Update debounce | Multiple writes within 300 ms trigger `beforeUpdate` / `updated` once |
| Reading data | `app.data` is ready from `rendered` onward, see [Reactive Data](/reactive-data) |

## Legacy Forms

Hooks placed in a `lifecycle` object, at the top level of the options, or named in snake_case such as `before_render`, `before_update` and `before_destroy` still work but are planned for removal in 1.0.0; see [Deprecations](/deprecations).
