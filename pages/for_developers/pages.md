---
title: Making more pages & embeds
published: true
order: 15
---

::: section wide

# Making more pages & embeds

The graphics kit improves on our previous [graphics rig](https://github.com/reuters-graphics/bluprint_graphics-rig/) by letting you build _multiple_ pages and embeds so you can build multi-page newsapps or projects with several embeds for media clients.

- [How to make pages and embeds](#how-to-make-pages-and-embeds)
- [Public pages](#public-pages)
- [Embeds](#embeds)
- [Notion page on embeds with an embeddable ai2svelte example](https://www.notion.so/Embeds-for-pages-798975a207424c1ab4df6960905f0bc6?pvs=4)

## How to make pages and embeds

Public pages and embeds are both created in the `pages/` directory. All pages are Svelte components named `+page.svelte`. To create a new one, you'll add a new directory and place a `+page.svelte` page component in it. (You should use slug-case for directories like `my-page/` instead of `MyPage/`.)

```
pages/
  embeds/
    en/
      chart/
        +page.svelte
      page/
        +page.svelte
  my-second-page/
    +page.svelte
  +page.svelte
```

Each page component you place in `pages/` will create an HTML page, so the four components above will create these four pages:

```
📁 index.html
📁 my-second-page/index.html
📁 embeds/en/chart/index.html
📁 embeds/en/page/index.html
```

When you publish your project, pages under the `embeds/` folder will be packaged as embeddable graphics in RNGS. Any other pages will be published alongside the main graphics page, `index.html`.

## Public pages

Public page directories can be named whatever you like. The directory structure will be used to create the page path. For example, a directory like this:

```
pages/
  +page.svelte
  second-page/
    +page.svelte
  countries/
    usa/
      +page.svelte
    uk/
      +page.svelte
```

... would create pages like:

```
📁 index.html
📁 second-page/index.html
📁 countries/usa/index.html
📁 countries/uk/index.html
```

Page directories can also be named using dynamic parameters that can create multiple pages.

```
pages/
  index.svelte
  countries/
    [code]/
      +page.svelte
```

Read more in [SvelteKit's docs](https://kit.svelte.dev/docs/routing#pages) about using dynamic parameters.

#### SEO

When you create public pages, you should **always add SEO** to them. Using our pre-built [SEO component](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-seo--default) is the easiest way. Add it to your page component with the metadata you want for that page.

#### Linking between pages

To link between pages, use SvelteKit's [`base`](https://kit.svelte.dev/docs/modules#$app-paths-base) module and prefix any links to your pages in `a` tags. That will make sure the path to each page is correct in development, on preview pages and when the project is published in the Graphics Server.

For example, say you have translated pages like this:

```
pages/
  +page.svelte
  fr/
    +page.svelte
  de/
    +page.svelte
```

... use `base` to prefix your links like...

```svelte
<script>
  import { base } from '$app/paths';
</script>

<nav>
  <a href="{base}/">English</a>
  <a href="{base}/fr/">Français</a>
  <a href="{base}/de/">Deutsch</a>
</nav>
```

## Embeds

Embeds for clients are more restricted than pubic pages in how they should be organized in the `pages/` directory.

Embed components must be added to the `pages/embeds/` directory under a folder named with a valid locale code -- e.g., `en`, `es`, `de`, etc. -- and a folder for the embed name. **They can be no levels deeper than that.**

So embeds like...

```
pages/
  embeds/
    en/
      page/
        +page.svelte
      chart/
        +page.svelte
      map/
        +page.svelte
    es/
      page/
        +page.svelte
      map/
        +page.svelte
```

... will create embed pages like ...

```
📁 embeds/en/page/index.html
📁 embeds/en/chart/index.html
📁 embeds/en/map/index.html
📁 embeds/es/page/index.html
📁 embeds/es/map/index.html
```

... and, when uploaded, will create corresponding [editions](https://github.com/reuters-graphics/bluprint_graphics-kit/issues/1#issuecomment-811891029) in RNGS for clients like ...

```
media-en-page
media-en-chart
media-en-map
media-es-page
media-es-map
```

#### Pym

Always be sure to include Pym.js on embeddable pages. Using our pre-built component is the easiest way.

```svelte
<script>
  import { PymChild } from '@reuters-graphics/graphics-components';
</script>

<PymChild polling="{500}" />
```

#### Preview images

By default, each embed you create will use the project's preview image, which gets displayed to clients in Connect. Ideally, though, your embed should display a preview of the graphic it actually contains.

If your embed includes an `og:image` metatag with a URL to a local image, the graphics kit will package that as a `_gfxpreview.png` file in the embed's RNGS edition, which overrides the default preview image for your embed in Connect. The easiest way to include one is to use our `SEO` component and pass it the path to a specific preview image for your embed.

```svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-svelte-components';
</script>

<SEO shareImgPath="images/my-embed-preview.jpg" 👈 />
```

> 📌 **Note:** The SEO and share titles and descriptions aren't that important for embeds, though you do have to pass _something_ to those props. Also note that the analytics that are normally injected into graphics pages via the `SEO` component are turned off for embeds, so you don't need to worry about them either.

:::
