<template>
  <div class="success-container">
    <p>Thank you, your order has been placed.</p>
    <RouterLink to="/" id="back-to-home">
      <span><ion-icon class="home-icon" name="home-outline"></ion-icon>&nbsp;Go back to Home</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.success-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 116px);

  p {
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    margin: 0;
    text-align: center;
  }

  #back-to-home {
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    color: #C48D00;
    letter-spacing: 2px;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    span {
      display: flex;
      align-items: center;
    }

    &:hover {
      border-bottom: 1px solid #C48D00;
      opacity: 0.6;
    }
  }
}
</style>
