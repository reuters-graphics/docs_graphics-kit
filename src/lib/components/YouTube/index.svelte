<script>
  export let id;
</script>

<section class="graphic">
  <div class="embed-container">
    <iframe
      src="{`https://www.youtube.com/embed/${id}`}"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen></iframe>
  </div>
</section>

<style>
  section.graphic {
    margin: -2rem auto 4rem;
  }
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
