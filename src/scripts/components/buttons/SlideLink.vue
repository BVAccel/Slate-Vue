
<template lang="pug">
  <a class="slide-link" :href="href" :title="label" :class="linkClass" @mouseenter="addActiveState" @transitionend="removeActiveState"><span>{{ label }}</span></a>
</template>

<script>
  export default {
    name: 'SlideLink',
    props: {
      href: {
        type: String,
        default: '#'
      },
      label: String
    },
    data () {
      return {
        isActive: false,
        isHover: false
      }
    },
    computed: {
      linkClass () {
        return {
          'is-active': this.isActive === true
        }
      }
    },
    methods: {
      addActiveState () {
        this.isActive = true
      },
      removeActiveState () {
        this.isActive = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .slide-link {
    position: relative;
    left: 0;
    transition: left 0.3s ease-in-out;
    &.is-active,
    &:hover {
      left: 5px;
    }

    &:hover {
      color: darken(saturate(adjust-hue($text--main, 200), 5.88), 15.10);
    }
  }
</style>