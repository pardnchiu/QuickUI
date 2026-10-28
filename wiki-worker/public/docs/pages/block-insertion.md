# Block Insertion

This page covers loading an external HTML file into the template with `<temp :path>`.

## Syntax

```demo
<div id="app">
  <temp :path="/components/header.html"></temp>
  <temp :path="footerUrl"></temp>
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { title: "QuickUI", footerUrl: "/components/footer.html" },
  });
</script>
```

The content of `header.html` replaces the `<temp>` element itself; inserted content can use `{{ }}`, `:for`, `:if` and every other directive.

## Rules

| Rule | Description |
|---|---|
| Tag | `:path` only works on `<temp>` |
| Path | Looked up as a data key first, otherwise used as the URL |
| When it loads | Fetched again on every render; caching is left to the browser HTTP cache |
| Order | Loaded after `:for` and `:if`, then `:for` and `:if` run again on the inserted content |
| Environment | Requires an HTTP server; `fetch` fails under `file://` |

## Failure Cases

| Case | Result |
|---|---|
| A 404 or other error status | The status is not checked, so the error page's body is inserted |
| Network error or CORS rejection | `fetch` throws, that render stops, and the page keeps the previous result |

Before deploying, make sure every `:path` points to a file that exists.
