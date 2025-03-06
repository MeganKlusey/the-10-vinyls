<template>
  <header>
    <RouterLink to="/" id="home" class="nav-button" activeClass="nav-active">
      <span class="nav-button-text home-text"><ion-icon class="home-icon" name="home-outline"></ion-icon>&nbsp;Home</span>
    </RouterLink>
    <RouterLink to="/" id="logo-wrapper">
      <img id="logo" alt="The 10 Vinyls logo" src="./assets/logo.png">
    </RouterLink>
    <RouterLink to="/basket" id="basket" class="nav-button" activeClass="nav-active">
      <span class="nav-button-text"><ion-icon class="basket-icon" name="cart-outline"></ion-icon><span class="basket-text">&nbsp;Basket</span>&nbsp;({{ totalQuantity(store.albums) }})</span>
    </RouterLink>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { store } from './store'

type album = {name: string, artist: string, colour: string, id: number, quantity: number}[];

function totalQuantity(albums: album) {
  let totalQuantity = 0;
  albums.forEach(album => {
    totalQuantity += album.quantity;
  })
  return totalQuantity;
}
</script>

<style lang="scss">
body {
  transition-duration: 0.4s;
  min-height: calc(100vh - 16px);

  header {
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;

    #logo-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      #logo {
        display: block;
        margin: 0 auto;
        transition-duration: 0.1s;
        width: 150px;

        &:hover {
          opacity: 0.6;
        }
      }
    }

    .nav-button {
      border-bottom: 1px solid transparent;

      &#home {
        display: flex;
        align-items: center;
        gap: 4px;
        position: absolute;
        top: 50%;
        left: 2%;
        transform: translate(-2%, -50%);
        white-space: nowrap;
        font-family: 'Helvetica', sans-serif;
        font-weight: 400;
        margin: 0;
        text-transform: uppercase;
        color: #000;
        letter-spacing: 2px;
        text-decoration: none;
      }

      &#basket {
        display: flex;
        align-items: center;
        gap: 4px;
        position: absolute;
        top: 50%;
        left: 98%;
        transform: translate(-98%, -50%);
        white-space: nowrap;
        font-family: 'Helvetica', sans-serif;
        font-weight: 400;
        margin: 0;
        text-transform: uppercase;
        color: #000;
        letter-spacing: 2px;
        text-decoration: none;

        .basket-text {
          display: none;

          @media only screen and (min-width: 640px) {
            display: flex;
            align-items: center;
          }
        }
      }

      &:hover {
        opacity: 0.6;
      }

      .nav-button-text {
        display: flex;
        align-items: center;

        &:not(.basket-text) {
          transition-duration: 0.1s;
        }
      }

      &.nav-active {
        border-bottom: 1px solid #000;
        transition-duration: 0.1s;
      }
    }
  }
}
</style>
