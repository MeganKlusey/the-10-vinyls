<template>
  <div class="quantity">
    <button @click="removeQuantity">-</button>
    <input :value="store.albums.filter(album => album.id === props.id)[0].quantity" 
    min="0" max="100" type="number" step="1" @blur="handleBlur"
    @input="handleInput" @keydown="handleKeyDown" />
    <button @click="addQuantity">+</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { store } from '../../store';

let props = defineProps(['id', 'inBasket']);

function handleInput(e: Event) {
  const input = e.target as HTMLInputElement;
  const value = Number(input.value);
  const checkMaxValue = 100;
  
  if (value <= 0) {
    if (props.inBasket) {
      store.albums.filter(album => album.id === props.id)[0].quantity = 1;
      input.value = "1";
    } else {
      store.albums.filter(album => album.id === props.id)[0].quantity = 0;
      input.value = "0";
    }
  } else if (value > checkMaxValue) {
    store.albums.filter(album => album.id === props.id)[0].quantity = checkMaxValue;
    input.value = checkMaxValue.toString();
  } else {
    store.albums.filter(album => album.id === props.id)[0].quantity = Number(value);
  }
}

function handleBlur(e: Event) {
  const input = e.target as HTMLInputElement;

  if (input.value === '') {
    input.value = "00";
  }
}

function removeQuantity() {
  if (props.inBasket) {
    if (store.albums.filter(album => album.id === props.id)[0].quantity > 1) {
      store.albums.filter(album => album.id === props.id)[0].quantity--;
    }
  } else {
    if (store.albums.filter(album => album.id === props.id)[0].quantity > 0) {
      store.albums.filter(album => album.id === props.id)[0].quantity--;
    }
  }
}

function addQuantity() {
  if (store.albums.filter(album => album.id === props.id)[0].quantity < 100) {
    store.albums.filter(album => album.id === props.id)[0].quantity++;
  }
}

function handleKeyDown(e: { key: string; preventDefault: () => void }) {
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
  width: 175px;

  input {
    height: 24px;
    border: none;
    padding: 0;
    font-size: 14px;
    text-align: center;
    box-shadow: inset 0 0 2px #78716C;
    width: 100%;

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
    transition-duration: 0.1s;

    &:hover {
      opacity: 0.6;
    }

    &:first-child {
      box-shadow: -0.5px 0 1px #78716C;
    }

    &:last-child {
      box-shadow: 0.5px 0 1px #78716C;
    }
  }
}
</style>