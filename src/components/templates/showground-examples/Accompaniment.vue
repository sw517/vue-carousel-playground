<template>
  <ShowgroundExample
    class="accompaniment"
    title="Accompaniment"
    :config="config"
    :css="css"
  >
    <div class="row sm:flex items-start sm:ml-8 sm:mr-8">
      <VueCarousel
        :config="config"
        @slide-change="handleSlideChange"
        class="sm:flex-grow mb-4"
      >
        <template v-for="n in 3" v-slot:[n-1]>
          <div :key="n">
            <div
              class="accompaniment__ratio-background"
              :style="{
                backgroundImage: `url(images/showground/birds/bird-${n}.jpg`
              }"
            />
          </div>
        </template>
      </VueCarousel>
      <div class="accompaniment__info ml-4 mr-4 sm:mr-0 sm:ml-8">
        <div class="accompaniment__info__title">Slide {{ slide + 1 }}</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          placerat sit amet tortor vel maximus. Sed eget magna et neque
          malesuada pellentesque vitae ac arcu. Suspendisse ultricies magna
          lorem, sed lobortis leo scelerisque ac. Sed imperdiet massa eu velit
          aliquet consectetur eget id dui. Suspendisse luctus dui a metus
          tincidunt lobortis.
        </div>
      </div>
    </div>
  </ShowgroundExample>
</template>

<script>
import VueCarousel from '@samwood/vue-carousel'
import ShowgroundExample from '@/components/templates/ShowgroundExample'

export default {
  name: 'Accompaniment',
  components: {
    ShowgroundExample,
    VueCarousel
  },
  data() {
    return {
      slide: 0,
      config: {
        controls: {
          showPagination: true,
          showButtons: true
        },
        mouseDrag: true,
        slidePadding: {
          xs: 0
        }
      },
      css: {
        '.v-carousel__controls__btn': {
          'background-color': 'rgba(250, 250, 250, 0.2)',
          'border-radius': '100%',
          width: '40px',
          height: '40px'
        },
        '.v-carousel-pagination__btn--active': {
          'background-color': '#444'
        }
      }
    }
  },
  methods: {
    handleSlideChange(slide) {
      this.slide = slide
    }
  }
}
</script>

<style lang="scss">
.accompaniment {
  &__ratio-background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 0;
    padding-bottom: 70%;
  }

  &__info {
    flex-basis: 50%;
    background-color: #eee;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    padding: 10px 15px 20px;

    &__title {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .v-carousel__controls__btn {
    background-color: rgba(250, 250, 250, 0.2);
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }

  .v-carousel-pagination__btn--active {
    background-color: #444;
  }
}
</style>
