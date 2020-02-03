<template>
  <div>
    <OrderDetails :totalOrders="totalOrders" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrderDetails from '../components/OrderDetails'
export default {
  components: {
    OrderDetails
  },
  computed: {
    ...mapState({
      totalOrders: state => state.orders.orders
    })
  }
}
</script>

<style></style>
