<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'categories' }" class="li-link"
            >Order more</router-link
          >
        </li>
      </ul>
    </nav>

    <h2>You have ordered</h2>

    <div v-if="totalOrders.length !== 0">
      <div v-for="order in totalOrders" :key="order.orderId">
        <p><span>Order Id: </span>{{ order.orderId }}</p>
        <p><span>Email: </span>{{ order.personInfo.email }}</p>
        <p>
          <span>Delivery Address: </span>{{ order.personInfo.deliveryAddress }}
        </p>

        <br />
        <div v-for="product in order.orderedProducts" :key="product.id">
          <p><span>Product: </span>{{ product.productName }}</p>
          <p><span>Price: </span>{{ product.productPrice }}</p>
          <p><span>Quantity: </span>{{ product.quantity }}</p>
          <br />
        </div>

        <button @click="deleteOrder(order.orderId)">Delete order</button>
        <br />
      </div>
    </div>
    <div v-else>Nothing</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    totalOrders: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(['deleteOrder'])
  }
}
</script>

<style scoped>
span {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
