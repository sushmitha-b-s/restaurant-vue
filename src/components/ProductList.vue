<template>
  <div class="product-container">
    <div v-for="product in products" :key="product.id" class="product">
      <p>{{ product.productName }}</p>
      <p>
        <b>Price: {{ product.productPrice }}€</b>
      </p>

      <button @click="addToCart(product)">Add to cart</button>
    </div>

    <CreateProduct />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CreateProduct from './CreateProduct'
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    CreateProduct
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style scoped lang="scss">
.product {
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
  }
}
</style>
