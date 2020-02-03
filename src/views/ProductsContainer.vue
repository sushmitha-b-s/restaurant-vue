<template>
  <div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'categories' }">Menu</router-link></li>
        <li>
          <router-link :to="{ name: 'my-cart' }"
            >My Cart ({{ cartLength }})</router-link
          >
        </li>
      </ul>
    </nav>

    <ProductList :products="products" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import ProductList from '../components/ProductList'
export default {
  components: {
    ProductList
  },
  created() {
    this.loadProducts(this.$route.params.id)
  },
  methods: {
    ...mapActions(['loadProducts'])
  },
  computed: {
    ...mapState({
      products: state => state.product.products
    }),
    ...mapGetters(['cartLength'])
  }
}
</script>

<style></style>
