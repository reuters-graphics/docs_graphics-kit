---
title: Working with media files
published: true
order: 9
---

::: section wide

# Working with media files

- [Where to put media files](#where-to-put-media-files)
- [How to use media files in your code](#how-to-use-media-files-in-your-code)
  - [Using media files in component SCSS](#using-media-files-in-component-scss)
  - [Using media files in global SCSS](#using-media-files-in-global-scss)

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

So to use media files in your component code, you need to prefix the path to them using SvelteKit's [built-in `assets` store](https://kit.svelte.dev/docs/modules#$app-paths). Here's how:

```svelte
<script>
  import { assets } from '$app/paths';
</script>

<img alt="" src="{`${assets}/images/my-image.jpg`}" />
```

### Using media files in component SCSS

Use inline styles to set SCSS styles with your media files.

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

### Using media files in global SCSS

If you need to load media files in your global SCSS -- for example, to load a font for use across the page -- the kit will automatically resolve CSS `url()` path strings beginning with the `$assets` alias and create the correct absolute URL for you.

```scss
// src/lib/styles/global.scss

@font-face {
  font-family: myCustomFont;
  src: url("$assets/fonts/myFont.woff2") format("woff2");
}
```

:::
