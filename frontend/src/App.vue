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
import ShopsService from './services/ShopsService';
export default {
  name: 'app',
  data () {
    return {
      shops: []
    }
  },
  created () {
    this.getShops()
  },
  methods: {
    async getShops () {
      const response = await ShopsService.fetchShops()
      this.shops = response.data.results;
    }
  }
}
</script>

<style lang="scss">
  div {
    padding: 10px;
  }
</style>
