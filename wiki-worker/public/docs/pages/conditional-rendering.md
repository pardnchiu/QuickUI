# Conditional Rendering

This page covers writing `:if`, `:else-if` and `:else`, the comparison operators available, and how conditions are evaluated.

## Basic Usage

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

| Directive | Description |
|---|---|
| `:if` | Starts a condition group |
| `:else-if` / `:elif` | Must directly follow the previous condition element at the same level |
| `:else` | Shown when no earlier condition holds |

Only the first element whose condition holds is kept. When none holds and there is no `:else`, the whole group is removed. An `:else-if` or `:else` with no preceding `:if` is treated as a normal element and always shown.

## Comparison Operators

| Operator | Comparison | Example |
|---|---|---|
| None | Truthiness of the value | `:if="isLogin"` |
| `==` / `===` | Equal after converting to strings | `:if="status == active"` |
| `!=` / `!==` | Not equal after converting to strings | `:if="status != disabled"` |
| `>` / `<` | Numeric comparison | `:if="count > 0"` |
| `>=` / `<=` | Numeric comparison | `:if="count <= 100"` |

## Special Comparison Values

| Value | Holds with `==` when | Holds with `!=` when |
|---|---|---|
| `null` | The value is `null` or missing | The value exists |
| `true` | The value is truthy | The value is falsy |
| `false` | The value is falsy | The value is truthy |
| `empty` | The value is an empty string or missing | The value is not empty |

## Evaluation Rules

| Rule | Description |
|---|---|
| Right-hand side | Always a literal, never looked up in data; `count > max` compares against `"max"`, which becomes `0` |
| Negation | `!flag` is not supported; write `flag == false` |
| Compound conditions | `&&` and `||` are not supported; nest elements or precompute a boolean in data |
| Combined with `:for` | `:for` expands first, then each item evaluates `:if` on its own and can use the item variable |

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
