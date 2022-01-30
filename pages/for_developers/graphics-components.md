---
title: Using Reuters Graphics Components
published: true
order: 8
---

<script>
  import YouTube from '$lib/components/YouTube/index.svelte';
</script>

::: section wide

# Using Reuters Graphics Components

Many common components you'll need to make graphics pages are pre-written for you in our [Reuters Graphics Svelte components library](https://reuters-graphics.github.io/graphics-svelte-components/).

Check out the [demo site](https://reuters-graphics.github.io/graphics-svelte-components/) for a list of the components available and docs on how to use them.

<YouTube id="GmQla2Ce6VA" />

## Customizing components

### Props

Most graphics components can be customized through [props](https://svelte.dev/tutorial/declaring-props). For example, to pass text data to your components:

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-svelte-components';
</script>

<Headline hed="My title" dek="The beginning of a beautiful page" />
```

### Slots

One important way our components are written to offer you even more flexibility is through [slots](https://svelte.dev/tutorial/slots).

Be sure to check out the [official tutorial](https://svelte.dev/tutorial/slots) to understand how slots -- and especially, [_named_ slots](https://svelte.dev/tutorial/named-slots) -- work, but let's also go through a very common example to see how much power slots give you to customize the elements and styles in the component.

Take a closer look at the [Headline](https://reuters-graphics.github.io/graphics-svelte-components/components/headline) component, which allows you to pass your own elements through several named slots.

For example, a crown image can be passed like this:

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-svelte-components';
</script>

<Headline hed="My title">
  <!-- 👇 Add a crown through a named slot -->
  <img slot="crown" src="https://path.to/crown.png" />
</Headline>
```

In this case we've passed an image to the slot, and we can also style that image directly like this:

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-svelte-components';
</script>

<Headline hed="My title">
  <img slot="crown" src="https://path.to/crown.png" />
</Headline>

<style lang="scss">
  // 👇 Style the image that got passed to our component
  img {
    width: 100px;
  }
</style>
```

But we don't have to pass just an image to this slot. Remember, **slots are just placeholders** for whatever elements go in particular spot -- in this case, something that goes directly above the headline.

So if we want to put something other than an image in its place, we can and can style that however we like as well!

```svelte
<script>
  import { Headline } from '@reuters-graphics/graphics-svelte-components';
</script>

<Headline hed="My title">
  <!-- 👇 Add a small video through a named slot -->
  <video slot="crown" autoplay loop>
    <source src="https://path.to/video.webm" type="video/webm" />
    <source src="https://path.to/video.mp4" type="video/mp4" />
  </video>
</Headline>

<style lang="scss">
  video {
    width: 120px;
  }
</style>
```

**Upshot**: Be sure to pay special attention to what slots are available in our Graphics Components (By reading [the docs](https://reuters-graphics.github.io/graphics-svelte-components/)!) and use them to more deeply customize your components.

:::
