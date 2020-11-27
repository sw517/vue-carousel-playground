<template>
  <div class="showground">
    <Nature class="mt-12" />
    <Commercial class="mt-16" />
    <Accompaniment class="mt-16" />
  </div>
</template>

<script>
import Nature from '@/components/templates/showground-examples/Nature'
import Commercial from '@/components/templates/showground-examples/Commercial'
import Accompaniment from '@/components/templates/showground-examples/Accompaniment'

export default {
  name: 'Showground',
  components: {
    Nature,
    Commercial,
    Accompaniment
  }
}
</script>

<style lang="scss" scoped></style>
