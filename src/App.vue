<template>
  <img id="logo" alt="The 10 Vinyls logo" src="./assets/logo.png">
  <HomeComponent />
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style lang="scss">
body {
  transition-duration: 0.4s;

  #logo {
    display: block;
    margin: 0 auto;
    width: 150px;
  }
}
</style>
