<template>
  <div class="showground">
    <Gallery />
    <Commercial />
    <Accompaniment />
    <MobileOnly />
  </div>
</template>

<script>
import Gallery from '@/components/templates/showground-examples/Gallery'
import Commercial from '@/components/templates/showground-examples/Commercial'
import Accompaniment from '@/components/templates/showground-examples/Accompaniment'
import MobileOnly from '@/components/templates/showground-examples/MobileOnly'

export default {
  name: 'Showground',
  components: {
    Gallery,
    Commercial,
    Accompaniment,
    MobileOnly
  }
}
</script>
