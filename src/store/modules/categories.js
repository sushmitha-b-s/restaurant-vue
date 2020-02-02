import RestaurantService from '@/services/RestaurantService'

export const state = {
  categories: []
}

export const mutations = {
  FETCH_CATEGORIES(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  loadCategories({ commit }) {
    RestaurantService.loadCategories().then(res => {
      //   console.log('res?', res)
      commit('FETCH_CATEGORIES', res.data)
    })
  }
}
