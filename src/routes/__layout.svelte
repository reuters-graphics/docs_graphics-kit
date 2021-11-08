<script context="module">
  export const load = async ({ fetch }) => {
    const docs = await fetch('/docs.json').then((res) => res.json());
    return { props: { docs } };
  };
</script>

<script>
  import { Nav } from '@reuters-graphics/graphics-svelte-components';
  import 'prism-themes/themes/prism-darcula.css';
  import TOC from '$lib/components/TOC/index.svelte';

  export let docs;
</script>

<Nav
  lightLogo="{false}"
  backgroundColour="#fff"
  link="https://github.com/reuters-graphics/"
/>

<TOC docs="{docs}">
  <article class="container-fluid">
    <slot />
  </article>
</TOC>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import '~@reuters-graphics/style-main/scss/fonts/font-faces';
  :global {
    @import '@reuters-graphics/style-theme-eisbaer/scss/main';
    @import './../lib/styles/main';
  }
</style>
