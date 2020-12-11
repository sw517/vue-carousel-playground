<template>
  <div class="codeblock">
    <div v-once class="codeblock__title">
      <span>{{ $props.title }}</span>
      <img class="codeblock__lang-img" :src="cImgSrc" />
    </div>
    <pre>
        <code v-once v-html="format($props.code)" />
    </pre>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    title: {
      type: String,
      default: ''
    },
    code: {
      type: Object,
      default() {
        return {}
      }
    },
    type: {
      type: String,
      default: 'js'
    }
  },
  computed: {
    cImgSrc() {
      return `/images/logo/${this.$props.type === 'css' ? 'css' : 'vue'}.png`
    }
  },
  methods: {
    format(code) {
      switch (this.$props.type) {
        case 'css':
          return JSON.stringify(code, null, 2)
            .replace(/"/g, '') // Remove quotes.
            .replace(/: {/g, ' {') // Replace colons after selectors.
            .replace(/},/g, '}') // Remove comma after curly bracket (selector).
            .replace(/,\n/g, ';\n') // Replace comma after css property with semi-colon.
            .replace(/\n {2}}/g, ';\n  }') // Add semi-colon to last property in each selector
            .replace(/^{\n/, '') // Remove first curly bracket.
            .replace(/[:ascii:]*}$/, '') // Remove last curly bracket.
            .replace(/\n {2}/g, '\n') // Remove excess indentation on new lines.
            .replace(/^ {2}/, '') // Remove excess indentation on first line.
        default:
          // Default = 'js'
          // Replace double quote with single quote.
          return JSON.stringify(code, null, 2).replace(/"/g, "'")
      }
    }
  }
}
</script>

<style lang="scss">
.codeblock {
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 8px 5px 2px rgba(0, 0, 0, 0.2);
  width: 100%;

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    background-color: #eee;
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &__lang-img {
    display: block;
    max-width: 30px;
    max-height: 24px;
  }

  pre {
    background-color: #222;
    color: #fff;
    padding: 20px;
    text-align: left;
    display: inline-flex;
    font-size: 0.8rem;

    code {
      display: block;
    }
  }
}
</style>
