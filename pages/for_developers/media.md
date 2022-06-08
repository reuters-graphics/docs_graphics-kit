---
title: Working with media files
published: true
order: 9
---

::: section wide

# Working with media files

- [Where to put media files](#where-to-put-media-files)
- [How to use media files in your code](#how-to-use-media-files-in-your-code)
  - [Using media files in CSS](https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/docs/developers/media.md#using-media-files-in-css)

## Where to put media files

Put images, fonts and other static media files in dedicated folders in the statics directory at `src/statics/`.

```
src/
  statics/
    images/
      my-image.jpg 👈
    fonts/
      myfont.woff2 👈
```

## How to use media files in your code

When you reference media files, you should **always use absolute paths** (`https://graphics.reuters.com/.../my-file.jpg`), not relative paths (`./my-file.jpg`).

So to use media files in your code, you need to prefix the path to them using SvelteKit's [built-in `assets` store](https://kit.svelte.dev/docs#modules-$app-paths). Here's how:

```svelte
<script>
  import { assets } from '$app/paths';
</script>

<img alt="" src="{`${assets}/images/my-image.jpg`}" />
```

### Using media files in CSS

Use inline styles to set CSS styles with your media files.

```svelte
<script>
  import { assets } from '$app/paths';
</script>

<div
  style="{`background-image: url(${`${assets}/images/my-image.jpg`});`}"
></div>

<style lang="scss">
  div {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
```

:::
