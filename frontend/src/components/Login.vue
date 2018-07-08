<template>
  <div>
      <user-form :method="login" :message="message" :error="error" submit="Login"></user-form>
      <p>Need an account? <a href="/signup">Signup</a></p>
  </div>
</template>

<script>
import Vue from 'vue';
import UserForm from '../components/UserForm.vue';
import Login from '../services/user/Login';
Vue.component('user-form', UserForm);

export default {
    data() {
        return {
            message: null,
            error: null
        };
    },
    methods: {
        async login(email, password) {
            /** Call the login method that will do the post request to server api */
            try{
                const response = await Login.login({email: email, password: password});
                this.message = response.data.message;
                // Redirect to main page when login is successful
                this.$router.push('/') ;
            }catch(error) {
                if (error.response.status == 401){
                    this.error = 'Invalid username or password.'
                } else {
                    this.error = 'Something went wrong on the server.';
                }
            }
        }
    }
};
</script>

<style scoped>
    p {
        padding: 300px;
    }
</style>