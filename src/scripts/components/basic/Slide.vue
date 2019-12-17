
<template lang="pug">
  .slide(:style="slideStyles")
    slot
</template>

<script>
  export default {
    name: 'Slide',
    inject: ['data'],
    props: {
      index: Number,
      isClone: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: false
      }
    },
    computed: {
      slideStyles () {
        return {
          width: `${this.data.slideWidth}px`
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .slide {
    display: flex;
    flex-direction: column;
  }
</style>