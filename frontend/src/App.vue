<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="row">
      <div class="col-sm-3" v-for="n in 5">
        <shop-card></shop-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  div {
    padding: 10px;
  }
</style>
