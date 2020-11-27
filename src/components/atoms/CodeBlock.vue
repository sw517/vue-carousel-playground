<template>
  <div class="codeblock">
    <div class="codeblock__title">{{ $props.title }}</div>
    <pre>
        <code v-html="format($props.code)" />
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
  methods: {
    format(code) {
      switch (this.type) {
        case 'css':
          /**
           * Remove quotes.
           * Replace colons after selectors.
           * Remove comma after curly bracket (selector)
           * Replace comma after css property with semi-colon
           * Add semi-colon to last property
           * Remove first curly bracket.
           * Remeove last curly bracket.
           */
          return JSON.stringify(code, null, 2)
            .replace(/"/g, '')
            .replace(/: {/g, ' {')
            .replace(/},/g, '}')
            .replace(/,\n/g, ';\n')
            .replace(/^{\n/, '')
            .replace(/[:ascii:]*}$/, '')
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
    font-size: 0.8rem;
    text-align: left;
    background-color: #eee;
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
