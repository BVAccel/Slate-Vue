
<template lang="pug"></template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'ColorSwatches',
    props: {
      colors: Array,
    },
    created () {
      this.$store.dispatch('swatchColors/map', {
        colors: this.colors
      });
    }
  }
</script>

<style scoped lang="scss">

</style>
