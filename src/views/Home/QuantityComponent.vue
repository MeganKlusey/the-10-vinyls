<template>
  <div class="quantity">
    <button @click="removeQuantity">-</button>
    <input :value="store.albums.filter(album => album.id === props.id)[0].quantity" 
    min="0" type="number" step="1" @blur="handleBlur"
    @input="handleInput" @keydown="handleKeyDown" />
    <button @click="addQuantity">+</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { store } from '../../store.js'

let props = defineProps(['id']);

function handleInput(e) {
  const value = e.target.value;
  const checkValue = "00";
  
  if (value < 0 || String(value).startsWith(checkValue)) {
    store.albums.filter(album => album.id === props.id)[0].quantity = 0;
    e.target.value = 0;
  } else {
    store.albums.filter(album => album.id === props.id)[0].quantity = Number(value);
  }
}

function handleBlur(e) {
  if (e.target.value === '') {
    e.target.value = 0;
  }
}

function removeQuantity() {
  if(store.albums.filter(album => album.id === props.id)[0].quantity > 0) {
    store.albums.filter(album => album.id === props.id)[0].quantity--;
    store.totalQuantity--;
  }
}

function addQuantity() {
  store.albums.filter(album => album.id === props.id)[0].quantity++;
  store.totalQuantity++;
}

function handleKeyDown(e) {
  if (e.key === '-') {
    e.preventDefault();
  }
}
</script>

<style lang="scss" scoped>
.quantity {
  display: flex;
  justify-content: center;
  margin-top: 4px;

  input {
    height: 24px;
    border: none;
    padding: 0;
    text-align: center;
    box-shadow: inset 0 0 2px #78716C;
    width: 50%;

    &::-webkit-inner-spin-button {
      appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #C48D00;
    cursor: pointer;
    border: none;
    height: 24px;
    width: 24px;
    color: #FFFFF0;
    font-weight: bold;

    &:first-child {
      box-shadow: -0.5px 0 1px #78716C;
    }

    &:last-child {
      box-shadow: 0.5px 0 1px #78716C;
    }
  }
}
</style>