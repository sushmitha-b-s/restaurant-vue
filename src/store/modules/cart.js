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
  },
  SUBTRACT_QUANTITY(state, id) {
    let subtractedItem = state.addedProducts.find(product => product.id === id)

    if (subtractedItem.quantity === 1) {
      state.addedProducts = state.addedProducts.filter(
        product => product.id !== subtractedItem.id
      )
      state.total = state.total - subtractedItem.productPrice
    } else {
      subtractedItem.quantity -= 1
      state.total = state.total - subtractedItem.productPrice
    }
  }
}

export const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product)
  },
  addQuantity({ commit }, id) {
    commit('ADD_QUANTITY', id)
  },
  subtractQuantity({ commit }, id) {
    commit('SUBTRACT_QUANTITY', id)
  }
}

export const getters = {
  cartLength: state => state.addedProducts.length
}
