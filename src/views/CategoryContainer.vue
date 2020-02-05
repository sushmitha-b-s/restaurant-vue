<template>
  <div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'categories' }">Menu</router-link></li>
        <li>
          <router-link :to="{ name: 'my-orders' }">My Orders</router-link>
        </li>
      </ul>
    </nav>
    <h1>Menus</h1>

    <CategoryList :categories="categories" />
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
