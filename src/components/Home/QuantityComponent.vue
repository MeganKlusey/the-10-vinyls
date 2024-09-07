<template>
  <div class="quantity">
    <button @click="quantity > 0 && quantity--">-</button>
    <input v-model.number="quantity" min="0" type="number" step="1"
    @input="handleInput" @keydown="handleKeyDown" />
    <button @click="quantity++">+</button>
  </div>
  {{minReached}}
</template>

<script setup>
import { ref } from 'vue'

let quantity = ref(0);

function handleInput(e) {
  const value = e.target.value;
  const checkValue = parseInt('00');
  
  if (value < 0 || String(value).startsWith(checkValue)) {
    quantity.value = 0;
    e.target.value = 0;
  } else {
    quantity.value = Number(value);
  }
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