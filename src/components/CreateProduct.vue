<template>
  <div class="create-product">
    <h2>Create Product for this category</h2>
    <form @submit.prevent="createProduct">
      <p>
        <label>Id: </label>
        <input type="text" v-model="product.id" placeholder="Enter id" />
      </p>

      <p>
        <label>Product Name: </label>
        <input
          type="text"
          v-model="product.productName"
          placeholder="Product name"
        />
      </p>

      <p>
        <label>Product price:</label>
        <input
          type="number"
          step="any"
          v-model.number="product.productPrice"
          placeholder="select product price"
        />
      </p>

      <p>
        <label>Ingredients: </label>
        <input
          type="text"
          v-model="product.Ingredients"
          placeholder="Ingredients used"
        />
      </p>

      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    category_id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: this.newProduct()
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    newProduct() {
      return {
        id: '',
        productName: '',
        productPrice: null,
        Ingredients: '',
        category_id: Number(this.category_id)
      }
    },
    createProduct() {
      this.addProduct(this.product)
    }
  }
}
</script>

<style scoped>
.create-product {
  margin-left: 20px;
  text-align: start;
}
</style>
