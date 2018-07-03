<template>
  <div>
      <nav-bar></nav-bar>
      <user-form :submit="submit"></user-form>
  </div>
</template>

<script>
import Vue from 'vue';
import UserForm from '../components/UserForm.vue';
Vue.component('user-form', UserForm);

export default {
  data () {
    return {
      submit: 'Sign Up'
    };
  },
};
</script>
