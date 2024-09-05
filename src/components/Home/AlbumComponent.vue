<template>
  <div class="album">
    <h2>{{id}}</h2>
    <img @mouseover="changeColour(colour)" @mouseleave="changeColour('fff')"
    :id=id class="album-cover" alt="Album cover" :src="require('../../assets/' + id + '.jpg')">
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
    'colour',
    'id'
  ],
  methods: {
    changeColour: function(colour) {
      document.body.style.backgroundColor = '#' + colour;
    }
  }
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
    text-shadow: 0 0 1px #FFF;
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
