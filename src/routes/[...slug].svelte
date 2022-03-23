<script context="module">
  import slugifyPath from '$utils/slugify-path';

  export async function load({ url }) {
    const modules = import.meta.glob('./../../pages/**/*.md');
    let match;

    for (const [path, resolver] of Object.entries(modules)) {
      const slug = slugifyPath(path);
      if (slug === slugifyPath(url.pathname)) {
        match = { path, resolver };
        break;
      }
    }

    if (!match) return { status: 404 };

    const Doc = await match.resolver();

    return { props: { Component: Doc.default, metadata: Doc.metadata } };
  }
</script>

<script>
  import { SEO } from '@reuters-graphics/graphics-svelte-components';

  export let Component;
  export let metadata;
</script>

<SEO
  seoTitle="{metadata.title}"
  seoDescription="{metadata.description}"
  shareTitle="{metadata.title}"
  shareDescription="{metadata.description}"
  shareImgPath="{metadata.image || 'images/reuters-graphics.jpg'}"
  lang="{metadata.lang || 'en'}"
/>

<svelte:component this="{Component}" />
