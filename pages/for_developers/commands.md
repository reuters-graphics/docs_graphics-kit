---
title: CLI commands
published: true
order: 4
---

::: section wide

# Commands

- [Development and publishing commands](#development-and-publishing-commands)
- [Google docs](#google-docs)

## Development and publishing commands

🚀 Start the development server

```
yarn start
```

👀 Build and publish preview pages to AWS

```
yarn preview
```

⏫ Build and upload your project to the RNGS server

```
yarn upload
```

🍻 Publish your project in the RNGS server

```
yarn pub
```

❌ _NOT_ `yarn publish`!

## Google docs

### Get data from Google docs and sheets

Fill out your conf in `google.json` with the Google doc/sheet ID and the path to the file you'd like to export data to. Read more in [Google Docs and Sheets](https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/docs/developers/google-docs-and-sheets.md).

```
yarn get-google
```

### Lock data schema for Google data

When you're ready to lock in your Google data structure, you can run a command that will create JSON schema that will check the data pulled from your Google docs will always conform to your schema. [Read more here.](https://github.com/reuters-graphics/graphics-bin/blob/master/docs/lock-google-docs.md#lock-google-docs)

```
yarn lock-google
```

:::
