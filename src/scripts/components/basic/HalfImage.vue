<template lang="pug">
  section.half-image
    .half-image--text_container
      .half-image--text
        slot
    .half-image--image
      img(:src="this.image" :alt="this.altText")
</template>

<script>
export default {
  name: "HalfImage",
  props: {
    image: String,
    altText: String
  },
  computed: {
    isMobile () {
      return this.$mq === 'mobile';
    }
  }
}
</script>

<style lang="scss" scoped>
  .half-image {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 50px;

    @include tablet-small-up {
      flex-direction: row;
      margin-bottom: 24px;
    }

    &--image {
      height: 400px;

      @include mobile-only {
        width: 100%;
      }

      @include tablet-small-up {
        flex: 1;
        height: 600px;
      }

      @include tablet-up {
        height: 750px;
      }

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &--text {
      text-align: center;
      max-width: 327px;

      @include tablet-small-up {
        text-align: left;
      }

      &_container {
        
        margin-left: auto;
        margin-right: auto;

        @include tablet-small-up {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: unset;
          margin-right: unset;
        }
      }

      &_header {
        font-weight: 500;
        font-size: rem(30);
        line-height: rem(38);
        margin-top: 25px;
        margin-bottom: 21px;

        @include tablet-up {
          font-size: rem(40);
          line-height: rem(55);
          margin-top: 0;
          margin-bottom: 8px;
        }
      }

      &_paragraph {
        font-family: $font-gotham;
        font-size: rem(14);
        line-height: rem(22);
        margin-top: 0;
        margin-bottom: 35px;

        @include tablet-up {
          font-size: rem(16);
          line-height: rem(26);
          margin-bottom: 50px;
        }
      }

      &_links {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include tablet-small-up {
          align-items: flex-start;
        }
      }

      &_link {
        font-weight: 500;
      
        &:not(:first-child) {
          margin-top: 25px;

          @include tablet-small-up {
            margin-top: 20px;
          }
        }
      }
    }
  }
</style>