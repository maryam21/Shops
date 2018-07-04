<template>
  <div>
      <nav-bar></nav-bar>
      <user-form :action="action" submit="Sign Up"></user-form>
  </div>
</template>

<script>
import Vue from 'vue';
import UserForm from '../components/UserForm.vue';

Vue.component('user-form', UserForm);
 export default {
    data() {
        return {
            action: `${process.env.SERVER_HOST}/api/models/user/signup`
        };
    }
 };
</script>
