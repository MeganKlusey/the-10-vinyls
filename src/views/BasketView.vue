<template>
    <ul v-if="store.albums.filter(album => album.quantity).length > 0">
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
