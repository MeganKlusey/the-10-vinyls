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
          :quantity=album.quantity
          :id=album.id
          :inBasket=true
        />
      </li>
    </ul>
    <div class="total-price">
      <div>
        <h2>Total Price:</h2>
        <p>{{ totalPrice(store.albums) }}</p>
      </div>
      <RouterLink to="/success" id="success">
        <button @click="resetTotalQuantity(store.albums)">Buy now</button>
      </RouterLink>
    </div>
  </div>
  <div v-if="store.albums.filter(album => album.quantity).length == 0"
  class="empty-basket-container">
    <p>Your basket is empty.</p>
  </div>
</template>

<script setup lang="ts">
import { store } from '../store'
import AlbumComponent from './Home/AlbumComponent.vue'

type album = {name: string, artist: string, colour: string, id: number, quantity: number}[];

function totalPrice(albums: album) {
  let totalQuantity = 0;
  albums.forEach(album => {
    totalQuantity += album.quantity;
  })
  
  return '£' + totalQuantity * 25;
}

function resetTotalQuantity(albums: album) {
  albums.forEach(album => {
    album.quantity = 0;
  })
}
</script>

<style lang="scss" scoped>
.basket-container {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
  
  .total-price {
    border-top: 1px solid #A8A5A3;
    border-left: none;
    background-color: #fff;
    position: relative;
    height: 35vh;
    width: auto;
    padding: 20px;
    margin: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1024px) {
      border-left: 1px solid #A8A5A3;
      border-top: none;
      position: fixed;
      height: 50vh;
      top: 50%;
      left: 98%;
      margin: 0;
      padding-right: 8px;
      transform: translate(-98%, -50%);
      width: 20%;
    }

    h2 {
      font-family: 'Helvetica', sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: 2px;
      font-size: 18px;
      text-align: right;

      @media (min-width: 1024px) {
        text-align: left;
      }
    }

    p {
      color: #000;
      font-size: 40px;
      font-family: 'Helvetica', sans-serif;
      font-weight: 400;
      margin-top: 20px;
      text-align: right;

      @media (min-width: 1024px) {
        text-align: left;
      }
    }

    button {
      background-color: #C48D00;
      cursor: pointer;
      border: none;
      font-size: 18px;
      letter-spacing: 2px;
      color: #FFFFF0;
      height: 44px;
      width: 100%;
      transition-duration: 0.1s;
      text-transform: uppercase;

      &:hover {
        opacity: 0.6;
      }
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
