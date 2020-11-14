<template>
  <div class="snackbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Snackbar'
}
</script>

<style lang="scss">
.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  pointer-events: none;
}
</style>
