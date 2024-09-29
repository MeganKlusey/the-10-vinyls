<template>
  <div class="basket-container"
  v-if="store.albums.filter(album => album.quantity).length > 0">
    <ul>
      <li
        v-bind:key="album.name"
        v-for="album in store.albums.filter(album => album.quantity > 0)"
        >
        <AlbumComponent
          :name=album.name
          :artist=album.artist
          :colour=album.colour
          :id=album.id
          :inBasket=true
        />
      </li>
    </ul>
    <div class="order-summary">
      <h2>Order Summary:</h2>
    </div>
  </div>
  <div v-if="store.albums.filter(album => album.quantity).length == 0"
  class="empty-basket-container">
    <p>Your basket is empty.</p>
  </div>
</template>

<script setup>
import { store } from '../store.js'
import AlbumComponent from './Home/AlbumComponent'
</script>

<style lang="scss" scoped>
.basket-container {
  display: flex;
  position: relatiive;
  
  .order-summary {
    border-left: 1px solid #A8A5A3;
    background-color: #fff;
    position: fixed;
    left: 98%;
    height: 50vh;
    width: 20%;
    top: 50%;
    transform: translate(-98%, -50%);
    padding: 20px;

    h2 {
      font-family: 'Helvetica', sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: 2px;
      font-size: 18px;
    }
  }
}

.empty-basket-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 116px);

  p {
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
}
</style>
