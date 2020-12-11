<template>
  <ShowgroundExample
    class="mobile-only"
    title="Mobile Only"
    :config="config"
    :css="css"
  >
    <div class="row ml-4 mr-4 sm:ml-8 sm:mr-8">
      <VueCarousel :config="config">
        <template v-for="n in 4" v-slot:[n-1]>
          <div class="mobile-only__card overflow-hidden block" :key="n - 1">
            <div class="px-4 py-2 text-left">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </template>
      </VueCarousel>
    </div>
  </ShowgroundExample>
</template>

<script>
import VueCarousel from '@samwood/vue-carousel'
import ShowgroundExample from '@/components/templates/ShowgroundExample'

export default {
  name: 'MobileOnly',
  components: {
    ShowgroundExample,
    VueCarousel
  },
  data() {
    return {
      config: {
        controls: {
          showButtons: false,
          showPagination: true
        },
        staticBreakpoint: 'sm'
      },
      css: {
        '.v-carousel--static .v-carousel__cycle': {
          'flex-wrap': 'wrap'
        },
        '.v-carousel--static .v-carousel__slide': {
          'min-width': '50%',
          'margin-bottom': '1rem'
        },
        '.v-carousel__wrap': {
          'padding-top': '5px',
          'padding-bottom': '5px'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.mobile-only {
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

  .v-carousel--static .v-carousel__cycle {
    flex-wrap: wrap;
  }

  .v-carousel--static .v-carousel__slide {
    min-width: 50%;
    margin-bottom: 1rem;
  }

  .v-carousel__wrap {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
