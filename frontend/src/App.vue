<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="row">
      <div class="col-sm-3" v-for="shop in shops">
        <shop-card></shop-card>
      </div>
    </div>
  </div>
</template>

<script>
import UserPosition from './services/UserPosition';
export default {
  name: 'app',
  data () {
    return {
      shops: []
    }
  },
  mounted () {
    this.getShops()
  },
  methods: {
    async getShops () {
      const response = await UserPosition
      this.shops = response
    }
  }
}
</script>

<style lang="scss">
  div {
    padding: 10px;
  }
</style>
