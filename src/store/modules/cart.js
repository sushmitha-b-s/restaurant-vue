export const state = {
  addedProducts: [],
  total: 0
}

export const mutations = {
  ADD_TO_CART(state, product) {
    let addedProduct = product

    let existedProduct = state.addedProducts.find(
      product => product.id === addedProduct.id
    )

    if (existedProduct) {
      addedProduct.quantity += 1

      state.total = state.total + addedProduct.productPrice
    } else {
      addedProduct.quantity = 1

      state.addedProducts = [...state.addedProducts, addedProduct]
      state.total = state.total + addedProduct.productPrice
    }
  },
  ADD_QUANTITY(state, id) {
    let addedItem = state.addedProducts.find(product => product.id === id)

    addedItem.quantity += 1
    state.total = state.total + addedItem.productPrice
  }
}

export const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product)
  },
  addQuantity({ commit }, id) {
    commit('ADD_QUANTITY', id)
  }
}

export const getters = {
  cartLength: state => state.addedProducts.length
}
