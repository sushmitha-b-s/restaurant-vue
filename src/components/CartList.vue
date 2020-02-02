<template>
  <div>
    <div v-for="product in addedProducts" :key="product.id">
      <p>Name: {{ product.productName }}</p>
      <p>Price: {{ product.productPrice }}€</p>
      <p>
        <b>Quantity: {{ product.quantity }}</b>
      </p>

      <button @click="addQuantity(product.id)">+</button>
      <button>-</button>

      <br />
    </div>

    <h2>Total Price: {{ totalPrice }}€</h2>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    addedProducts: {
      type: Array,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    }
  },
  methods: {
    addQuantity(id) {
      //   console.log('add product of this id??', id)
      this.addQuantity(id)
    },
    ...mapActions(['addQuantity'])
  }
}
</script>

<style></style>
