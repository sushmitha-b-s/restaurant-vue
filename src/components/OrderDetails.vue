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
      <div
        v-for="order in totalOrders"
        :key="order.orderId"
        class="order-details"
      >
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

<style scoped lang="scss">
h2 {
  margin: 1rem;
  color: #6f4e37;
  font-size: 2rem;
  font-style: italic;
}
.order-details {
  border: thick double rgb(180, 176, 176);
  border-radius: 10px;
  margin: 1.5rem auto;
  padding: 1rem;
  max-width: 400px;
  border: 5px solid rgb(158, 154, 154);
  font-size: 1.5rem;
  p {
    margin: 0.5rem;
    text-align: left;
    span {
      font-weight: 700;
      text-transform: uppercase;
      color: #6f4e37;
    }
  }
  button {
    margin-top: 1rem;
    padding: 0.75rem 0.7rem;
    font-size: 1.15rem;
    background: #6f4e37;
    color: #fff;
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
    transform: scale(1);
    margin-bottom: 1rem;
    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
      transition: transform 250ms;
    }
  }
}
</style>
