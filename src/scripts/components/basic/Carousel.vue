
<template lang="pug">
  .carousel(ref="carousel", v-touch:swipe.left="slideNext", v-touch:swipe.right="slidePrev")
    .carousel__track.carousel__track--clone(v-if="infinite", :style="beforeTrackStyles")
      slot(name="clone-before")
    .carousel__track(:style="trackStyles")
      slot
    .carousel__track.carousel__track--clone(v-if="infinite", :style="afterTrackStyles")
      slot(name="clone-after")
    ul.carousel__dots.u-list-simple.u-list-inline(v-if="dots")
      li
        button.carousel__dots__button.u-clear-button(
          v-for="n in slides.length",
          :key="n",
          :class="{ 'is-active': n === currentSlideIndex + 1 }",
          @click="slideTo(n - 1)"
        )
          .u-hidden Show Slide {{ n }}
</template>

<script>
  import { debounce, clone } from 'scripts/lib/util.js'
  import { cloneSlide } from 'scripts/lib/util.vue.js'
  import { getInRange, normalizeSlideIndex } from 'scripts/lib/util.carousel.js'

  export default {
    name: 'Carousel',
    provide () {
      const data = {}

      Object.defineProperty(data, 'slideWidth', {
        enumerable: true,
        get: () => this.slideWidth
      })

      return { data }
    },
    props: {
      slidesToShow: {
        type: Number,
        default: 1
      },
      slidesToScroll: {
        type: Number,
        default: 1
      },
      duration: {
        type: Number,
        default: 300
      },
      centerMode: {
        type: Boolean,
        deault: false
      },
      infinite: {
        type: Boolean,
        default: false
      },
      dots: {
        type: Boolean,
        default: false
      },
      slideWidthCustom: {
        type: Number,
        required: false
      }
    },
    data () {
      return {
        slides: [],
        beforeSlides: [],
        afterSlides: [],
        carouselWidth: 0,
        offsetX: 0,
        enableTransition: false,
        nagivating: false
      }
    },
    mounted () {
      this.slides = this.getChildSlides()
      this.slides[0].componentInstance.active = true
      this.updateTrackWidth()
      window.addEventListener('resize', () => this.onResize())

      this.$nextTick(() => {
        if (this.centerMode) {
          this.offsetX = this.carouselWidth / 2 - this.slideWidth / 2
        }

        if (this.infinite) this.initClones()
        this.enableTransition = true
      })
    },
    beforeUpdate () {
      let isForcedUpdate = this.infinite && (!this.$slots['before'] || !this.$slots['after'])

      if (isForcedUpdate) {
        this.initClones()
      }
    },
    computed: {
      trackWidth () {
        return this.slideWidth * this.slides.length
      },
      cloneTrackWidth () {
        return this.trackWidth * 2
      },
      trackTransition () {
        return (this.enableTransition) ? `${this.duration}ms ease all` : 'none'
      },
      trackStyles () {
        return {
          width: `${this.trackWidth}px`,
          transform: `translateX(${this.offsetX}px)`,
          transition: (this.enableTransition) ? `${this.duration}ms ease all` : 'none'
        }
      },
      beforeTrackStyles () {
        return {
          width: `${this.cloneTrackWidth}px`,
          transform: `translateX(${this.offsetX - this.cloneTrackWidth}px)`,
          transition: (this.enableTransition) ? `${this.duration}ms ease all` : 'none'
        }
      },
      afterTrackStyles () {
        return {
          width: `${this.cloneTrackWidth}px`,
          transform: `translateX(${this.offsetX + this.trackWidth}px)`,
          transition: (this.enableTransition) ? `${this.duration}ms ease all` : 'none'
        }
      },
      slideWidth () {
        if ( this.slideWidthCustom ) {
          return this.slideWidthCustom
        } else {
          return this.carouselWidth / this.slidesToShow
        }
      },
      currentSlideIndex () {
        return this.slides.findIndex(slide => slide.componentInstance.active)
      },
      carouselStatus() {
        if ( this.currentSlideIndex ===  ( this.slides.length - 2 ) ) {
          return 'end'
        } 
        if ( this.currentSlideIndex === 0 ) {
          return 'beginning'
        }
        else {
          return this.currentSlideIndex
        }
      }
    },
    watch: {
      slidesToShow () {
        this.onResize()
      },
      centerMode () {
        this.onResize()
      },
      infinite () {
        this.onResize()
      }
    },
    methods: {
      getActiveIndex () {
        return this.slides.findIndex(slide => slide.componentInstance.active)
      },
      getSlideClones (set) {
        let slides = []

        for (let i = 0, j = this.slides.length; i < j; i++) {
          slides.push(cloneSlide(this.slides[i], Math.abs(i - this.slides.length * set)))
        }

        return slides
      },
      initClones () {
        this.$slots['clone-before'] = this.getSlideClones(1).concat(this.getSlideClones(2))
        this.$slots['clone-after'] = this.getSlideClones(3).concat(this.getSlideClones(4))
      },
      getChildSlides () {
        return this.$slots.default.filter(el => {
          if (!el.componentOptions || !el.componentOptions.Ctor) {
            return false;
          }
          return el.componentOptions.Ctor.options.name === 'Slide';
        })
      },
      onResize: debounce(function () {

        this.updateTrackWidth()
        this.slideTo(this.currentSlideIndex)
      }, 50),
      updateTrackWidth () {
        this.carouselWidth = this.$refs.carousel.offsetWidth
      },
      setCurrentSlide (currentIndex) {
        this.slides.forEach((slide, index) => slide.componentInstance.active = (currentIndex === index))
        setTimeout(() => {
          this.navigating = false
          this.enableTransition = true
          this.$emit('after-slide', this.getActiveIndex())
        }, 50)
      },
      getNewOffset (index) {
        let offset = -(index * this.slideWidth)
        return (this.centerMode)
          ? this.carouselWidth / 2 - this.slideWidth / 2 + offset
          : offset
      },
      slideTo (index) {
        if (!this.navigating && index !== this.currentSlideIndex) {
          this.$emit('before-slide', { from: this.getActiveIndex(), to: index })
          this.navigating = true

          if (!this.infinite) {
            index = (this.centerMode)
              ? getInRange(index, 0, this.slides.length - 1)
              : getInRange(index, 0, this.slides.length - this.slidesToShow)
          }

          this.offsetX = this.getNewOffset(index)

          setTimeout(() => {
            if (this.infinite) {
              index = normalizeSlideIndex(index, this.slides.length)
              this.enableTransition = false
              this.$nextTick(() => {
                this.offsetX = this.getNewOffset(index)
                this.setCurrentSlide(index)
              })
            } else {
              this.setCurrentSlide(index)
            }
          }, this.duration + 1)
        }
      },
      slideNext () {
        this.slideTo(this.currentSlideIndex + this.slidesToScroll)
      },
      slidePrev () {
        this.slideTo(this.currentSlideIndex - this.slidesToScroll)
      }
    }
  }
</script>

<style lang="scss">
  .carousel {
    overflow: hidden;
    position: relative;

    &__track {
      display: flex;

      @include tablet-up {
        justify-content: center;
        min-width: 100%;
      }

      &--clone {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      }
    }

    &--video {
      padding: 24px 0;

      @include tablet-up {
        padding: 50px 0;
      }

      .carousel {
        overflow: visible;
      }
    }

    &__title {
      font-size: rem(36);
      line-height: 1.3;
      margin: 0 0 30px;
      text-align: center;
      color: $text--main;
    }

    &__nav {
      display: flex;
      justify-content: center;
      margin-bottom: 35px;

      @include tablet-up {
        margin-bottom: 50px;
      }

      &__prev {
        margin-right: 4px;
      }

      &__next {
        margin-left: 4px;
      }
    }

    &__dots {
      display: flex;
      justify-content: center;
      margin-top: 18px;

      &__button {
        position: relative;
        padding: 5px;

        &:after {
          content: '';
          display: block;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: $bg--alt;
          transition: 0.3s ease all;
        }

        &:hover:after {
          background-color: darken($bg--alt, 5%);
        }

        &.is-active:after {
          background-color: $bg--dark;
        }
      }
    }
  }
</style>