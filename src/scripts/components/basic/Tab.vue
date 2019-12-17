
<template lang="pug">
  .tab(v-show="active")
    slot
</template>

<script>
  export default {
    name: 'Tab',
    props: {
      heading: {
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: false
      };
    },
    mounted () {
      this.active = this.selected
      this.$parent.addTab(this)
    },
    beforeDestroy () {
      this.active = false
      this.$parent.removeTab(this)
    }
  }
</script>

<style scoped lang="scss">
</style>
