# Rendering Pipeline

This page walks through the steps a render takes from template to real DOM, and the order in which patches are applied.

## Initialization

| Step | Behavior |
|---|---|
| 1 | Resolve the element by `id`; with no `id` but a `render` function, create a detached `<section class="QUIFragment">` |
| 2 | Clone the element as the original template and build the first vDOM from the unprocessed template as the diff baseline |
| 3 | When `render` is given, replace the template content with its output |
| 4 | Load `i18n` (string values are fetched); only then are `app.data`, `app.event` and `app.body` assigned |
| 5 | Enable the SVG and lazyload listeners according to `option`, create the `Lifecycle` and run the initial render |

If the element is missing, or neither `id` nor `render` is given, an error is logged to the console and the instance renders nothing.

## Each Render

| Stage | Behavior |
|---|---|
| Rebuild vDOM | Build a new vDOM from a copy of the original template, using a `JSON.parse(JSON.stringify(app.data))` snapshot as data |
| Expand directives | Process `:for` → `:if` → `<temp :path>`, then run `:for` and `:if` again on content inserted by `:path` |
| Replace text | Replace `{{ i18n.* }}` first, then every other `{{ }}` |
| Diff | Compare the old and new vDOM child by child using indexes, producing patches |
| Apply | Apply the patches inside `requestAnimationFrame`, then strip leftover `:if` attributes and handle [Render Effects](/effects) |

## Patch Types

| Type | Trigger | Action |
|---|---|---|
| `REMOVE` | The new tree has no node at that position | Removed from the deepest, last position first so indexes do not shift |
| `CREATE` | The old tree has no node | Create the element and append it to the parent |
| `APPEND` | The number of children grows | Insert at the matching index |
| `REPLACE` | The tag name differs at the same position | Replace with the new element |
| `PROP` | Every attribute of every new node | Dispatched by prefix to [attribute](/attribute-binding), [event](/event-binding) or [form](/two-way-binding) handling |
| `TEXT` | The text differs at the same position | Overwrite the text content |

`REMOVE` patches always run before every other patch.

## Edge Cases

| Situation | Result |
|---|---|
| Inserting at the front of a list | Diffing has no keys and aligns by index, so every item after the insertion point receives patches |
| `<script>` inside a template | Moved to `<head>` while the vDOM is built; skipped when an existing `<script>` has the same `src` or content |
| Values the snapshot cannot serialize | Functions, `Date`, `Map` and similar values are not available in templates; convert them to strings or numbers first |
