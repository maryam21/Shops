<template>
  <div>
      <nav-bar></nav-bar>
      <user-form :action="action" submit="Login"></user-form>
      <p>Need an account? <a href="/signup">Signup</a></p>
  </div>
</template>

<script>
import Vue from 'vue';
import UserForm from '../components/UserForm.vue';

Vue.component('user-form', UserForm);
 export default {
    data() {
        return {
            action: `${process.env.SERVER_API}/models/user/login`
        };
    }
 };
</script>

<style scoped>
    p {
        padding: 300px;
    }
</style>