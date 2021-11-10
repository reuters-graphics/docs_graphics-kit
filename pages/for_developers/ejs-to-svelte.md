---
title: Transitioning from EJS to Svelte
published: true
order: 7
---

<script>
  import { getPath } from '$utils/statics';
</script>

::: section wide

# Transitioning from EJS to Svelte

This doc includes some examples of how basic things you may have done in the previous rig using EJS can be done in Svelte.

> 💡 **Pro tip:** You can install [Svelte snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets) in VSCode, which will suggest simple code blocks as you write and should help you while you're learning.

## Templates vs Components

<img src="{getPath('images/illos/split.jpg')}" alt='Split'/>

## Loops

<img src="{getPath('images/illos/for-loop.jpg')}" alt='for-loop'/>

[📖 Read the docs: each blocks](https://svelte.dev/tutorial/each-blocks)

```svelte
{#each someArray as item}
  <!-- Use item -->
{/each}
```

## Conditionals

<img src="{getPath('images/illos/if-else.jpg')}" alt='if-else'/>

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
