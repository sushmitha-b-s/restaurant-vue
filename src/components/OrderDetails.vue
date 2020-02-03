<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'categories' }">Order more</router-link>
        </li>
      </ul>
    </nav>

    <h2>You have ordered</h2>

    <div v-if="totalOrders.length !== 0">
      <div v-for="order in totalOrders" :key="order.id">
        <p><span>Order Id: </span>{{ order.orderId }}</p>
        <p><span>Email: </span>{{ order.personInfo.email }}</p>
        <p>
          <span>Delivery Address: </span>{{ order.personInfo.deliveryAddress }}
        </p>

        <div v-for="product in order.orderedProducts" :key="product.id">
          <p><span>Product: </span>{{ product.productName }}</p>
          <p><span>Price: </span>{{ product.productPrice }}</p>
          <p><span>Quantity: </span>{{ product.quantity }}</p>
        </div>

        <br />
      </div>
    </div>
    <div v-else>Nothing</div>
  </div>
</template>

<script>
export default {
  props: {
    totalOrders: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
span {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
