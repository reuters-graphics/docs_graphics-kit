---
title: Translation
published: true
order: 12
---

::: section wide

# Translation

This kit does not include any built-in translation utilities like `gettext`. Instead, we recommend creating different [pages or embeds](./pages.md) for each language you're building and passing the translated content to common Svelte components.

## Translating pages and embeds

Let's say you want to translate your project.

If your content comes from a Google doc, you'll add a new doc to `google.json`, in this case for German, `de` (🇩🇪):

```javascript
// google.json
{
  "docs": {
    "locales/en/content.json": "GOOGLE_EN_DOC_ID-123456789etc",
    "locales/de/content.json": "GOOGLE_DE_DOC_ID-123456789etc"
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

... with different text values for each keyed piece of content like:

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

To publish a page and embed in both English 🇬🇧 and German 🇩🇪, you might have a `pages/` directory like:

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

Inside each `+page.svelte`, import the correct content for that page's translation and pass it to a common component:

```svelte
<!-- 🇬🇧 pages/+page.svelte -->
<script>
  import englishContent from '$locales/en/content.json';
  import App from '$lib/App.svelte';
</script>

<App content="{englishContent}" />
```

```svelte
<!-- 🇩🇪 pages/de/+page.svelte -->
<script>
  import germantContent from '$locales/de/content.json';
  import App from '$lib/App.svelte';
</script>

<App content="{germanContent}" />
```

Now the common component `App.svelte` can use the correct translated text passed to it:

```svelte
<!-- src/lib/App.svelte -->
<script>
  // Can be 🇬🇧 or 🇩🇪
  export let content;
</script>

<h1>{content.greeting}</h1>
```

The same principle applies to your embeds:

```svelte
<!-- 🇬🇧 Embed page: pages/embeds/en/page/+page.svelte -->
<script>
  import englishContent from '$locales/en/content.json';
  import App from '$lib/App.svelte';
</script>

<App content="{englishContent}" />


<!-- 🇩🇪 Embed page: pages/embeds/de/page/+page.svelte -->
<script>
  import germanContent from '$locales/de/content.json';
  import App from '$lib/App.svelte';
</script>

<App content="{germanContent}" lang="{'de'}" />
```

## Changing components in Svelte based on translation

You may also want to conditionally change content in a component based on the language of the page that's using it.

One way is to pass a `locale` prop from each `+page.svelte` page -- in a similar way to how you passed different values through the `content` prop -- and use it to set values in your code.

Let's try updating the byline in our `App.svelte` component.

First, declare the `locale` prop in `App.svelte` with a default value, likely `en`.

```svelte
<!-- src/lib/App.svelte -->
<script>
  export let content;
  // 👇👇👇
  export let locale = 'en';
</script>
```

Now use that prop to conditionally set some content, in our case translating our byline to Spanish.

```svelte
<!-- src/lib/App.svelte -->
<Headline section="{content.Kicker}" hed="{content.Hed}" dek="{content.Dek}">
  <span slot="byline">
    <!-- 🇬🇧 locale -->
    {#if locale === 'en'}
      By {@html marked.parseInline(content.Byline)}
      <!-- 🇪🇸 locale -->
    {:else if locale === 'es'}
      Por {@html marked.parseInline(content.Byline)}
    {/if}
  </span>
</Headline>
```

Now be sure to pass the correct value to your `App.svelte` component from each `+page.svelte` that uses it (including embeds):

```svelte
<!-- 🇩🇪 pages/en/+page.svelte -->
<script>
  import englishContent from '$locales/de/content.json';
  import App from '$lib/App.svelte';
</script>

<App content="{germanContent}" locale="en" />

<!-- 🇩🇪 pages/de/+page.svelte -->
<script>
  import germantContent from '$locales/de/content.json';
  import App from '$lib/App.svelte';
</script>

<App content="{germanContent}" locale="de" />
```

You can use that prop to set any other conditionals you need.

For example, let's put the dateline in more Euro-friendly format using the javascript `Date.toLocaleString` method, passed the [locale parameter](https://www.w3schools.com/jsref/jsref_tolocalestring.asp) for Spanish and a date formatter object:

```svelte
<!-- src/lib/App.svelte -->
<script>
  export let content;
  export let locale = 'en';
</script>

<Headline section="{content.Kicker}" hed="{content.Hed}" dek="{content.Dek}">
  <span slot="byline">
    <!-- ... -->
  </span>
  <div slot="dateline">
    <!-- 🇪🇸 locale -->
    {#if lang === 'es'}
      Publicado <time datetime="{content.Published}">
        {new Date(content.Published).toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <!-- 🇬🇧 locale -->
    {:else}
      Published <time datetime="{content.Published}">
        {apdate(new Date(content.Published))}
      </time>
    {/if}
  </div>
</Headline>
```

## Other options

For more complex translation handling, you can use something like [svelte-i18n](https://github.com/kaisermann/svelte-i18n).

## Translated pages and embeds in RNGS

### Pages

The graphics kit will upload all **pages** to RNGS in a single [archive](https://github.com/reuters-graphics/bluprint_graphics-kit/issues/1#issuecomment-811891029). That means translated pages will share the same root URL as your English language page.

So with a `pages/` directory like:

```bash
pages/
  de/
    +page.svelte 🇩🇪
  +page.svelte 🇬🇧
```

The German-language page will be at the same URL for the English page **PLUS** `/de/`.

For example, this is the URL for a recent English page:
`https://www.reuters.com/graphics/PERU-PROTEST/ROADBLOCK/zgpobnbwavd/`

And this, for its Spanish translation + `es`:
`https://www.reuters.com/graphics/PERU-PROTEST/ROADBLOCK/zgpobnbwavd/es/`

### Embeds

Embeds, by contrast, are each uploaded as a separate archive, which means they'll generally have unique URLs.

:::
