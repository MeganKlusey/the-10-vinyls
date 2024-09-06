<template>
  <div class="quantity">
    <button>-</button>
    <input />
    <button>+</button>
  </div>
</template>

<script>
export default {
  name: 'QuantityComponent',
}
</script>

<style lang="scss" scoped>
.quantity {
  margin-top: 4px;

  input {
    height: 22px;
    border: 1px solid #78716C;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #C48D00;
    border: none;
    height: 24px;
    width: 24px;
    color: #FFF;
  }
}
</style>