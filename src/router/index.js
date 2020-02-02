import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryContainer from '../views/CategoryContainer.vue'
import ProductsContainer from '../views/ProductsContainer.vue'
import CartContainer from '../views/CartContainer.vue'

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
  },
  {
    path: '/cart',
    name: 'my-cart',
    component: CartContainer
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
