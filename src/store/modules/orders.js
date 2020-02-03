export const state = {
  orders: []
}

export const mutations = {
  ORDER_PRODUCTS(state, data) {
    let orderedItem = data

    orderedItem.orderId = state.orders.length + 1

    state.orders.push(orderedItem)
  },
  DELETE_ORDER(state, id) {
    state.orders = state.orders.filter(order => order.orderId !== id)
  }
}

export const actions = {
  orderProducts({ commit }, data) {
    commit('ORDER_PRODUCTS', data)
  },
  deleteOrder({ commit }, id) {
    commit('DELETE_ORDER', id)
  }
}
