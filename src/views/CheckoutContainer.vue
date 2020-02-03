<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'my-orders' }">My Orders</router-link>
        </li>
      </ul>
    </nav>

    <CheckoutList :checkedoutItems="CheckedoutItems" :totalPrice="totalPrice" />

    <UserDetailForm />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CheckoutList from '../components/CheckoutList'
import UserDetailForm from '../components/UserDetailForm'
export default {
  components: {
    CheckoutList,
    UserDetailForm
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
