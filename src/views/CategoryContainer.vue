<template>
  <div>
    <h1>menu List</h1>

    <CategoryList
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CategoryList from '@/components/CategoryList'
export default {
  components: {
    CategoryList
  },
  created() {
    this.loadCategories()
  },
  methods: {
    ...mapActions(['loadCategories'])
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories
    })
  }
}
</script>

<style></style>
