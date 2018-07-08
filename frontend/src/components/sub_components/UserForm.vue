<template>
    <div class="container">
      <form @submit.prevent="method(email,password)">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <div v-if="message" class="alert alert-success">{{ message }}</div>
        <div class="form-group lign-items-center">
            <label>Email address</label>
            <input required v-model="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
        <div class="form-group">
            <label>Password</label>
            <input required v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <button  type="submit" class="btn btn-primary">{{ submit }}</button>
      </form> 
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        props: {
            method: Function,
            submit: String,
            message: String,
            error: String
        }
    };
</script>

<style scoped>
    .container {
        width: 40%;
    }
</style>