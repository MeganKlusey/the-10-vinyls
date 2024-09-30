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
    <div class="total-price">
      <div>
        <h2>Total Price:</h2>
        <p>{{ totalPrice(store.albums) }}</p>
      </div>
      <button>BUY NOW</button>
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

function totalPrice(albums) {
  let totalQuantity = 0;
  albums.forEach(album => {
    totalQuantity += album.quantity;
  })
  
  return '£' + totalQuantity * 25;
}
</script>

<style lang="scss" scoped>
.basket-container {
  display: flex;
  position: relatiive;
  
  .total-price {
    border-left: 1px solid #A8A5A3;
    background-color: #fff;
    position: fixed;
    left: 98%;
    height: 50vh;
    width: 20%;
    top: 50%;
    transform: translate(-98%, -50%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-family: 'Helvetica', sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: 2px;
      font-size: 18px;
    }

    p {
      color: #000;
      font-size: 40px;
      font-family: 'Helvetica', sans-serif;
      font-weight: 400;
      margin-top: 20px;
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
