---
title: Transitioning from EJS to Svelte
published: true
order: 7
---

::: section wide

# Transitioning from EJS to Svelte

This doc includes some examples of how basic things you may have done in the previous rig using EJS can be done in Svelte.

> 💡 **Pro tip:** You can install [Svelte snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets) in VSCode, which will suggest simple code blocks as you write and should help you while you're learning.

## Loops

![](https://user-images.githubusercontent.com/12295494/140286773-97eeb3e4-f3fa-427f-a426-1735b0723528.jpg 'for-loop')

[📖 Read the docs: each blocks](https://svelte.dev/tutorial/each-blocks)

```svelte
{#each someArray as item}
  <!-- Use item -->
{/each}
```

## Conditionals

![](https://user-images.githubusercontent.com/12295494/140286794-3b4210a0-125d-4526-9615-cf45b5557afd.jpg 'if-else')

[📖 Read the docs: if blocks](https://svelte.dev/tutorial/if-blocks)

```svelte
{#if someCondition === true}
  <!-- ... -->
{:else if anotherCondition === true}
  <!-- ... -->
{:else}
  <!-- ... -->
{/if}
```

## Importing data

##### EJS

```ejs
<% const content = require('./myData.json'); %>

<h1><%= content.title %></h1>
```

##### Svelte

```svelte
<script>
  import content from './myData.json';
</script>

<h1>{content.title}</h1>
```

:::
