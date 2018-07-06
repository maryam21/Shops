<template>
  <div>
    <card-grid :shops="shops"></card-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import CardGrid from '../components/CardGrid.vue';
Vue.component('card-grid', CardGrid);

export default {
  data () {
    return {
      shops: []
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss">
  div {
    padding: 10px;
  }
</style>
