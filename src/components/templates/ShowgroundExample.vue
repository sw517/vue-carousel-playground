<template>
  <div class="showground-example">
    <h2 class="showground-example__title text-left mx-4 sm:mx-8 mb-4">
      {{ $props.title }}
    </h2>
    <div class="showground-example__carousel-wrap mb-12">
      <slot />
    </div>
    <div class="showground-example__code-wrap mx-4 sm:mx-8 sm:flex items-start">
      <CodeBlock
        class="showground-example__codeblock mb-4"
        title="Config"
        :code="$props.config"
      />
      <CodeBlock
        class="showground-example__codeblock"
        v-if="$props.css"
        title="Custom CSS"
        :code="$props.css"
        type="css"
      />
    </div>
  </div>
</template>

<script>
import CodeBlock from '@/components/atoms/CodeBlock'

export default {
  name: 'ShowgroundExample',
  components: {
    CodeBlock
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default() {
        return {}
      }
    },
    css: {
      type: Object,
      default() {
        return null
      }
    }
  }
}
</script>

<style lang="scss">
.showground-example {
  &__title {
    font-size: 28px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: normal;

    @media screen and (min-width: 700px) {
      font-size: 50px;
    }
  }

  &__codeblock {
    @media screen and (min-width: 700px) {
      flex-basis: 50%;
      + .showground-example__codeblock {
        margin-left: 20px;
      }
    }
  }
}
</style>
