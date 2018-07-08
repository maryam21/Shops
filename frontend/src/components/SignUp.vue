<template>
  <div>
      <user-form :method="signup" :message="message" :error="error" submit="Sign Up"></user-form>
  </div>
</template>

<script>
import Vue from 'vue';
import UserForm from '../components/UserForm.vue';
import SignUp from '../services/user/SignUp';
Vue.component('user-form', UserForm);

export default {
    data() {
        return {
            message: null,
            error: null
        };
    },
    methods: {
        async signup(email, password) {
            /** Call the signup method that will do the post request to server api */
            try{
                const response = await SignUp.signUp({email: email, password: password});
                this.message = response.data.message;
                // Redirect to main page when signup is successful
                this.$router.push('/') ;
            }catch(error) {
                if (error.response.status == 401){
                    this.error = 'Email is already in use.'
                } else {
                    this.error = 'Something went wrong on the server.';
                }
            }
        }
    }
};
</script>
