<template>
  <ShowgroundExample
    class="commercial"
    title="Commercial"
    :config="config"
    :css="css"
  >
    <div class="row ml-4 mr-4 sm:ml-8 sm:mr-8">
      <VueCarousel :config="config">
        <template v-for="n in 6" v-slot:[n-1]>
          <router-link
            to="/"
            class="commercial__card hover:underline overflow-hidden block"
            :key="n - 1"
          >
            <div
              :style="{
                backgroundImage: `url(images/showground/fruit/fruit-${n}.jpg)`
              }"
              class="commercial__ratio-background"
            />
            <div class="px-4 py-2 text-left">
              <div>Lorem ipsum</div>
              <div>Duis aute irure dolor...</div>
            </div>
          </router-link>
        </template>
      </VueCarousel>
    </div>
  </ShowgroundExample>
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
        loop: true,
        slidesVisible: {
          xs: 1.5,
          sm: 3,
          md: 5
        }
      },
      css: {
        '.v-carousel': {
          'padding-bottom': '50px'
        },
        '.v-carousel__wrap': {
          'padding-top': '5px',
          'padding-bottom': '5px'
        },
        '.v-carousel__controls__btn': {
          top: 'auto',
          bottom: '0',
          transform: 'none'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.commercial {
  &__card {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #fff;
  }

  &__ratio-background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 0;
    padding-bottom: 100%;
  }

  .v-carousel {
    padding-bottom: 50px;
  }

  .v-carousel__wrap {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .v-carousel__controls__btn {
    top: auto;
    bottom: 0;
    transform: none;
  }
}
</style>
