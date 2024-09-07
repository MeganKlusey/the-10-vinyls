<template>
  <div class="quantity">
    <button>-</button>
    <input value="0" />
    <button>+</button>
  </div>
</template>

<script setup>
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