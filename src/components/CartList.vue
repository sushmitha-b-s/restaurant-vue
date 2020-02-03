<template>
  <div>
    <div v-for="product in addedProducts" :key="product.id">
      <p>Name: {{ product.productName }}</p>
      <p>Price: {{ product.productPrice }}€</p>
      <p>
        <b>Quantity: {{ product.quantity }}</b>
      </p>

      <button @click="addQuantity(product.id)">+</button>
      <button @click="subtractQuantity(product.id)">-</button>

      <br />
    </div>

    <div v-if="totalPrice != 0">
      <h2>Total Price: {{ totalPrice }}€</h2>

      <router-link :to="{ name: 'checkout' }">
        <button
          :disabled="totalPrice < 10"
          :class="{ disableCheckout: totalPrice < 10 }"
        >
          Checkout
        </button>
      </router-link>
      <p v-if="totalPrice < 10">{{ message }}</p>
    </div>
    <div v-else>Your cart is empty. Please go to MENU to order.</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    addedProducts: {
      type: Array,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      message: 'Please add minimun of 10€ to checkout'
    }
  },
  methods: {
    ...mapActions(['addQuantity', 'subtractQuantity'])
  }
}
</script>

<style scoped>
.disableCheckout {
  background-color: #d8d8d8;
}
</style>
