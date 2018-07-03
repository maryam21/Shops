<template>
  <div>
      <nav-bar></nav-bar>
      <user-form :action="signupUser" submit="Sign Up"></user-form>
  </div>
</template>

<script>
import Vue from 'vue';
import UserForm from '../components/UserForm.vue';
import SignUp from '../services/user/SignUp';
Vue.component('user-form', UserForm);
 export default {
    methods: {
        async signupUser() {
            const response = await SignUp.signUp();
            console.log(response);
        }
    }
 }
</script>
