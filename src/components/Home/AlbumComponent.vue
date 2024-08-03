<template>
  <div class="album">
    <h2>1</h2>
    <img id="1" class="album-cover" alt="Album cover" src="../../assets/1.jpg">
    <h3>The Miseducation of Lauryn Hill</h3>
    <p>Lauryn Hill</p>
  </div>
</template>

<script>
export default {
  name: 'AlbumComponent',
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
    transition-duration: 0.1s;
    &:hover {
      transform: skew(-4deg, 4deg);
    }
  }
}
</style>
