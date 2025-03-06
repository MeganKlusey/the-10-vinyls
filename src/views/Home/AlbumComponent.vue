<template>
  <div class="album" :class="{inBasket: inBasket}">
    <h2 v-if="!inBasket">{{ id }}</h2>
    <div class="album-cover-wrapper">
      <img
      @mouseover="!inBasket && changeColour(colour, 'FFFFF0', 'FFFFF0', 'FFFFF0')"
      @mouseleave="!inBasket && changeColour()"
      :id=id class="album-cover" alt="Album cover" :src="require('../../assets/' + id + '.jpg')">
      <div class="album-back"></div>
      <div class="vinyl-wrapper">
        <img class="vinyl" src="../../assets/vinyl.png" alt="vinyl">
      </div>
      </div>
      <div class="album-text">
      <div>
        <h3>{{ name }}</h3>
        <p class="artist">{{ artist }}</p>
      </div>
      <div>
        <p v-if="!inBasket" class="price">£25</p>
        <p v-if="inBasket" class="price">£{{ 25 * quantity }} <span>(£25 each)</span></p>
        <QuantityComponent :id=id :inBasket=inBasket />
        <span class="delete-wrapper" v-if="inBasket">OR&nbsp;&nbsp;&nbsp;
        <button @click="removeAlbumQuantity" class="delete"><ion-icon name="trash-outline"></ion-icon>&nbsp;<span>Remove</span></button></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '../../store'
import { defineProps } from "vue";
import QuantityComponent from './QuantityComponent.vue';

let props = defineProps(['name', 'artist', 'colour', 'id', 'quantity', 'inBasket']);

function changeColour(bgColour: null | string = null, greyOneText: null | string = null, greyTwoText: null | string = null, blackText: null | string = null) {
  const artist = Array.from(document.getElementsByClassName('artist')) as HTMLElement[];
  const price = Array.from(document.getElementsByClassName('price')) as HTMLElement[];
  const navButtonText = Array.from(document.querySelectorAll('.nav-button-text')) as HTMLElement[];
  const navActive = Array.from(document.querySelectorAll('.nav-active')) as HTMLElement[];

  if (bgColour != null) {
    document.body.style.backgroundColor = '#' + bgColour;
  } else {
    document.body.style.backgroundColor = 'inherit';
  }
  for (var i = 0; i < artist.length; i++) {
    if (greyOneText != null) {
      artist[i].style.color = '#' + greyOneText;
    } else {
      artist[i].style.color = '';
    }
  }
  for (var j = 0; j < price.length; j++) {
    if (greyTwoText != null) {
      price[j].style.color = '#' + greyTwoText;
    } else {
      price[j].style.color = '';
    }
  }
  for (var k = 0; k < navButtonText.length; k++) {
    if (blackText != null) {
      navButtonText[k].style.color = '#' + blackText;
    } else {
      navButtonText[k].style.color = '';
    }
  }
  for (var l = 0; l < navActive.length; l++) {
    if (blackText != null) {
      navActive[l].style.borderBottomColor = '#' + blackText;
    } else {
      navActive[l].style.borderBottomColor = '';
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
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    
    @media (min-width: 640px) {
      flex-direction: row;
    }

    .album-cover-wrapper {
      max-height: none;

      .album-cover {
        &:hover {
          transform: none;
          border: none;
        }
      }

      .album-back {
        display: none;
      }

      .vinyl {
        display: none;
      }
    }

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

  .album-cover-wrapper {
    max-height: 200px;
    position: relative;

    .album-back {
      background-color: #A8A5A3;
      border-radius: 5px;
      height: 200px;
      width: 200px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition-duration: 0.2s;
      position: absolute;
      z-index: -2;
    }

    .album-cover {
      border-radius: 5px;
      width: 100%;
      max-width: 200px;
      transition-duration: 0.2s;

      &:hover {
        transform: skew(-1deg, 2deg);

        &+ .album-back {
          transform: translate(calc(-50% + 2px), calc(-50% - 1px)) skew(-1deg, 2deg);
        }

        &~ .vinyl-wrapper {
          transform: translate(calc(12% + 3.5px), -50%) skew(-1deg, 2deg);
        }
      }
    }

    .vinyl-wrapper {
      position: absolute;
      border-radius: 50%;
      height: 180px;
      width: 180px;
      top: 50%;
      left: 88%;
      transform: translate(-22%, -50%) skew(-1deg, 2deg);
      transition: 0.3s;
      pointer-events: none;
      z-index: -1;

      .vinyl {
        object-fit: cover;
        object-position: 100% 100%;
        height: 100%;
        width: 38%;
      }
    }
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
