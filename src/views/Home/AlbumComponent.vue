<template>
  <div class="album">
    <h2>{{ id }}</h2>
    <img @mouseover="changeColour(colour, 'FFFFF0')" @mouseleave="changeColour('FFF', '78716C')"
    :id=id class="album-cover" alt="Album cover" :src="require('../../assets/' + id + '.jpg')">
    <h3>{{ name }}</h3>
    <p class="artist">{{ artist }}</p>
    <p class="price">£25</p>
    <QuantityComponent :id=id />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import QuantityComponent from './QuantityComponent'

defineProps(['name', 'artist', 'colour', 'id', 'quantity']);

function changeColour(bgColour, textColour) {
  document.body.style.backgroundColor = '#' + bgColour;
  for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
    document.getElementsByTagName('p')[i].style.color = '#' + textColour;
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
    transition-delay: 0.1s;

    &.price {
      color: #A8A5A3;
    }
  }
}
</style>
