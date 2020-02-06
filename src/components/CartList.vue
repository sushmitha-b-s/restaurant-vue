<template>
  <div class="cart-container">
    <div v-for="product in addedProducts" :key="product.id" class="cart">
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
      <h2>Total Price: {{ parseFloat(totalPrice).toFixed(2) }}€</h2>

      <router-link :to="{ name: 'checkout' }">
        <button
          class="checkout-button"
          :disabled="totalPrice < 10"
          :class="{ disableCheckout: totalPrice < 10 }"
        >
          Checkout
        </button>
      </router-link>
      <p v-if="totalPrice < 10" class="message">{{ message }}</p>
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

<style scoped lang="scss">
.cart {
  border: thick double rgb(180, 176, 176);
  border-radius: 10px;
  margin: 1.5rem auto;
  padding: 1rem;
  max-width: 400px;
  p {
    font-size: 1.5rem;
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
    &:hover,
    &:focus {
      cursor: pointer;
      transform: scale(1.1);
      transition: transform 250ms;
    }
    margin: 0.2rem;
    padding: 0.75rem 1rem;
  }
}
.message {
  font-size: 1.3rem;
  margin: 1em;
  color: red;
}
.checkout-button {
  margin-top: 1rem;
  padding: 0.75rem 0.7rem;
  font-size: 1.15rem;
  background: #6f4e37;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  transform: scale(1);
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 250ms;
  }
}
.disableCheckout {
  background-color: #d8d8d8;
}
</style>
