<template>
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <router-link to="/" class="nav-link active">Nearby Shops</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/favorites" class="nav-link">My preferred Shops</router-link>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    padding: 10px;
  }
</style>