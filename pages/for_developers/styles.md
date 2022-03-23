---
title: Styling pages
published: true
order: 8
---

::: section wide

# Writing styles

There are two ways to write styles in this kit. The first is to write global styles. The second is to write styles _in_ your Svelte components.

- [Global styles](#global-styles)
- [Component styles](#component-styles)
  - [SCSS](#scss)
  - [Scoping and the `:global` SCSS operator](#scoping-and-the-global-scss-operator)
  - [Styles from JavaScript](#styles-from-javascript)

## Global styles

You can write global styles in the `global.scss` stylesheet located in the `src/lib/styles/` directory. Styles you write here will override any defaults in our house style libraries.

```SCSS
// src/lib/styles/global.scss

section.body-text p {
  color: #666;
  &.purple {
    color: purple;
  }
}
```

The kit already imports this stylesheet in all your pages and embeds.

If you want to create _other_ global stylesheets -- say to only apply to a particular page -- simply create another `.scss` file and import it in the page that you want to apply it to (probably _after_ any house lib imports).

```scss
// src/lib/styles/second.scss
body {
  background-color: #333;
}
```

```svelte
<!-- pages/second-page.svelte -->
<script>
  // ...
  import '@reuters-graphics/style-theme-eisbaer/scss/main.scss';
  import '$lib/styles/second.scss';
</script>
```

## Component styles

It's often better to write styles directly in your Svelte components because they will be automatically scoped to just the elements in your component so they don't conflict with any other global styles. Svelte will also clean up any unused style rules by default, too. It also makes it easy to copy components between projects because the styles travel with the component code.

Read more [about styling in the Svelte docs](https://svelte.dev/tutorial/styling).

### SCSS

Add a `lang` attibute to any style tags in your svelte components to use SCSS syntax.

```svelte
<div>
  <p class="purple">Lorem ipsum...</p>
</div>

<style lang="scss">
  div {
    p.purple {
      color: purple;
    }
  }
</style>
```

### Scoping and the `:global` SCSS operator

Styles you write in your components are scoped to _just the elements in your component_, and Svelte will disregard any rules you write that don't correspond to an element Svelte can detect.

So if your component imports another JS library or uses the [`@html` tag](https://svelte.dev/tutorial/html-tags) to create any elements that you want to style, you should use the SCSS `:global` operator to make sure Svelte doesn't ignore those styles.

Here's an example:

```svelte
<script>
  // Some JS that makes elements
  const sayHello = () => `<p>Hello <span>world</span>!</p>`;
</script>

<div class="my-container">
  {@html sayHello()}
</div>

<style lang="scss">
  div.my-container {
    :global {
      // 👈
      p {
        color: grey;
        span {
          color: blue;
        }
      }
    }
  }
</style>
```

Notice we can nest the `:global` operator _inside_ a containing element, which will scope our global styles so they don't conflict with any other elements on the page.

If you inspect the elements from this component in your browser, Svelte will create styles for those rules like this:

```css
div.my-container.abc123xyz789 p {
  color: grey;
}
div.my-container.abc123xyz789 p span {
  color: blue;
}
```

**Pro-tip:** You'll likely also want to silence Svelte's internal warnings for unused styles so they don't clutter up your terminal. Add this comment directly above your style tag to do it:

```svelte
<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  /* ... */
</style>
```

### Styles from JavaScript

If you want to use JavaScript values to style your components, you have a few options.

You can use Svelte's [class directive](https://svelte.dev/tutorial/classes) to set a class conditionally:

```svelte
<script>
  let purple = true;
</script>

<p class:purple>Lorem ipsum...</p>

<style lang="scss">
  p.purple {
    color: purple;
  }
</style>
```

...you can write styles inline:

```svelte
<script>
  let colour = 'purple';
</script>

<p style="{`color: ${colour};`}">Lorem ipsum...</p>
```

...or you can use inline [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to use JavaScript values in your styles:

```svelte
<script>
  let color = 'purple';
</script>

<div style="--theme-color: {color};">
  <p>the color is set using a CSS variable</p>
</div>

<style>
  p {
    color: var(--theme-color);
  }
</style>
```

:::
