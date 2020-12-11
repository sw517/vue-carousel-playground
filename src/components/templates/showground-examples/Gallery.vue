<template>
  <ShowgroundExample class="gallery" title="Picture Gallery" :config="config">
    <VueCarousel :config="config">
      <template v-for="n in 4" v-slot:[n-1]>
        <div
          :key="n - 1"
          :style="{
            backgroundImage: `url(images/showground/nature/nature-${n}.jpg)`
          }"
          class="gallery__ratio-background"
        />
      </template>
    </VueCarousel>
  </ShowgroundExample>
</template>

<script>
import VueCarousel from '@samwood/vue-carousel'
import ShowgroundExample from '@/components/templates/ShowgroundExample'

export default {
  name: 'Gallery',
  components: {
    ShowgroundExample,
    VueCarousel
  },
  data() {
    return {
      config: {
        autoplay: true,
        autoplayHoverPause: true,
        autoplayInterval: 4000,
        controls: {
          showButtons: false
        },
        loop: true,
        mouseDrag: true,
        slidePadding: {
          xs: 0
        }
      }
    }
  }
}
</script>

<style lang="scss">
.gallery__ratio-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 0;
  padding-bottom: 60%;

  @media screen and (min-width: 500px) {
    padding-bottom: 30%;
  }
}
</style>
