<template>
  <div class="commercial-example">
    <ShowgroundExample
      :title-right="true"
      title="Commercial Products"
      :config="config"
      :css="css"
    >
      <VueCarousel :config="config">
        <template v-for="n in 7" v-slot:[n-1]>
          <router-link
            to="/"
            class="commercial-example__card hover:underline overflow-hidden block"
            :key="n - 1"
          >
            <div
              :style="{
                backgroundImage: `url(images/showground/fruit/fruit-${n}.jpg)`
              }"
              class="commercial-example__ratio-background"
            />
            <div class="px-4 py-2 text-left">
              <div>Product {{ n }}</div>
              <div>Cost: &pound;&dollar;&euro;</div>
            </div>
          </router-link>
        </template>
      </VueCarousel>
    </ShowgroundExample>
  </div>
</template>

<script>
import VueCarousel from '@samwood/vue-carousel'
import ShowgroundExample from '@/components/templates/ShowgroundExample'

export default {
  name: 'Commercial',
  components: {
    ShowgroundExample,
    VueCarousel
  },
  data() {
    return {
      config: {
        controls: {
          showPagination: false
        },
        loop: true,
        slidesVisible: {
          xs: 1.5,
          sm: 4,
          md: 6
        }
      },
      css: {
        '.vue-carousel__wrap': {
          'padding-top': '5px',
          'padding-bottom': '5px'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.commercial-example {
  &__card {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  &__ratio-background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 0;
    padding-bottom: 120%;
  }

  .v-carousel__wrap {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
