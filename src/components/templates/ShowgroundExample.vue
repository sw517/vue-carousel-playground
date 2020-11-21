<template>
  <div class="showground-example">
    <h2
      :class="[$props.titleRight ? 'text-right' : 'text-left']"
      class="showground-example__title"
    >
      {{ $props.title }}
    </h2>
    <div class="showground-example__carsouel-wrap mb-12">
      <slot />
    </div>
    <div class="showground-example__code-wrap px-2 sm:flex items-start">
      <CodeBlock
        class="showground-example__codeblock mb-4"
        title="Config"
        :code="$props.config"
      />
      <CodeBlock
        class="showground-example__codeblock"
        v-if="$props.css"
        title="CSS"
        :code="$props.css"
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
    titleRight: {
      type: Boolean,
      default: false
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

    @media screen {
      font-size: 50px;
    }
  }

  &__codeblock {
    flex-basis: 50%;
  }
}
</style>
