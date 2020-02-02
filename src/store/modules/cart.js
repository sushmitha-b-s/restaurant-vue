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
  }
}

export const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product)
  }
}

export const getters = {
  cartLength: state => state.addedProducts.length
}
