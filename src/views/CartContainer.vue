<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'categories' }" class="li-link"
            >Menu</router-link
          >

          <router-link :to="{ name: 'categories' }" class="li-link"
            >Menu</router-link
          >
        </li>
      </ul>
    </nav>
    <CartList :addedProducts="addedProducts" :totalPrice="totalPrice" />
  </div>
</template>

<script>
import CartList from '../components/CartList'
import { mapState } from 'vuex'
export default {
  components: {
    CartList
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
