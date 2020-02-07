<template>
  <div class="create-product createProduct-form">
    <button @click="showProductForm = true">Create product</button>
    <form @submit.prevent="createProduct" v-if="showProductForm">
      <p>
        <label>Id:</label>
        <input type="text" v-model="product.id" placeholder="Enter id" />
      </p>

      <p>
        <label>Product Name:</label>
        <!-- eslint-disable-next-line prettier/prettier -->
        <input type="text" v-model="product.productName" placeholder="Product name" />
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
        <label>Ingredients:</label>
        <!-- eslint-disable-next-line prettier/prettier -->
        <input type="text" v-model="product.Ingredients" placeholder="Ingredients used" />
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
      product: this.newProduct(),
      showProductForm: false
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
      this.addProduct(this.product).then(() => {
        this.product = this.newProduct()
        this.showProductForm = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.create-product {
  margin-left: 20px;
  text-align: start;
}
.createProduct-form {
  form {
    max-width: 400px;
    margin: 1rem auto 3rem;
    padding: 2rem;
    background: rgb(207, 202, 202);
    border-radius: 10px;

    p {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      input {
        width: 100%;
        margin-bottom: 1rem;
        padding: 0.5rem;
        font-size: 1.25rem;
      }
      select {
        width: 70%;
        margin-bottom: 1rem;
        padding: 0.5rem;
        font-size: 1.25rem;
      }
    }
  }
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
  margin-bottom: 1rem;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 250ms;
  }
}
</style>
