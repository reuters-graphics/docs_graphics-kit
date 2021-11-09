---
title: Flat files
published: true
order: 14
---

::: section wide

# Packaging flat files

You can package flat files -- e.g., JPG and EPS assets -- for clients in the `media-assets/` directory.

Assets must be structured using the same directory scheme as embed pages -- a folder for a valid locale and for a unique slug within the locale. The JPG and EPS filenames can be whatever you want them to be.

```bash
media-assets/
  en/
    chart/
      chart.eps
      chart.jpg
    map/
      my-map.eps
      map-preview.jpg
```

If you have an embeddable page using the same locale/slug scheme as a set of flat assets, the publisher will upload the JPG and EPS file with the embeddable version of the same graphic.

```bash
pages/
  embeds/
    en/
      chart.svelte
media-assets/
  en/
    chart/
      chart.eps
      chart.jpg
```

:::
