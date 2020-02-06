<template>
  <div class="category-container">
    <div v-for="category in categories" :key="category.id" class="category">
      <router-link
        :to="{ name: 'products', params: { id: category.id } }"
        class="link"
      >
        <p>{{ category.name }}</p>
      </router-link>
    </div>

    <CreateCategory />
  </div>
</template>

<script>
import CreateCategory from './CreateCategory'
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    CreateCategory
  }
}
</script>

<style scoped lang="scss">
.category-container {
  // border: 5px solid blue;
  margin-bottom: 2.5em;
  .category {
    margin: 0 auto;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .link {
      text-decoration: none;
      font-size: 1.5rem;
      color: #fff;
      text-transform: uppercase;
      width: 220px;
      p {
        border: 2px solid rgb(158, 154, 154);
        list-style: none;
        background-color: #6f4e37;
        padding: 2rem;
        margin: 0.5rem;
      }
    }
  }
}
</style>
