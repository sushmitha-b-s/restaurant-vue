import Vue from 'vue'
import Vuex from 'vuex'
import * as categories from './modules/categories'
import * as product from './modules/product'
import * as cart from './modules/cart'
import * as orders from './modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    product,
    cart,
    orders
  }
})
