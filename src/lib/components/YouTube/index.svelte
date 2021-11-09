<script>
  export let id;
</script>

<section class="graphic wide">
  <h5>Video walk-through ▶️</h5>
  <div class="embed-container">
    <iframe
      src="{`https://www.youtube.com/embed/${id}`}"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen></iframe>
  </div>
</section>

<style lang="scss">
  section.graphic {
    margin: 1rem auto 4rem;
    background: #eee;
    padding: 5px 20px 20px 20px;
    border: 1px solid #ccc;
    h5 {
      font-size: 1rem;
      margin-top: 5px;
      margin-bottom: 0;
    }
  }
  .embed-container {
    margin-top: -4rem;
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
