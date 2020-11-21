<template>
  <div class="codeblock">
    <div class="codeblock__title">{{ $props.title }}</div>
    <pre>
        <code v-html="$props.code" />
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

  &__title {
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

    @media screen and (min-width: 500px) {
      font-size: 1rem;
    }

    code {
      display: block;
    }
  }
}
</style>
