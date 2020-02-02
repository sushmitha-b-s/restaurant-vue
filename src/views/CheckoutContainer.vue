<template>
  <div>
    <CheckoutList :checkedoutItems="CheckedoutItems" :totalPrice="totalPrice" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CheckoutList from '../components/CheckoutList'
export default {
  components: {
    CheckoutList
  },
  computed: {
    ...mapState({
      CheckedoutItems: state => state.cart.addedProducts,
      totalPrice: state => state.cart.total
    })
  }
}
</script>

<style></style>
