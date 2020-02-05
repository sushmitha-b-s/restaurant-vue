import { categoryLists } from '../../graphql/index'
import { apolloClient } from '../../apollo'
// import RestaurantService from '@/services/RestaurantService'

export const state = {
  categories: []
}

export const mutations = {
  FETCH_CATEGORIES(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async loadCategories({ commit }) {
    const response = await apolloClient.query({
      query: categoryLists.get
    })

    commit('FETCH_CATEGORIES', response.data.allCategories)
  }
}
