# Image Lazy Loading

This page covers how `:lazyload` loads an image only when it enters the viewport, and which fallback image is used on failure.

## Syntax

```demo
<div id="app">
  <img :lazyload="photo" width="240" />
  <img :lazyload="photo" :effect="circle" width="240" />
</div>

<script>
  const app = new QUI({
    id: "app",
    data: { photo: "/static/image/cover.png" },
  });
</script>
```

| Stage | Behavior |
|---|---|
| Initial render | `src` is set to a transparent placeholder; with `:effect="circle"` a spinning loader is used instead |
| Enters the viewport | `IntersectionObserver` fires, sends `HEAD` then `GET`, and sets `src` to a blob URL |
| Afterwards | The `lazyload` and `effect` attributes are removed |
| Later renders | Already loaded images get `src` directly and are not observed again |

`<img>` elements already on the page with a `lazyload="url"` attribute, even if QuickUI did not render them, are observed too when the listener is created.

## Failure Handling

| Case | `src` |
|---|---|
| A `TypeError` with the message `Load failed` (Safari's CORS failure) or an image `Event` | The original URL is used directly |
| Any other error (including 404, and CORS failures in browsers with a different message such as Chrome) | `https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@latest/static/image/404.svg` |

For cross-origin images, make sure the server sends CORS headers, otherwise Chrome shows the 404 fallback.

## Disabling

```javascript
new QUI({ id: "app", option: { lazyload: false } });
```

With it disabled, no listener is created; using `:lazyload` in the template then throws because the observer does not exist, so use `:src` instead.
