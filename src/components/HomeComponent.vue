<template>
  <ol>
    <li
      v-bind:key="album.name"
      v-for="album in albums">
      <AlbumComponent
        :name=album.name
        :artist=album.artist
        :colour=album.colour
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
        colour: 'EB7D4C',
        id: 1
      },
      { name: 'Thriller',
        artist: 'Michael Jackson',
        colour: '9ABCC1',
        id: 2
      },
      { name: 'Abbey Road',
        artist: 'The Beatles',
        colour: '8ACDE7',
        id: 3
      },
      { name: 'Purple Rain',
        artist: 'Prince',
        colour: '4E389B',
        id: 4
      },
      { name: 'Blonde',
        artist: 'Frank Ocean',
        colour: '0B5425',
        id: 5
      },
      { name: 'Songs in the Key of Life',
        artist: 'Stevie Wonder',
        colour: 'D84336',
        id: 6
      },
      { name: 'good kid, m.A.A.d city (Deluxe Version)',
        artist: 'Kendrick Lamar',
        colour: '698871',
        id: 7
      },
      { name: 'Back to Black',
        artist: 'Amy Winehouse',
        colour: '1E3145',
        id: 8
      },
      { name: 'Nevermind',
        artist: 'Nirvana',
        colour: '46C9E2',
        id: 9
      },
      { name: 'Lemonade',
        artist: 'Beyoncé',
        colour: '2D5F5B',
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

    &:nth-child(1) {
      flex-basis: 33.3%;
    }

    &:nth-child(2) {
      flex-basis: 33.3%;
    }

    &:nth-child(3) {
      flex-basis: 33.3%;
    }

    &:nth-child(4) {
      flex-basis: 34%;
    }

    &:nth-child(5) {
      flex-basis: 34%;
    }

    &:nth-child(6) {
      flex-basis: 33.3%;
    }

    &:nth-child(7) {
      flex-basis: 33.3%;
    }

    &:nth-child(8) {
      flex-basis: 33.3%;
    }

    &:nth-child(9) {
      flex-basis: 34%;
    }

    &:nth-child(10) {
      flex-basis: 34%;
    }
  }
}
</style>
