<template>
  <div class="playground">
    <div :style="cCarouselContainerStyles" class="playground__carousel-wrap">
      <VueCarousel ref="carousel" :config="customConfig">
        <template v-for="n in Number(slideCount)" v-slot:[n-1]>
          <img :key="`Image - ${n}`" src="@/assets/logo.png" class="mx-auto" />
          <div :key="`Number - ${n}`" class="font-bold">Slide {{ n }}</div>
        </template>
      </VueCarousel>
    </div>
    <div class="controls">
      <!-- Group - Autoplay -->
      <div class="controls__group">
        <!-- Autoplay -->
        <div class="controls__group__item">
          <label>Autoplay</label>
          <input
            type="checkbox"
            name="autoplay"
            v-model="customConfig.autoplay"
          />
        </div>
        <!-- Autoplay Hover Pause -->
        <div class="controls__group__item">
          <label>Autoplay Hover Pause</label>
          <input
            type="checkbox"
            name="autoplay"
            v-model="customConfig.autoplayHoverPause"
          />
        </div>
        <!-- Autoplay Interval -->
        <div class="controls__group__item">
          <label>Autoplay Interval</label>
          <input
            type="Number"
            name="autoplay-interval"
            v-model="customConfig.autoplayInterval"
            min="500"
          />
        </div>
      </div>
      <!-- Group - Slide Count -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Slide Count</label>
          <input
            type="Number"
            name="slide-count"
            v-model.number="slideCount"
            min="0"
          />
        </div>
      </div>
      <!-- Group - Loop -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Loop</label>
          <input type="checkbox" name="loop" v-model="customConfig.loop" />
        </div>
      </div>
      <!-- Group - Mouse Drag -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Mouse Drag</label>
          <input type="checkbox" v-model="customConfig.mouseDrag" />
        </div>
      </div>
      <!-- Group - Show Empty Space -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Show Empty Space</label>
          <input type="checkbox" v-model="customConfig.showEmptySpace" />
        </div>
      </div>
      <!-- Group - Slides Visible -->
      <div class="controls__group">
        <div class="controls__group__title">Slides Visible</div>
        <div class="controls__group__item">
          <label>xs</label>
          <input
            type="Number"
            name="slides-visible-xs"
            v-model="customConfig.slidesVisible.xs"
            min="1"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>sm</label>
          <input
            type="Number"
            name="slides-visible-sm"
            v-model="customConfig.slidesVisible.sm"
            min="1"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>md</label>
          <input
            type="Number"
            name="slides-visible-md"
            v-model="customConfig.slidesVisible.md"
            min="0"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>lg</label>
          <input
            type="Number"
            name="slides-visible-lg"
            v-model="customConfig.slidesVisible.lg"
            min="1"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>xl</label>
          <input
            type="Number"
            name="slides-visible-xl"
            v-model="customConfig.slidesVisible.xl"
            min="1"
            max="20"
          />
        </div>
      </div>
      <!-- Group - Slide Padding -->
      <div class="controls__group">
        <div class="controls__group__title">Slide Padding</div>
        <div class="controls__group__item">
          <label>xs</label>
          <input
            type="Number"
            name="slide-padding-xs"
            v-model="customConfig.slidePadding.xs"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>sm</label>
          <input
            type="Number"
            name="slide-padding-sm"
            v-model="customConfig.slidePadding.sm"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>md</label>
          <input
            type="Number"
            name="slide-padding-md"
            v-model="customConfig.slidePadding.md"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>lg</label>
          <input
            type="Number"
            name="slide-padding-lg"
            v-model="customConfig.slidePadding.lg"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>XL</label>
          <input
            type="Number"
            name="slide-padding-xl"
            v-model="customConfig.slidePadding.xl"
            min="0"
          />
        </div>
      </div>
      <!-- Group - Static Breakpoint -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Static Breakpoint</label>
          <select
            v-model="customConfig.staticBreakpoint"
            name="static-breakpoint"
          >
            <option :value="null">No static</option>
            <option value="xs">xs</option>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
          </select>
        </div>
      </div>
      <!-- Group - Controls -->
      <div class="controls__group">
        <div class="controls__group__title">
          Controls
        </div>
        <!-- Previous -->
        <div class="controls__group__item">
          <label>Previous</label>
          <input v-model="customConfig.controls.previous" type="text" />
        </div>
        <!-- Next -->
        <div class="controls__group__item">
          <label>Next</label>
          <input v-model="customConfig.controls.previous" type="text" />
        </div>
        <!-- Show Buttons -->
        <div class="controls__group__item">
          <label>Show Buttons</label>
          <input v-model="customConfig.controls.showButtons" type="checkbox" />
        </div>
        <!-- Show Pagination -->
        <div class="controls__group__item">
          <label>Show Pagination</label>
          <input
            v-model="customConfig.controls.showPagination"
            type="checkbox"
          />
        </div>
        <!-- Pagination Numbered -->
        <div class="controls__group__item">
          <label>Pagination Numbered</label>
          <input
            v-model="customConfig.controls.paginationNumbered"
            type="checkbox"
          />
        </div>
      </div>
      <!-- Group - Touch Drag -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Touch Drag</label>
          <input type="checkbox" v-model="customConfig.touchDrag" />
        </div>
      </div>
      <!-- Group - Transition -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Transition Duration</label>
          <input
            type="number"
            name="transitionDuration"
            v-model="customConfig.transitionDuration"
          />
        </div>
        <div class="controls__group__item">
          <label>Transition Timing Function</label>
          <input type="text" v-model="customConfig.transitionTimingFunction" />
        </div>
      </div>
    </div>
    <Btn @click.native="handleCopyClick" class="ml-auto mr-auto">
      <span>Copy custom config to clipboard</span>
    </Btn>
    <transition name="fade">
      <Snackbar v-if="showSnackbar">
        {{ snackbarMsg }}
      </Snackbar>
    </transition>
  </div>
</template>

<script>
// Helpers
import cloneDeep from 'lodash.clonedeep'
import isEqual from 'lodash.isequal'
// Components
import VueCarousel from '@samwood/vue-carousel'
import Snackbar from '@/components/atoms/Snackbar'
import Btn from '@/components/atoms/Btn'

export default {
  name: 'Playground',
  components: {
    VueCarousel,
    Snackbar,
    Btn
  },
  data() {
    return {
      carouselHeight: 0,
      customConfig: {
        autoplay: false,
        autoplayHoverPause: false,
        autoplayInterval: 3000,
        breakpoints: {
          xs: 0,
          sm: 600,
          md: 980,
          lg: 1200,
          xl: 1600
        },
        controls: {
          previous: '&lt;',
          next: '&gt;',
          buttonStyles: null,
          paginationNumbered: false,
          paginationStyles: null,
          showButtons: true,
          showPagination: false
        },
        loop: false,
        mouseDrag: false,
        showEmptySpace: false,
        slidePadding: {
          xs: null,
          sm: null,
          md: null,
          lg: null,
          xl: null
        },
        slidesVisible: {
          xs: 1,
          sm: null,
          md: null,
          lg: null,
          xl: null
        },
        staticBreakpoint: null,
        touchDrag: true,
        transitionDuration: 500,
        transitionTimingFunction: 'ease'
      },
      snackbarMsg: '',
      snackbarMsgSucess: 'Custom config copied to clipboard',
      snackbarMsgFail: 'Config already matches default, nothing copied',
      showSnackbar: false,
      slideCount: 10
    }
  },
  computed: {
    cCarouselContainerStyles() {
      return {
        height: this.carouselHeight + 'px',
        overflow: 'hidden'
      }
    }
  },
  mounted() {
    setTimeout(this.recordCarouselHeight, 100)
  },
  updated() {
    setTimeout(this.recordCarouselHeight, 100)
  },
  methods: {
    recordCarouselHeight() {
      this.carouselHeight = this.$refs['carousel'].$el.clientHeight
    },
    getDefaultConfig() {
      return {
        autoplay: false,
        autoplayHoverPause: false,
        autoplayInterval: 3000,
        breakpoints: {
          xs: 0,
          sm: 600,
          md: 980,
          lg: 1200,
          xl: 1600
        },
        controls: {
          previous: '&lt;',
          next: '&gt;',
          buttonStyles: null,
          paginationNumbered: false,
          paginationStyles: null,
          showButtons: true,
          showPagination: false
        },
        loop: false,
        mouseDrag: false,
        showEmptySpace: false,
        slidePadding: {
          xs: null,
          sm: null,
          md: null,
          lg: null,
          xl: null
        },
        slidesVisible: {
          xs: 1,
          sm: null,
          md: null,
          lg: null,
          xl: null
        },
        staticBreakpoint: null,
        touchDrag: true,
        transitionDuration: 500,
        transitionTimingFunction: 'ease'
      }
    },
    getReducedConfig() {
      const defaultConfig = this.getDefaultConfig()
      const customConfig = cloneDeep(this.customConfig)

      Object.keys(customConfig).forEach(key => {
        if (isEqual(customConfig[key], defaultConfig[key])) {
          delete customConfig[key]
        } else if (
          typeof customConfig[key] === 'object' &&
          typeof defaultConfig[key] === 'object' &&
          customConfig[key] !== null
        ) {
          Object.keys(customConfig[key]).forEach(nestedKey => {
            if (
              isEqual(
                customConfig[key][nestedKey],
                defaultConfig[key][nestedKey]
              )
            ) {
              delete customConfig[key][nestedKey]
            }
          })
        }
      })

      return customConfig
    },
    async handleCopyClick() {
      const config = this.getReducedConfig()
      this.snackbarMsg = this.snackbarMsgFail

      if (Object.keys(config).length) {
        try {
          const configString = JSON.stringify(config)
            .replace(/{/g, '{\n')
            .replace(/}/g, '\n}')
            .replace(/:/g, ': ')
            .replace(/,/g, ',\n')
            .replace(/"/g, "'")
          await navigator.clipboard.writeText(configString)
          this.snackbarMsg = this.snackbarMsgSucess
          console.log(this.snackbarMsg)
        } catch (err) {
          console.error('Failed to copy: ', err)
        }
      }
      this.showSnackbar = true
      setTimeout(() => {
        this.showSnackbar = false
      }, 3000)
    }
  }
}
</script>

<style lang="scss">
.playground__carousel-wrap {
  overflow: hidden;
  transition: height 0.6s ease;
  will-change: height;
  min-height: 200px;
}

.controls {
  @apply .p-4;

  @media screen and (min-width: 768px) {
    column-count: 3;
  }

  &__group {
    break-inside: avoid-column;
    page-break-inside: avoid;
    @apply .border-solid .border-2 .rounded-3xl .p-4 .mb-4;

    &__title {
      flex-basis: 100%;
      font-weight: bold;
      @apply .mb-4;
    }

    &__item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      & + & {
        @apply .mt-4;
      }
    }

    label {
      min-width: 50px;
      text-align: left;
      @apply mr-4;
    }

    select,
    input:not([type='checkbox']) {
      @apply .border-solid .border-2 .rounded .px-2;
    }
  }
}

.fade-enter-active {
  transition: opacity ease 0.2s;
}

.fade-leave-active {
  transition: opacity ease 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
