---
title: Metadata
published: true
order: 18
---

::: section wide

# Metadata

## package.json

Most metadata for your project is stored in a `reuters` key in `package.json`.

The kit will prompt you for essential metadata when you first run `yarn upload` and save it in the appropriate structure. If you need to edit any metadata after your first upload, find it in `package.json` and edit it directly there before uploading back to the RNGS server.

#### ↩️ Restarting a graphics pack

If for some reason your upload to the graphics server gets mangled, and you need to start again, creating a new graphics pack, simply set the `reuters.graphics.pack` key to `null`, delete all items in `reuters.graphics.mediaEditions` array and re-run `yarn upload`.

## Locale-specific metadata

The kit expects a few pieces of metadata to be stored in locale-specific directories under `locales/`.

At minimum, you should have a `locales/en/content.json` that includes the following keys with values:

- `SEOTitle`
- `SEODescription`
- `ShareTitle`
- `ShareDescription`

When you start a new project, the kit automatically includes a JSON file created from a Google doc that includes this metadata for you.

For additional locales, just add another `content.json` under a two-letter locale code directory, e.g., `locales/de/content.json`, with the same keys.

:::
