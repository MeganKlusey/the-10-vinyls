<template>
  <header>
    <RouterLink to="/" id="home" class="nav-button" activeClass="nav-active">
      <ion-icon class="home-icon" name="home-outline"></ion-icon>
      <span class="nav-button-text home-text">Home</span>
    </RouterLink>
    <RouterLink to="/">
      <img id="logo" alt="The 10 Vinyls logo" src="./assets/logo.png">
    </RouterLink>
    <RouterLink to="/basket" id="basket" class="nav-button" activeClass="nav-active">
      <ion-icon class="basket-icon" name="cart-outline"></ion-icon>
      <span class="nav-button-text basket-text">Basket</span>
      ({{ totalQuantity(store.albums) }})
    </RouterLink>
  </header>
  <RouterView />
</template>

<script setup>
import { store } from './store.js'

function totalQuantity(albums) {
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

  header {
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;

    #logo {
      display: block;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
    }

    .nav-button {
      transition-duration: 0.15s;
      border-bottom: 1px solid transparent;

      span {
        transition-duration: 0.15s;
      }

      &.nav-active {
        border-bottom: 1px solid #000;
      }
    }

    #home {
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

    #basket {
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
          display: block;
        }
      }
    }
  }
}
</style>
