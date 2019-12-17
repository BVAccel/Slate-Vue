
<template>
  <button class="button" type="button" ref="button" :class="buttonClass" :disabled="disabled" @click.stop="$emit('click')">
    <icon v-if="icon" :name="icon" :size="iconSize"></icon><span>{{ label }}</span>
  </button>
</template>

<script>
  import Icon from '../basic/Icon.vue'

  export default {
    name: 'PrimaryButton',
    components: { Icon },
    props: {
      label: String,
      icon: String,
      iconSize: {
        type: String,
        default () {
          return (this.small) ? '12px' : '16px'
        }
      },
      hollow: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      full: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false
      },
      simple: {
        type: Boolean,
        default: false
      },
      text: {
        type: Boolean,
        default: false
      },
      flex: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClass () {
        return {
          'button--primary': this.secondary === false,
          'button--secondary': this.secondary === true,
          'button--hollow': this.hollow === true,
          'button--small': this.small === true,
          'button--simple': this.simple === true,
          'button--full': this.full === true,
          'button--text': this.text === true,
          'button--flex': this.flex === true,
          'button--inline': this.inline === true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
