<template>
  <div class="createMenu">
    <h2>Create Menu</h2>
    <form @submit.prevent="createCategory">
      <p>
        <label for="id">Id:</label>
        <input id="id" v-model="menu.id" type="number" placeholder="EnterId" />
      </p>

      <p>
        <label for="name">Name: </label>
        <input id="name" type="text" v-model="menu.name" placeholder="name" />
      </p>

      <p>
        <label for="supplier">Supplier: </label>
        <input
          id="supplier"
          type="text"
          v-model="menu.supplier"
          placeholder=" Who is the supplier?"
        />
      </p>

      <p>
        <label>Timings: </label>
        <select v-model="menu.Timings">
          <option v-for="(time, index) in times" :key="index">{{
            time
          }}</option>
        </select>
      </p>
      <button type="submit">ADD</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    const times = []

    for (let i = 1; i <= 24; i++) {
      times.push(`${i}: 00`)
    }
    return {
      menu: this.createMenu(),
      times
    }
  },
  methods: {
    ...mapActions(['addCategory']),
    createMenu() {
      return {
        id: '',
        name: '',
        supplier: '',
        Timings: ''
      }
    },
    createCategory() {
      this.addCategory(this.menu)
    }
  }
}
</script>

<style scoped>
.createMenu {
  margin-left: 20px;
  text-align: start;
}
</style>
