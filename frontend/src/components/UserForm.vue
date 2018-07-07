<template>
    <div class="container">
      <form :action="action" method="post">
        <div v-if="message" class="alert alert-danger">{{ message }}</div>
        <div class="form-group lign-items-center">
            <label>Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email">
          </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password">
        </div>
        <button type="submit" class="btn btn-primary">{{ submit }}</button>
      </form> 
    </div>
</template>

<script>
    export default {
        props: {
            submit: String,
            action: String,
            message: String
        },
    };
</script>

<style scoped>
    .container {
        width: 40%;
    }
</style>