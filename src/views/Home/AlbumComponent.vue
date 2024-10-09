<template>
  <div class="album" :class="{inBasket: inBasket}">
    <h2 v-if="!inBasket">{{ id }}</h2>
    <img
    @mouseover="!inBasket && changeColour(colour, 'FFFFF0', 'FFFFF0', 'FFFFF0')"
    @mouseleave="!inBasket && changeColour()"
    :id=id class="album-cover" alt="Album cover" :src="require('../../assets/' + id + '.jpg')">
    <div class="album-text">
      <div>
        <h3>{{ name }}</h3>
        <p class="artist">{{ artist }}</p>
      </div>
      <div>
        <p v-if="!inBasket" class="price">£25</p>
        <p v-if="inBasket" class="price">£{{ 25 * quantity }} <span>(£25 each)</span></p>
        <QuantityComponent :id=id />
        <span class="delete-wrapper" v-if="inBasket">OR&nbsp;&nbsp;&nbsp;
        <button @click="removeAlbumQuantity" class="delete"><ion-icon name="trash-outline"></ion-icon>&nbsp;<span>Remove</span></button></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from '../../store.js'
import { defineProps } from "vue";
import QuantityComponent from './QuantityComponent'

let props = defineProps(['name', 'artist', 'colour', 'id', 'quantity', 'inBasket']);

function changeColour(bgColour = null, greyOneText = null, greyTwoText = null, blackText = null) {
  if (bgColour != null) {
    document.body.style.backgroundColor = '#' + bgColour;
  } else {
    document.body.style.backgroundColor = 'inherit';
  }
  for (var i = 0; i < document.getElementsByClassName('artist').length; i++) {
    if (greyOneText != null) {
      document.getElementsByClassName('artist')[i].style.color = '#' + greyOneText;
    } else {
      document.getElementsByClassName('artist')[i].style.color = '';
    }
  }
  for (var j = 0; j < document.getElementsByClassName('price').length; j++) {
    if (greyTwoText != null) {
      document.getElementsByClassName('price')[j].style.color = '#' + greyTwoText;
    } else {
      document.getElementsByClassName('price')[j].style.color = '';
    }
  }
  for (var k = 0; k < document.getElementsByClassName('nav-button-text').length; k++) {
    if (blackText != null) {
      document.getElementsByClassName('nav-button-text')[k].style.color = '#' + blackText;
    } else {
      document.getElementsByClassName('nav-button-text')[k].style.color = '';
    }
  }
  for (var l = 0; l < document.getElementsByClassName('nav-active').length; l++) {
    if (blackText != null) {
      document.getElementsByClassName('nav-active')[l].style.borderBottomColor = '#' + blackText;
    } else {
      document.getElementsByClassName('nav-active')[l].style.borderBottomColor = '';
    }
  }
}

function removeAlbumQuantity() {
  store.albums.filter(album => album.id === props.id)[0].quantity = 0;
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

      span {
        color: #A8A5A3;
        font-size: 16px;
        font-style: italic;
      }
    }

    .delete-wrapper {
      display: flex;
      font-size: 12px;
      font-family: 'Helvetica', sans-serif;
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
        text-transform: uppercase;

        &:hover {
          border-bottom: 1px solid #000;
          opacity: 0.6;
        }
      }
    }
  }

  .album-cover {
    border-radius: 5px;
    width: 100%;
    max-width: 200px;
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
    transition-duration: 0.1s;

    &.price {
      color: #A8A5A3;
    }
  }
}
</style>
