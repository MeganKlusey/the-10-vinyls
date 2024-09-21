<template>
  <div class="album">
    <h2>{{ id }}</h2>
    <img @mouseover="changeColour(colour, 'FFFFF0', 'FFFFF0')" @mouseleave="changeColour('FFF', '78716C', '000')"
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

function changeColour(bgColour, albumTextColour, navTextColour) {
  document.body.style.backgroundColor = '#' + bgColour;
  for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
    document.getElementsByTagName('p')[i].style.color = '#' + albumTextColour;
  }
  for (var j = 0; j < document.getElementsByClassName('nav-button').length; j++) {
    document.getElementsByClassName('nav-button')[j].style.color = '#' + navTextColour;
    document.getElementsByClassName('nav-button-text')[j].style.color = '#' + navTextColour;
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
