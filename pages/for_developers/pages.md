---
title: Making more pages & embeds
published: true
order: 15
---

::: section wide

# Making more pages & embeds

The graphics kit improves on our previous [graphics rig](https://github.com/reuters-graphics/bluprint_graphics-rig/) by letting you build _multiple_ pages and embeds so you can build multipage newsapps or projects with several embeds for media clients.

- [How to make pages and embeds](#how-to-make-pages-and-embeds)
- [Public pages](#public-pages)
- [Embeds](#embeds)

## How to make pages and embeds

Public pages and embeds are both created in the `pages/` directory. All pages are Svelte components. To create a new one, you'll add a new `.svelte` file in that directory. (You should use slug-case like `my-page.svelte` instead of `MyPage.svelte`.)

```
pages/
  embeds/
    en/
      chart.svelte
      page.svelte
  my-second-page.svelte
  index.svelte
```

Each Svelte component you place in `pages/` will create an HTML page, so the four components above will create these four pages:

```
📁 index.html
📁 my-second-page/index.html
📁 embeds/en/chart/index.html
📁 embeds/en/page/index.html
```

When you publish your project, pages under the `embeds/` folder will be packaged as embeddable graphics in RNGS. Any other pages will be published alongside the main graphics page, `index.html`.

## Public pages

Public pages can be named whatever you like. The filename and directory structure will be used to create the page path. For example, a directory like this:

```
pages/
  index.svelte
  second-page.svelte
  countries/
    usa.svelte
    uk.svelte
```

... would create pages like:

```
📁 index.html
📁 second-page/index.html
📁 countries/usa/index.html
📁 countries/uk/index.html
```

Pages can also be named using dynamic parameters that can create multiple pages.

```
pages/
  index.svelte
  countries/
    [code].svelte
```

Read more in [SvelteKit's docs](https://kit.svelte.dev/docs#routing-pages) about using dynamic parameters.

#### SEO

When you create public pages, you should always add SEO to them. Using our pre-built [SEO component](https://reuters-graphics.github.io/graphics-svelte-components/components/seo) is the easiest way. Add it to your page component with the metadata you want for that page.

```svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-svelte-components';
</script>

<SEO
  seoTitle="My SEO title"
  seoDescription="My SEO description"
  shareTitle="My share title"
  shareDescription="My share description"
  shareImgPath="images/reuters-graphics.jpg"
  lang="en"
/>
```

In most cases, you probably want to tie your SEO metadata to a Google doc like this:

```svelte
<script>
  import { SEO } from '@reuters-graphics/graphics-svelte-components';
  import content from '$locales/en/content.json'; // 👈 Adjust to path for doc in locales/ folder
</script>

<SEO
  seoTitle="{content.SEOTitle}"
  seoDescription="{content.SEODescription}"
  shareTitle="{content.ShareTitle}"
  shareDescription="{content.ShareDescription}"
  shareImgPath="{content.ShareImgPath}"
  lang="en"
/>
```

## Embeds

Embeds for clients are more restricted than pubic pages in how they should be organized in the `pages/` directory.

Embed components must be added to the `pages/embeds/` directory under a folder named with a valid locale code -- e.g., `en`, `es`, `de`, etc. -- and can be no levels deeper than that.

So embeds like...

```
pages/
  embeds/
    en/
      page.svelte
      chart.svelte
      map.svelte
    es/
      page.svelte
      map.svelte
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
  import { PymChild } from '@reuters-graphics/graphics-svelte-components';
</script>

<PymChild polling={500} />
```

:::
