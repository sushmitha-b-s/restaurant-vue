import { graphqlQueries } from '../../graphql/index'
import { apolloClient } from '../../apollo'
import { graphqlMutations } from '../../graphql/index'

export const state = {
  products: []
}

export const mutations = {
  FETCH_PRODUCTS(state, products) {
    state.products = products
  },
  ADD_PRODUCT(state, product) {
    state.products = [...state.products, product]
  }
}

export const actions = {
  async loadProducts({ commit }, id) {
    const response = await apolloClient.query({
      query: graphqlQueries.products,
      variables: {
        category_id: id
      }
    })

    commit('FETCH_PRODUCTS', response.data.Category.Products)
  },
  async addProduct({ commit }, product) {
    const response = await apolloClient.mutate({
      mutation: graphqlMutations.createProduct,
      variables: {
        id: product.id,
        productName: product.productName,
        productPrice: product.productPrice,
        Ingredients: product.Ingredients,
        category_id: product.category_id
      }
    })

    commit('ADD_PRODUCT', response.data.createProduct)
  }
}
