<template>
  <ol>
    <li
      v-bind:key="album.name"
      v-for="album in albums">
      <AlbumComponent
        :name=album.name
      />
    </li>
  </ol>
</template>

<script>
import { ref } from 'vue'
import AlbumComponent from './Home/AlbumComponent'

export default {
  name: 'HomeComponent',
  components: {
    AlbumComponent
  },
  setup() {
    const albums = ref([
      { name: 'The Miseducation of Lauryn Hill' },
      { name: 'Thriller' },
      { name: 'Abbey Road' },
      { name: 'Purple Rain' },
      { name: 'Blonde' },
      { name: 'Songs in the Key of Life' },
      { name: 'good kid, m.A.A.d city (Deluxe Version)' },
      { name: 'Back to Black' },
      { name: 'Nevermind' },
      { name: 'Lemonade' }
    ])
    return {
      albums
    }
  }
}
</script>

<style lang="scss" scoped>
ol li {
  list-style-type: none;
}
</style>
