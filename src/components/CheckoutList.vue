<template>
  <div>
    <h2>Your checkedout Items:</h2>
    <div v-for="item in checkedoutItems" :key="item.id">
      <p>{{ item.productName }}</p>
      <p>Price: {{ item.productPrice }}€</p>
      <p>Quantity: {{ item.quantity }}</p>
    </div>

    <h3>Total Price: {{ totalPrice }}€</h3>
  </div>
</template>

<script>
export default {
  props: {
    checkedoutItems: {
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
