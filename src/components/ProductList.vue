<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <p>{{ product.productName }}</p>
      <p>
        <b>Price: {{ product.productPrice }}€</b>
      </p>

      <button @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style></style>
