<template>
  <div class="album">
    <h2>1</h2>
    <img id="1" class="album-cover" alt="Album cover" src="../../assets/1.jpg">
    <h3>{{ name }}</h3>
    <p>{{ artist }}</p>
  </div>
</template>

<script>
export default {
  name: 'AlbumComponent',
  props: [
    'name',
    'artist',
    'image'
  ]
}
</script>

<style lang="scss" scoped>
.album {
  display: flex;
  flex-direction: column;
  align-items: center;

  .album-cover {
    border-radius: 5px;
    width: 100%;
    max-width: 200px;
    transition-duration: 0.15s;
  }

  h2, h3, p {
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    margin: 0;
  }

  h2 {
    color: #C48D00;
    font-weight: 600;
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 10px;
  }

  p {
    color: #78716C;
    margin-top: 2px;
  }
}
</style>
