import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryContainer from '../views/CategoryContainer.vue'
import ProductsContainer from '../views/ProductsContainer.vue'
import CartContainer from '../views/CartContainer.vue'
import CheckoutContainer from '../views/CheckoutContainer.vue'
import OrderDetailsContainer from '../views/OrderDetailsContainer.vue'

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
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutContainer
  },
  {
    path: '/orders',
    name: 'my-orders',
    component: OrderDetailsContainer
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
