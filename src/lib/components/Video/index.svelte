<script>
  export let src;
  export let controls = false;
  export let autoplay = true;
  export let loop = true;
</script>

<video controls="{controls}" autoplay="{autoplay}" loop="{loop}">
  <source src="{src}" type="video/mp4" />
</video>

<style>
  video {
    display: block;
    margin: 0 auto 3rem;
  }
</style>
