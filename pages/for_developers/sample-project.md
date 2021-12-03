---
published: true
title: Migrating an old rig project to the new rig
order: 8
---

<script>
  import { getPath } from '$utils/statics';
</script>

Let's try to rebuild an already existing Reuters graphics project in the new rig.

I think a good first one is: https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/

---

### Prequisites:

1. All the ai files for this project are [here](<https://www.dropbox.com/work/GRAPHICS all Staff/Scarr%2C Simon/Kabul blasts/new-rig-version/>)

2. The google doc for my "new rig version" of the project is [here](https://docs.google.com/document/d/1V8dr9bO8ZDbePOZDzYNYPwZnmk7oSSlyhwKftJzmwXI/edit). Feel free to tally if you get stuck somewhere.

3. The repo is [here](https://github.com/reuters-graphics/kabul-blast-new-rig)

---

Before we get into actually writing code, let's look a the project and "think in components" for a bit.

<img src="{getPath('images/illos/kabul-components.jpg')}" alt="Kabul page's components"/>

First we'll create a new blank project. Select yes for the Google Doc question. If you're unsure how to do that, check out [Quickstart](https://reuters-graphics.github.io/docs_graphics-kit/for_developers/quickstart)

The google doc that was created for me is

First thing you shouuld do is take a look at `Page.svelte` in the src/lib folder.

Also simultaneously open the google doc that was created. You'll see by default a number of blocks are added to the doc like text, photo, ai2svelte, ai-scroller. We will need all of them except "ai-scroller". So go ahead and delete that whole block from the doc.

Now run `yarn get-google` from the terminal to see the updated page with the scroller removed.

Now go to the top of the google doc and change out the Hed, Dek, Kicker etc to be the same as the Kabul page:

<img src="{getPath('images/illos/kabul-hed-edit.jpg')}" alt="Edit the google doc for the Kabul page"/>

Then start to edit the text. I just copy pasted the text from the story and pasted the text till the first graphic of the airport from the satellite.

**NOTE**: You will face an issue where the text you paste into the doc will show up as not having the paragraphs and appear as one big chunk. To fix that, just hit the enter key after each paragraph.

Now we come to the first graphic. Download the file called "blast_site.ai" from the Dropbox and put it in your project-files folder. Then run the ai2svelte script froom Illustrator. If you're unsure of how to do that, check the [ai docs](https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai)

Run the ai2svelte script for all other ai files as well.

Once you have the story text and ai2html blocks inserted (refer to my google doc for how to do that), we can take a look at how to put the header graphic and also how to limig the size of all the graphics to a sane width.

Let's get the sizing out of the way first: What I've done is set a max-width of 1250px on all ai graphics, except the one in the header, which has the id "locator_airport".

So we can do the same in our main.scss:

```scss
.ai2svelte-container:not(#locator_airport) {
  max-width: 1250px !important;
  margin: 0 auto !important;
}
```

Now, for the header graphic, we'll have to edit the `Page.svelte` (what we've been editing till now!) file in the place where it adds our headline:

```svelte
<Headline section="{content.Kicker}" hed="{content.Hed}" dek="{content.Dek}">...
```

We'll have to manually add in an ai2svelte component like so, just above the <Headline> component:

```svelte
{#await fetchComponent('locator_airport')}
  <div></div>
{:then component}
  <Ai2svelte AiGraphic="{component}" id="locator_airport" size="body-text" />
{:catch error}
  {console.error(
    `Error fetching component: ./ai2svelte/${block.ComponentName}.svelte`,
    error
  )}
{/await}
```

And.. that's it!

We've successfully migrated an old project to the new rig, without too much of a hassle. To sum up, here's the key things to keep in mind when creating a project in the new rig as a newbie:

1. For your first few projects, try to draw boxes around what you think the "components" of the page are. Once you get clarity on that, writing code will be easier. Remember: syntax is useless jargon, hence unimportant. What's important is that you can "think in components".

2. ai2html settings have to be changed as in the docs [here](https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai)

3. The default new doc has stuff that you might not need, so feel free to remove things from it. But perhaps move it all below to the end after the ":ignore" tag.
