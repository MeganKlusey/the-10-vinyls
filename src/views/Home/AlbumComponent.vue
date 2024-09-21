<template>
  <div class="album" :class="{inBasket: inBasket}">
    <h2 v-if="!inBasket">{{ id }}</h2>
    <img @mouseover="changeColour(colour, 'FFFFF0', 'FFFFF0')" @mouseleave="changeColour('FFF', '78716C', '000')"
    :id=id class="album-cover" alt="Album cover" :src="require('../../assets/' + id + '.jpg')">
    <div class="album-text">
      <div>
        <h3>{{ name }}</h3>
        <p class="artist">{{ artist }}</p>
      </div>
      <div>
        <p class="price">£25</p>
        <QuantityComponent :id=id />
        <p class="delete-wrapper" v-if="inBasket">OR&nbsp;&nbsp;&nbsp;<button class="delete"><ion-icon name="trash-outline"></ion-icon><span>DELETE</span></button></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import QuantityComponent from './QuantityComponent'

defineProps(['name', 'artist', 'colour', 'id', 'quantity', 'inBasket']);

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

  &.inBasket {
    flex-direction: row;
    align-items: stretch;
    gap: 20px;

    .album-text {
      align-items: flex-start;
      justify-content: space-evenly;
    }

    h2, h3, p {
      text-align: left;
    }

    .price {
      color: #000;
      font-size: 24px;
    }

    .delete-wrapper {
      display: flex;
      font-size: 12px;
      align-items: center;
      margin-top: 10px;

      button {
        all: unset;
        cursor: pointer;
        display: flex;
        color: #000;
        font-size: 16px;
        border-bottom: 1px solid transparent;
        padding-right: 2px;

        &:hover {
          border-bottom: 1px solid #000;
        }
      }
    }
  }

  .album-cover {
    border-radius: 5px;
    width: 100%;
    max-width: 200px;
    transition-duration: 0.15s;
  }

  .album-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2, h3, p {
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    margin: 0;
    text-align: center;
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
