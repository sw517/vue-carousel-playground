<template>
  <div class="showground">
    <Nature class="mt-12" />
    <Commercial class="mt-16" />
  </div>
</template>

<script>
import Nature from '@/components/templates/showground-examples/Nature'
import Commercial from '@/components/templates/showground-examples/Commercial'

export default {
  name: 'Showground',
  components: {
    Nature,
    Commercial
  }
}
</script>

<style lang="scss" scoped></style>
