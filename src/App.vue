<template>
  <header>
    <img id="logo" alt="The 10 Vinyls logo" src="./assets/logo.png">
    <a id="basket" href="/basket">Basket ()</a>
  </header>
  <HomeComponent />
</template>

<script setup>
import HomeComponent from './components/HomeComponent.vue'
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
    }
  }
}
</style>
