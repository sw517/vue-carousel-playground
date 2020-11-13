<template>
  <div class="home">
    <VueCarousel
      v-if="showCarousel"
      :config="{
        autoplay,
        autoplayHoverPause,
        autoplayInterval,
        breakpoints,
        controls,
        loop,
        slidePadding,
        slidesVisible,
        staticBreakpoint
      }"
    >
      <template v-for="n in Number(slideCount)" v-slot:[n-1]>
        <img :key="`Image - ${n}`" src="../assets/logo.png" class="mx-auto" />
        <div :key="`Number - ${n}`" class="font-bold">Slide {{ n }}</div>
      </template>
    </VueCarousel>
    <div class="controls">
      <!-- Group - Autoplay -->
      <div class="controls__group">
        <!-- Autoplay -->
        <div class="controls__group__item">
          <label>Autoplay</label>
          <input type="checkbox" name="autoplay" v-model="autoplay" />
        </div>
        <!-- Autoplay Hover Pause -->
        <div class="controls__group__item">
          <label>Autoplay Hover Pause</label>
          <input type="checkbox" name="autoplay" v-model="autoplayHoverPause" />
        </div>
        <!-- Autoplay Interval -->
        <div class="controls__group__item">
          <label>Autoplay Interval</label>
          <input
            type="Number"
            name="autoplay-interval"
            v-model="autoplayInterval"
            min="500"
          />
        </div>
      </div>
      <!-- Group - Count -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Slide Count</label>
          <input
            type="Number"
            name="slide-count"
            v-model="slideCount"
            min="0"
          />
        </div>
      </div>
      <!-- Group - Loop -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Loop</label>
          <input type="checkbox" name="loop" v-model="loop" />
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
            v-model="slidesVisible.xs"
            min="1"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>sm</label>
          <input
            type="Number"
            name="slides-visible-sm"
            v-model="slidesVisible.sm"
            min="1"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>md</label>
          <input
            type="Number"
            name="slides-visible-md"
            v-model="slidesVisible.md"
            min="0"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>lg</label>
          <input
            type="Number"
            name="slides-visible-lg"
            v-model="slidesVisible.lg"
            min="1"
            max="20"
          />
        </div>
        <div class="controls__group__item">
          <label>xl</label>
          <input
            type="Number"
            name="slides-visible-xl"
            v-model="slidesVisible.xl"
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
            v-model="slidePadding.xs"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>sm</label>
          <input
            type="Number"
            name="slide-padding-sm"
            v-model="slidePadding.sm"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>md</label>
          <input
            type="Number"
            name="slide-padding-md"
            v-model="slidePadding.md"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>lg</label>
          <input
            type="Number"
            name="slide-padding-lg"
            v-model="slidePadding.lg"
            min="0"
          />
        </div>
        <div class="controls__group__item">
          <label>XL</label>
          <input
            type="Number"
            name="slide-padding-xl"
            v-model="slidePadding.xl"
            min="0"
          />
        </div>
      </div>
      <!-- Group - Static Breakpoint -->
      <div class="controls__group">
        <div class="controls__group__item">
          <label>Static Breakpoint</label>
          <select v-model="staticBreakpoint" name="static-breakpoint">
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
          <input v-model="controls.previous" type="text" />
        </div>
        <!-- Next -->
        <div class="controls__group__item">
          <label>Next</label>
          <input v-model="controls.previous" type="text" />
        </div>
        <!-- Show Buttons -->
        <div class="controls__group__item">
          <label>Show Buttons</label>
          <input v-model="controls.showButtons" type="checkbox" />
        </div>
        <!-- Show Pagination -->
        <div class="controls__group__item">
          <label>Show Pagination</label>
          <input v-model="controls.showPagination" type="checkbox" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCarousel from '@samwood/vue-carousel'

export default {
  name: 'Home',
  components: {
    VueCarousel
  },
  data() {
    return {
      showCarousel: true,
      slideCount: 10,
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
        showButtons: true,
        showPagination: true
      },
      loop: false,
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
      staticBreakpoint: null
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
