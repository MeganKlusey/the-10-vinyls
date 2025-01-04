<template>
  <ol>
    <li
      v-bind:key="album.name"
      v-for="album in store.albums">
      <AlbumComponent
        :name=album.name
        :artist=album.artist
        :colour=album.colour
        :quantity=album.quantity
        :id=album.id
      />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { store } from '../store'
import AlbumComponent from './Home/AlbumComponent.vue'
</script>

<style lang="scss" scoped>
ol {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin: 100px 0;
  row-gap: 100px;

  li {
    list-style-type: none;
    flex-basis: 100%;

    @media only screen and (min-width: 1024px) {
      &:nth-child(1), &:nth-child(2), &:nth-child(3),
      &:nth-child(6), &:nth-child(7), &:nth-child(8) {
        flex-basis: 33.3%;
      }

      &:nth-child(4), &:nth-child(5),
      &:nth-child(9), &:nth-child(10) {
        flex-basis: 34%;
      }
    }

    @media only screen and (min-width: 768px) {
      flex-basis: 50%;
    }
  }
}
</style>
