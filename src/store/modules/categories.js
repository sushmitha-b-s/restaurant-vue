import { graphqlQueries } from '../../graphql/index'
import { apolloClient } from '../../apollo'
import { graphqlMutations } from '../../graphql/index'

export const state = {
  categories: []
}

export const mutations = {
  FETCH_CATEGORIES(state, categories) {
    state.categories = categories
  },
  ADD_CATEGORY(state, category) {
    state.categories = [...state.categories, category]
  }
}

export const actions = {
  async loadCategories({ commit }) {
    const response = await apolloClient.query({
      query: graphqlQueries.categories
    })

    commit('FETCH_CATEGORIES', response.data.allCategories)
  },
  async addCategory({ commit }, category) {
    const response = await apolloClient.mutate({
      mutation: graphqlMutations.createCategory,
      variables: {
        id: category.id,
        name: category.name,
        supplier: category.supplier,
        Timings: category.Timings
      }
    })

    commit('ADD_CATEGORY', response.data.createCategory)
  }
}
