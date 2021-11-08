<script>
  import { SEO } from '@reuters-graphics/graphics-svelte-components';
  import * as Home from './../../pages/home.md';
</script>

<SEO
  seoTitle="{Home.metadata.title}"
  seoDescription="{Home.metadata.description}"
  shareTitle="{Home.metadata.title}"
  shareDescription="{Home.metadata.description}"
  shareImgPath="{Home.metadata.image || 'images/reuters-graphics.jpg'}"
  lang="{Home.metadata.lang || 'en'}"
/>

<svelte:component this="{Home.default}" />
