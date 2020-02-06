<template>
  <div class="createMenu">
    <button @click="showMenuForm = true">Create Menu</button>

    <form @submit.prevent="createCategory" v-if="showMenuForm">
      <p>
        <label>Id:</label>
        <input v-model="menu.id" type="number" placeholder="EnterId" />
      </p>

      <p>
        <label>Name: </label>
        <input type="text" v-model="menu.name" placeholder="name" />
      </p>

      <p>
        <label>Supplier: </label>
        <input
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
      times,
      showMenuForm: false
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
      this.addCategory(this.menu).then(() => {
        this.menu = this.createMenu()
        this.showMenuForm = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
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
.createMenu {
  margin-left: 20px;
  text-align: start;
}
</style>
