<template lang="pug">
  .accordion(:class="accordionClass")
    a.accordion__header(href="#", :class="headerClass", @click.prevent="activate", :aria-label="heading")
      span.accordion__title {{ heading }}
      span.accordion__action(@click="onActionClicked()",v-show="active") {{action}}
      icon(:name="currentIcon", size="11px")
    transition(:name="transition")
      .accordion__content(v-show="active", ref="content", :style="contentStyle")
        slot
</template>

<script>
  import Icon from 'scripts/components/basic/Icon.vue'

  export default {
    name: 'Accordion',
    components: { Icon },
    props: {
      heading: {
        type: String,
        required: true
      },
      action: {
        type: String,
      },
      selected: {
        type: Boolean,
        default: false
      },
      activeIcon: {
        type: String,
        default: 'minus'
      },
      inactiveIcon: {
        type: String,
        default: 'plus'
      },
      theme: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
            'footer'
          ].includes(value)
        }
      }
    },
    data () {
      return {
        active: true,
        contentStyle: {},
        scrollHeight: 0,
        transition: 'none'
      }
    },
    computed: {
      accordionClass () {
        let classes = []

        if (this.theme !== 'default') {
          classes.push(`accordion--${this.theme}`)
        }

        this.active ? classes.push(`active-accordion`) : ''

        return classes
      },
      headerClass () {
        return {
          'is-open': this.active
        }
      },
      currentIcon () {
        return (this.active) ? this.activeIcon : this.inactiveIcon
      }
    },
    mounted () {
      this.setContentHeight()

      // NOTE: this has to be set to false after mount or scrollHeight will be 0
      this.active = this.selected
      this.transition = 'slide-vertical'

      if (this.$parent.addAccordion) {
        this.$parent.addAccordion(this)
      }

      window.addEventListener('resize', () => this.setContentHeight())
    },
    beforeDestroy () {
      this.active = false
      if (this.$parent.removeAccordion) {
        this.$parent.removeAccordion(this)
      }
    },
    methods: {
      setContentHeight () {
        let height = this.$refs.content.scrollHeight
        let containerPadding = 50

        // Set max height for animation .
        this.contentStyle = {
          'max-height': `${ height + containerPadding }px`
        }
      },
      activate () {
        if (this.$parent.activate && !this.active) {
          this.$parent.activate(this)
          this.$emit("active")
        } else {
          this.active = !this.active
        }

        this.$nextTick(() => this.setContentHeight())
      },
      onActionClicked(){
        this.$emit('actionClicked');
      },
    }
  }
</script>

<style scoped lang="scss">
  .accordion {
    &.accordion--footer {
      border-top: 1px solid $text--light;
      background-color: transparent;

      &:last-child {
        border-bottom: 1px solid $text--light;
      }
    }

    &__action{
      font-size: 12px;
      line-height: 16px;
      text-decoration: underline;
      padding:0 10px;
      font-family: $font-gotham;
    }

    &__header {
      width: 100%;
      padding: 17px 16px 16px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      font-weight: lighter;

      .navbar__mobile__nav & {
        font-size: rem(25);
        letter-spacing: -0.1px;
        line-height: 36px;
        color: $color-black;
      }

      .footer & {
        font-size: 16px;
        line-height: 27px;
        padding-left: 0;
        padding-right: 0;
      }

      .product-accordion & {
        padding: 20px 8px 14px 8px;
        font-size: rem(14);
        font-weight: 500;
        line-height: 18px;
        border-top: 1px solid $border--accent--light;
      }
    }

    &__content {
      overflow: hidden;

      &--wrapper {
        overflow: hidden;
      }
    }

    .icon {
      .accordion--footer & {
        fill: $text--light;
      }

      .product-accordion & {
        position: relative;
        top: -3px;
      }
    }
  }
</style>