---
title: Making pages
description: How to make pages
published: true
order: 1
---

::: section body-text

# 📝 {title}

Pages in your docs are created through markdown files.

To add one, make a `.md` file in the `pages/` directory of your project.

```
pages/
  home.md
  my-new-page.md 👈
```

You can also put files a folder deep, which will group your docs in the menu.

```
pages/
  home.md
  quickstart/ 👈
    install.md
    booting-up.md

```

Each file should start with some front matter data like this:

```yaml
\-\-\-
published: true # ❗REQUIRED
title: My page title # ❗REQUIRED
description: Something about this page
order: 1 # Use to order pages in the menu
\-\-\-
```

Now write your docs using [markdown](https://guides.github.com/features/mastering-markdown/) syntax, with extras like [containers](https://www.npmjs.com/package/remark-containers).

```markdown
\:\:\: section body-text

# My title

Lorem ipsum...

\`\`\`javascript
console.log('Hello world!');
\`\`\`

\:\:\:
```

And if simple markdown isn't enough, the docs are also processed with [mdsvex](https://mdsvex.com/), so you can use Svelte components and syntax directly in your markdown files!

```svelte
<script>
  import MyComponent from '$lib/components/MyComponent.svelte';
</script>

# My title

<MyComponent />

<style lang="scss">
  h1 {
    font-family: monospace;
  }
</style>
```

Add Svelte components or custom styles in the `src/lib` directory of your project.

### Publishing

When you're ready, simply upload your project to GitHub and configure [GitHub Pages in the settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source) of your repo. (Use the `docs/` folder for your publishing source!)

Now sit back and relax. Through the magic of GitHub Actions, your site will rebuild to reflect your latest updates every time you push to master. 🍺

<iframe title="beer time gif" src="https://giphy.com/embed/Zw3oBUuOlDJ3W" style="pointer-events:none;border-radius:10px;" width="240" height="223" frameBorder="0" class="giphy-embed"></iframe>

:::
