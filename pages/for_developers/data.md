---
title: Working with data
published: true
order: 10
---

::: section wide

# Working with data

Data drives pages. This guide outlines how to work with different types of data, depending on the role your data plays in your project.

- [Static vs. dynamic data](#static-vs-dynamic-data)
- [Data file types](#data-file-types)
- [Where to put your static data](#where-to-put-your-static-data)
  - [Remote static data](#what-if-my-static-data-lives-somewhere-else)
- [Fetching dynamic data](#fetching-dynamic-data)
- [Preparing static data](#preparing-static-data)

## Static vs. dynamic data

The first question you should ask about your data is: Is my data _static_ or _dynamic_?

What do we mean?

**Static data** is data that isn't going to change beyond the point you publish your project. The text you pull into your project from a Google doc is an example of this kind of data. That text may change while you're developing the project (getting it edited, etc.), but once you publish, it's locked in, and any changes to the data from there will mean you need to republish the project.

This is the main type of data we'll talk about working with.

**Dynamic data** is data that you expect _will change_ after you publish your project. Tracking projects often use this type of data and fetch it on page load to make sure readers see the latest data on the page.

In general, dynamic data often is published separately from the project you're working on. See our [GitHub scraper bluprint](https://github.com/reuters-graphics/bluprint_github-action-scraper) for an example of setting up a scraper that can independently publish data on a timer that your project can then fetch.

We won't talk as much about this type of data.

> It's worth noting one alternative pattern we _do_ use for tracking projects using dynamic data. We can setup a project to re-publish from GitHub on a schedule or through an API as data updates. That lets us treat dynamic data as though it were static. Read more about that setup in the [Automated publishing](https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/docs/developers/automated-publishing.md) doc.

## Data file types

A quick note on data file types. We're not going to cover using data in delimited file formats, e.g., TSV, CSV, or the like.

In general, we recommend converting your data to JSON, we'll talk more about why and how to convert it if your source data comes in one of those formats.

## Where to put your static data

You might be tempted to put static data with other media files like images or fonts and then fetch them in your code...

**But don't!**

If your data is indeed static, then it's actually far better to import your data directly into your components because the content that data makes can then be baked out into the page when we build it, which means faster load times and better for accessibility and SEO.

Because we're going to import our data just like a component, we can treat it like code and put it right next to the component that uses it.

Say we have data for a chart, we might have a directly structure like this:

```
src/
  lib/
    my-chart/
      index.svelte
      data.json 👈
    Page.svelte
```

Now you can import your data just like a regular module in the component that uses it:

```svelte
<!-- mychart/index.svelte -->
<script>
  import data from './data.json';
</script>

{#each data as d}
  <div style="width: {d.value}%; background: {d.colour};">{d.name}</div>
{/each}
```

### What if my static data lives somewhere else?

If your static data lives somewhere other than in your project, then you can use Sveltekit's built-in [load](https://kit.svelte.dev/docs#loading) function to import your data and then pass it to the components that need it through props.

To do that, we're going to go to the component in the `pages/` directory that defines the page that needs the data and export a load function that returns the data in a props object we can then pass to any components that need it:

```svelte
<!-- 👇 Add this script tag. Note the context="module"! -->
<script context="module">
  // Export an async load function
  export async function load({ fetch }) {
    const url = `https://graphics.reuters.com/path/to/my.json`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          myData: await res.json(),
        },
      };
    }

    // Oops!
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<!-- pages/index.svelte -->
<script>
  import Page from '$lib/Page.svelte';
  // ...

  // 👇 Define a prop for this data
  export let myData;
</script>

<!-- 👇 Pass our data to the Page component, which can in turn pass it
to any other components that need this data! -->
<Page myData="{myData}" />
```

## Fetching dynamic data

If your data is dynamic, you can use the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get it.

Here's an example:

```svelte
<!-- mychart/index.svelte -->
<script>
  // Create a variable for your data...
  let myData;

  // ... and an async function to get it...
  const fetchMyData = async () => {
    const resp = await fetch(
      'http://graphics.thomsonreuters.com/data/2021/biden-approval-tracker/approval.json'
    );
    const data = await resp.json();
    myData = data;
  };

  // ... then call that function!
  fetchMyData();
</script>

{#if myData}
  <!-- Do something with your data once it's been fetched! -->
{/if}
```

**Remember**, because we have to wait for the async function to fetch your data, any content made from this data won't be baked out into the page. That means your component will be slower to load and not as accessible or SEO friendly. If your data is static, use one of the patterns above. If not, then that slowness is the cost of keeping your page up-to-date.

## Preparing static data

So what if you need to _prepare_ your static data? Say, you need to fetch it from an API or filter it down to just the data you need on the page or otherwise convert it from another format to JSON.

Your best bet is to write a simple script in Node to do what you need and save the resulting JSON in your project.

A good place to put such scripts is the `bin/` folder in your project.

So let's go through an example. Make a `.cjs` file (for CommonJS Node script) in your bin directory:

```bash
bin/
  scrapeData.cjs
```

... And let's say that script calls a simple API and parses the data.

```javascript
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const fetchData = async () => {
  const resp = await axios.get('https://some.api');
  return resp.data;
};

const filterData = (data) => {
  return data.filter((d) => d.active);
};

const writeData = (data) => {
  const outputPath = path.join(process.cwd(), 'src/lib/mychart/data.json');
  fs.writeFileSync(outputPath, JSON.stringfy(data));
};

const getData = async () => {
  const rawData = await fetchData();
  const filteredData = filterData(rawData);
  writeData(filteredData);
};
```

Now you can call that file from the command line with:

```bash
node ./bin/scrapeData.cjs
```

**BONUS**: Let's say you want your script to run and refresh your data everytime before you publish.

You can add it to the front of the `upload` script in `package.json` like this:

```json
{
  "scripts": {
    "upload": "node ./bin/scrapeData.cjs && npm-run-all publish:upload"
  }
}
```

Now your script will refresh your data everytime before you upload your page to the RNGS server.

:::
