---
title: Translation
published: true
order: 12
---

::: section wide

# Translation

This kit does not include any built-in translation utilities like `gettext`. Instead, we recommend creating different [pages or embeds](./pages.md) for each language you're building and passing the translated content to common Svelte components.

Let's use a simple example.

Say you want to add a translated content to your project. First, add the translated google doc, in this case for `de` (🇩🇪), to `google.json`:

```javascript
// google.json
{
  "docs": {
    "locales/en/content.json": "1sm_YdKj2VHYdqCG7EG3dus-2n6C-cXE1YwfGP-Sg4zQ",
    "locales/de/content.json": // Add google doc ID for your translated content here
  },
}
```

Once you run `yarn get-google`, you will see the translated content in your locales folder:

```bash
locales/
  en/
    content.json
  de/
    content.json
```

... with text like:

```javascript
// en/content.json
{
  "greeting": "Hello!"
}

// de/content.json
{
  "greeting": "Guten Tag!"
}
```

And let's say you wanted to publish a page and embed in both English 🇬🇧 and German 🇩🇪. You might have a `pages/` directory like:

```bash
pages/
  de/
    +page.svelte 🇩🇪
  embeds/
    en/
      page/
        +page.svelte 🇬🇧
    de/
      page/
        +page.svelte 🇩🇪
  +page.svelte 🇬🇧

```

Inside each `+page.svelte`, import the correct content for its translation and pass it to a common component and pass the `lang` prop. If no `lang` prop is passed, it defaults to `en`:

```svelte
<!-- 🇬🇧 pages/+page.svelte -->
<script>
  import content from '$locales/en/content.json';
  import App from '$lib/App/index.svelte';
</script>

<App content="{content}" />
```

```svelte
<!-- 🇩🇪 pages/de/+page.svelte -->
<script>
  import content from '$locales/de/content.json';
  import App from '$lib/App/index.svelte';
</script>

<App content="{content}" lang="{'de'}" />
```

And the common component `App.svelte` can use the correct translated text passed to it:

```svelte
<!-- src/lib/App.svelte -->
<script>
  export let content;
</script>

<h1>{content.greeting}</h1>
```

## Translating dateline and byline

Use the `lang` prop passed into `App.svelte` and an `if/else` statement to add translations for words such as "Published" and "By".
If you're translating the byline into Spanish, change "By" to "Por:

```svelte
<!-- src/lib/App.svelte -->
<script>
  export let content;
</script>

<Headline section="{content.Kicker}" hed="{content.Hed}" dek="{content.Dek}">
  <span slot="byline">
    {#if lang === 'en'}
      By {@html marked.parseInline(content.Byline)}
    {:else if lang === 'es'}
      🇪🇸 Por {@html marked.parseInline(content.Byline)}
    {/if}
  </span>
</Headline>
```

You'd also want to make sure the published dateline is translated into the language you want.
To do that, use `.toLocaleString()` instead of `apDate()` and pass in these props:

- The [correct locale parameter](https://www.w3schools.com/jsref/jsref_tolocalestring.asp) for your language. For Spanish, use `es-ES`. For standard German, for example, use `de-DE`.
- This object of options that will make sure the month is spelled out and the day and year will show up as numbers:
  ` { year: 'numeric', month: 'long', day: 'numeric', }`

```svelte
<!-- src/lib/App.svelte -->
<script>
  export let content;
</script>

<Headline section="{content.Kicker}" hed="{content.Hed}" dek="{content.Dek}">
  <span slot="byline">
    {#if lang === 'en'}
      By {@html marked.parseInline(content.Byline)}
    {:else if lang === 'es'}
      🇪🇸 Por {@html marked.parseInline(content.Byline)}
    {/if}
  </span>
  <div slot="dateline">
    {#if lang === 'es'}
      🇪🇸 Publicado <time datetime="{content.Published}">
        {new Date(content.Published).toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</time
      >
    {:else}
      Published <time datetime="{content.Published}">
        {apdate(new Date(content.Published))}</time
      >
    {/if}
  </div>
</Headline>
```

## Note on uploading to RNGS

In this rig, we no longer upload and publish separate packs for translated interactive pages. To share translated pages, simply add the `lang` prop at the end of the URl.

For example, if this is the URL for the English interactive page:
`https://www.reuters.com/graphics/PERU-PROTEST/ROADBLOCK/zgpobnbwavd/`

Then the Spanish one is:
`https://www.reuters.com/graphics/PERU-PROTEST/ROADBLOCK/zgpobnbwavd/es/`

## Other options

For more complex handling, you can use something like [svelte-i18n](https://github.com/kaisermann/svelte-i18n).

:::
