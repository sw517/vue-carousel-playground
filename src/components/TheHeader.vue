<template>
  <div id="header">
    <router-link to="/">Playground</router-link> |
    <router-link to="/showground">Showground</router-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss">
#header {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
