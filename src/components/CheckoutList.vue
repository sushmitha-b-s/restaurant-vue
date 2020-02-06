<template>
  <div class="checkout-container">
    <h2>Your checked out Items:</h2>
    <p v-if="!checkedoutItems.length">are empty</p>
    <div v-for="item in checkedoutItems" :key="item.id" class="checkout">
      <p>{{ item.productName }}</p>
      <p><b>Price( /per ): </b>{{ item.productPrice }}€</p>
      <p><b>Quantity: </b>{{ item.quantity }}</p>
      <br />
    </div>

    <h3 v-if="checkedoutItems.length">
      Total Price: {{ parseFloat(totalPrice).toFixed(2) }}€
    </h3>
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

<style scoped lang="scss">
.checkout-container {
  margin: 1rem;
  p {
    margin: 0.7rem auto;
    font-size: 1.25rem;
  }
}
.checkout {
  border: thick double rgb(180, 176, 176);
  border-radius: 10px;
  margin: 1.5rem auto;
  padding: 1rem;
  max-width: 400px;
  p {
    font-size: 1.5rem;
  }
}
h3 {
  font-size: 1.7rem;
}
</style>
