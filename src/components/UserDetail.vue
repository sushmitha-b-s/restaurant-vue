<template>
  <div class="form-container">
    <h2>Please fill out below details to order</h2>
    <form @submit.prevent="formSubmit">
      <p>
        <!-- <label>Email:</label> -->
        <input
          v-model="email"
          type="email"
          placeholder="Type your email"
          @blur="$v.email.$touch()"
        />
      </p>

      <!-- $error = $dirty + $invalid -->
      <div v-if="$v.email.$error" class="errorMessage">
        <p v-if="!$v.email.required">Email is required</p>
        <p v-if="!$v.email.email">Please enter a valid email</p>
      </div>

      <p>
        <!-- <label>Address:</label> -->
        <textarea
          v-model="address"
          placeholder="Delivery Address"
          @blur="$v.address.$touch()"
        />
      </p>

      <div v-if="$v.address.$error" class="errorMessage">
        <p v-if="!$v.address.required">Address is required</p>
      </div>

      <button type="submit" :disabled="$v.$invalid">Order now</button>

      <p v-if="$v.$anyError" class="errorMessage">
        Please fill out the required field(s)
      </p>
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

<style scoped lang="scss">
.form-container {
  h2 {
    margin: 1rem;
    color: #6f4e37;
    font-size: 2rem;
    font-style: italic;
  }
  form {
    max-width: 400px;
    margin: 1rem auto 3rem;
    padding: 2rem;
    background: rgb(207, 202, 202);
    border-radius: 10px;

    input {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
      font-size: 1.25rem;
    }
    textarea {
      width: 100%;
      font-size: 1.25rem;
      padding: 1rem;
    }
    p {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
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
  }
  .errorMessage {
    color: red;
  }
}
</style>
