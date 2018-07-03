<template>
  <div>
      <nav-bar></nav-bar>
      <user-form action="/user/signup" submit="Sign Up"></user-form>
  </div>
</template>

<script>
import Vue from 'vue';
import UserForm from '../components/UserForm.vue';
Vue.component('user-form', UserForm);
 export default {

    }
</script>
