<template>
  <div>
    <div v-for="category in categories" :key="category.id">
      <router-link :to="{ name: 'products', params: { id: category.id } }">
        <h2>{{ category.name }}</h2>
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

<style></style>
