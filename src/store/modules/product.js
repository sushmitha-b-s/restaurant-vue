import RestaurantService from '@/services/RestaurantService'

export const state = {
  products: []
}

export const mutations = {
  FETCH_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  loadProducts({ commit }, id) {
    RestaurantService.loadProducts(id).then(res => {
      //   console.log('res?', res)
      commit('FETCH_PRODUCTS', res.data)
    })
  }
}
