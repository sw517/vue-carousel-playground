<template>
  <div class="btn"><slot /></div>
</template>

<script>
export default {
  name: 'Btn'
}
</script>

<style lang="scss">
.btn {
  background-color: #40b883;
  color: #fff;
  cursor: pointer;
  @apply .shadow .inline-block .px-6 .py-2 .rounded-xl;
}
</style>
