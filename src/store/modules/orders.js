export const state = {
  orders: []
}

export const mutations = {
  ORDER_PRODUCTS(state, data) {
    let orderedItem = data

    orderedItem.orderId = state.orders.length + 1

    state.orders.push(orderedItem)
  }
}

export const actions = {
  orderProducts({ commit }, data) {
    commit('ORDER_PRODUCTS', data)
  }
}
