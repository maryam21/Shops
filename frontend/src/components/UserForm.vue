<template>
    <div class="container">
      <form :action="action" method="post">
        <div class="form-group lign-items-center">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email">
          </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password">
        </div>
            <button type="submit" class="btn btn-primary">{{ submit }}</button>
      </form> 
    </div>
</template>

<script>
    export default {
        props: {
            submit: String,
            action: String
        },
    };
</script>

<style scoped>
    .container {
        width: 40%;
    }
</style>