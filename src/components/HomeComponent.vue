<template>
  <ol>
    <li
      v-bind:key="album.name"
      v-for="album in albums">
      <AlbumComponent
        :name=album.name
        :artist=album.artist
        :image=album.image
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
        image: ''
      },
      { name: 'Thriller',
        artist: 'Michael Jackson',
        image: ''
      },
      { name: 'Abbey Road',
        artist: 'The Beatles',
        image: ''
      },
      { name: 'Purple Rain',
        artist: 'Prince',
        image: ''
      },
      { name: 'Blonde',
        artist: 'Frank Ocean',
        image: ''
      },
      { name: 'Songs in the Key of Life',
        artist: 'Stevie Wonder',
        image: ''
      },
      { name: 'good kid, m.A.A.d city (Deluxe Version)',
        artist: 'Kendrick Lamar',
        image: ''
      },
      { name: 'Back to Black',
        artist: 'Amy Winehouse',
        image: ''
      },
      { name: 'Nevermind',
        artist: 'Nirvana',
        image: ''
      },
      { name: 'Lemonade',
        artist: 'Beyoncé',
        image: ''
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
