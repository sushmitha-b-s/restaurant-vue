<template>
  <div>
    <form @submit.prevent="formSubmit">
      <p>
        <label for="email">Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Email Address"
        />
      </p>

      <p>
        <label for="address">Address:</label>
        <textarea
          id="address"
          v-model="address"
          placeholder="Delivery Address"
        />
      </p>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      address: ''
    }
  },
  methods: {
    formSubmit() {
      let personInfo = {
        email: this.email,
        deliveryAddress: this.address
      }

      this.$emit('form-submitted', personInfo)
      this.email = ''
      this.address = ''
    }
  }
}
</script>

<style></style>
