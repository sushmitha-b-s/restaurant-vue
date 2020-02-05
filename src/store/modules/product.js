import { categoryLists } from '../../graphql/index'
import { apolloClient } from '../../apollo'

export const state = {
  products: []
}

export const mutations = {
  FETCH_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  async loadProducts({ commit }, id) {
    const response = await apolloClient.query({
      query: categoryLists.products,
      variables: {
        category_id: id
      }
    })

    commit('FETCH_PRODUCTS', response.data.Category.Products)
  }
}
