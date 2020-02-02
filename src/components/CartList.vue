<template>
  <div>
    <div v-for="product in addedProducts" :key="product.id">
      <p>Name: {{ product.productName }}</p>
      <p>Price: {{ product.productPrice }}€</p>
      <p>
        <b>Quantity: {{ product.quantity }}</b>
      </p>

      <br />
    </div>

    <h2>Total Price: {{ totalPrice }}€</h2>
  </div>
</template>

<script>
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
  }
}
</script>

<style></style>
