import { reactive } from 'vue'

export const store = reactive({
  albums: [
    { name: 'The Miseducation of Lauryn Hill',
      artist: 'Lauryn Hill',
      colour: 'EB7D4C',
      id: 1,
      quantity: 0
    },
    { name: 'Thriller',
      artist: 'Michael Jackson',
      colour: '9ABCC1',
      id: 2,
      quantity: 0
    },
    { name: 'Abbey Road',
      artist: 'The Beatles',
      colour: '8ACDE7',
      id: 3,
      quantity: 0
    },
    { name: 'Purple Rain',
      artist: 'Prince',
      colour: '4E389B',
      id: 4,
      quantity: 0
    },
    { name: 'Blonde',
      artist: 'Frank Ocean',
      colour: '0B5425',
      id: 5,
      quantity: 0
    },
    { name: 'Songs in the Key of Life',
      artist: 'Stevie Wonder',
      colour: 'D84336',
      id: 6,
      quantity: 0
    },
    { name: 'good kid, m.A.A.d city (Deluxe Version)',
      artist: 'Kendrick Lamar',
      colour: '698871',
      id: 7,
      quantity: 0
    },
    { name: 'Back to Black',
      artist: 'Amy Winehouse',
      colour: '1E3145',
      id: 8,
      quantity: 0
    },
    { name: 'Nevermind',
      artist: 'Nirvana',
      colour: '46C9E2',
      id: 9,
      quantity: 0
    },
    { name: 'Lemonade',
      artist: 'Beyoncé',
      colour: '2D5F5B',
      id: 10,
      quantity: 0
    }
  ]
})