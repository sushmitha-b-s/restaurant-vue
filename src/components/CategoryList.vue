<template>
  <div>
    <router-link :to="{ name: 'products', params: { id: category.id } }">
      <h2>{{ category.name }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
