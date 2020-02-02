<template>
  <div>
    <form @submit.prevent="onSubmit">
      <p>
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email Address"
        />
      </p>

      <p>
        <label for="address">Address:</label>
        <textarea
          id="address"
          v-model="address"
          placeholder="Delivery Address"
        />
      </p>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      address: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('submitted')
      this.orderProducts({
        orderedProducts: this.orderedProducts,
        totalPrice: this.totalPrice,
        email: this.email,
        deliveryAddress: this.address
      })

      this.email = ''
      this.address = ''
    },
    ...mapActions(['orderProducts'])
  },
  computed: {
    ...mapState({
      orderedProducts: state => state.cart.addedProducts,
      totalPrice: state => state.cart.total
    })
  }
}
</script>

<style></style>
