import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryContainer from '../views/CategoryContainer.vue'
import ProductsContainer from '../views/ProductsContainer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categories',
    component: CategoryContainer
  },
  {
    path: '/category:id',
    name: 'products',
    component: ProductsContainer,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
