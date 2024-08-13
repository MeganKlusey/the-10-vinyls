<template>
  <ol>
    <li
      v-bind:key="album.name"
      v-for="album in albums">
      <AlbumComponent
        :name=album.name
        :artist=album.artist
        :image=album.image
        :id=album.id
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
      { name: 'The Miseducation of Lauryn Hill',
        artist: 'Lauryn Hill',
        id: 1
      },
      { name: 'Thriller',
        artist: 'Michael Jackson',
        id: 2
      },
      { name: 'Abbey Road',
        artist: 'The Beatles',
        id: 3
      },
      { name: 'Purple Rain',
        artist: 'Prince',
        id: 4
      },
      { name: 'Blonde',
        artist: 'Frank Ocean',
        id: 5
      },
      { name: 'Songs in the Key of Life',
        artist: 'Stevie Wonder',
        id: 6
      },
      { name: 'good kid, m.A.A.d city (Deluxe Version)',
        artist: 'Kendrick Lamar',
        id: 7
      },
      { name: 'Back to Black',
        artist: 'Amy Winehouse',
        id: 8
      },
      { name: 'Nevermind',
        artist: 'Nirvana',
        id: 9
      },
      { name: 'Lemonade',
        artist: 'Beyoncé',
        id: 10
      }
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
