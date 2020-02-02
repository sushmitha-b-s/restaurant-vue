import Vue from 'vue'
import Vuex from 'vuex'
import * as categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories
  }
})
