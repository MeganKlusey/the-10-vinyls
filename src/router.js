import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import BasketView from './views/BasketView.vue'
import SuccessView from './views/SuccessView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/basket', component: BasketView },
  { path: '/success', component: SuccessView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router