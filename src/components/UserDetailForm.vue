<template>
  <div>
    <UserDetail @form-submitted="onSubmit" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserDetail from './UserDetail'
export default {
  components: {
    UserDetail
  },
  methods: {
    onSubmit(personInfo) {
      this.orderProducts({
        orderedProducts: this.orderedProducts,
        totalPrice: this.totalPrice,
        personInfo
      }).then(() => {
        this.$router.push({
          name: 'my-orders'
        })
      })
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
