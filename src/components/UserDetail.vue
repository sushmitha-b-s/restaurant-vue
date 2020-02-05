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
          @blur="$v.email.$touch()"
        />
      </p>

      <!-- $error = $dirty + $invalid -->
      <div v-if="$v.email.$error">
        <p v-if="!$v.email.required">Email is required</p>
        <p v-if="!$v.email.email">Please enter a valid email</p>
      </div>

      <p>
        <label for="address">Address:</label>
        <textarea
          id="address"
          v-model="address"
          placeholder="Delivery Address"
          @blur="$v.address.$touch()"
        />
      </p>

      <div v-if="$v.address.$error">
        <p v-if="!$v.address.required">Address is required</p>
      </div>

      <button type="submit" :disabled="$v.$invalid">Submit</button>

      <p v-if="$v.anyError">Please fill out the required field(s)</p>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: '',
      address: ''
    }
  },
  validations: {
    email: { required, email },
    address: { required }
  },
  methods: {
    formSubmit() {
      this.$v.$touch()
      if (!this.$v.invalid) {
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
}
</script>

<style></style>
