# Event Binding

This page covers wiring DOM events to handlers in the `event` option with `@event`.

## Syntax

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

| Prefix | Example | Description |
|---|---|---|
| `@` | `@click` | Standard form |
| `qe-` | `qe-click` | Equivalent form |

`@click="save"` becomes `element.onclick = app.event.save`, and the `@click` attribute is removed afterwards.

## Rules

| Rule | Description |
|---|---|
| Event name | Must be a native event with a matching `on*` property on the element (`click`, `input`, `change`, `submit`, `keyup` and so on); custom events never fire |
| Handler arguments | Only the `Event`; with a `function` declaration, `this` is the element |
| One handler per event | Assigned as a property, so an element keeps only one handler per event |
| Name lookup | The value is first looked up as a data path and the result is used as the handler name; otherwise the value itself is the name |
| Unknown name | `undefined` is assigned; clicking does nothing and no error is raised |
| `:@click` | Not supported; the attribute is removed and nothing is bound |

## Getting the Item Inside a Loop

Handlers do not receive the `:for` item, so put the identifier in a `data-*` attribute:

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

## Using Handlers Outside QuickUI

`app.event` keeps the original function map, so handlers can be assigned to elements you create yourself:

```javascript
const button = document.createElement("button");
button.onclick = app.event.save;
app.body.append(button);
```
