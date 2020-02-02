<template>
  <div>
    <CartList :addedProducts="addedProducts" :totalPrice="totalPrice" />
  </div>
</template>

<script>
import CartList from '../components/CartList'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    CartList
  },
  methods: {
    ...mapActions(['addToCart'])
  },
  created() {
    this.addToCart()
  },
  computed: {
    ...mapState({
      addedProducts: state => state.cart.addedProducts,
      totalPrice: state => state.cart.total
    })
  }
}
</script>

<style></style>
