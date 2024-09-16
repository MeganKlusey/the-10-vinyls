<template>
  <header>
    <img id="logo" alt="The 10 Vinyls logo" src="./assets/logo.png">
    <a id="basket" href="/basket">
      <ion-icon class="basket-icon" name="cart-outline"></ion-icon>
      <span class="basket-text">Basket</span>
      ({{ store.totalQuantity }})
    </a>
  </header>
  <HomeComponent @quantity="updateQuantity" />
</template>

<script setup>
import { store } from './store.js'
import { ref } from 'vue'
import HomeComponent from './components/HomeComponent.vue'

let quantity = ref(0);

function updateQuantity(newQuantity) {
  quantity.value = newQuantity;
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
