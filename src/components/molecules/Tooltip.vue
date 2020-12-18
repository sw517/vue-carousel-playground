<template>
  <div v-if="$props.text.length" class="tooltip">
    <button class="tooltip__trigger">?</button>
    <Snackbar class="tooltip__popup">
      <div v-html="$props.text" />
    </Snackbar>
  </div>
</template>

<script>
import Snackbar from '@/components/atoms/Snackbar'
export default {
  name: 'Tooltip',
  components: {
    Snackbar
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.tooltip {
  &__trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: #fff;
    padding: 5px;
    min-width: 20px;
    max-width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: normal;
    border-radius: 999px;
    opacity: 0.4;

    &:hover {
      opacity: 1;
      ~ .tooltip__popup {
        display: block;
      }
    }
  }

  .tooltip__popup {
    display: none;
    position: absolute;
    z-index: 10;
    margin: 20px;
    text-align: left;
    max-width: 500px;
  }
}
</style>
