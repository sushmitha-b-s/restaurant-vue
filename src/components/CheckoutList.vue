<template>
  <div class="checkout-container">
    <h2>Your checked out Items:</h2>
    <div v-for="item in checkedoutItems" :key="item.id" class="checkout">
      <p>{{ item.productName }}</p>
      <p>Price: {{ item.productPrice }}€</p>
      <p>Quantity: {{ item.quantity }}</p>
      <br />
    </div>

    <h3>Total Price: {{ parseFloat(totalPrice).toFixed(2) }}€</h3>
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
