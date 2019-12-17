
<template lang="pug">
  transition(name="fade")
    .modal(v-if="isVisible")
      .modal__overlay(@click="close")
      icon-button.modal__close-video(v-if="video", label="Close Modal", icon="close", size="30px", :transparent="true", @click="close")
      .modal__content--video(v-if="video")
        .modal__content--video__container
          iframe(width="853", height="480", :src="videoUrl", frameborder="0", allowfullscreen)
      .modal__content(v-else)
        icon-button.modal__close(label="Close Modal", icon="close", :transparent="true", @click="close")
        slot(name="content")
</template>

<script>
  import IconButton from 'scripts/components/buttons/IconButton.vue'
  export default {
    name: 'Modal',
    components: { IconButton },
    props: {
      video: String,
      autoOpen: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isVisible: false
      }
    },
    computed: {
      videoUrl () {
        return (this.video && this.isVisible) ? `https://www.youtube.com/embed/${this.video}?autoplay=1` : ''
      }
    },
    methods: {
      open () {
        this.isVisible = true
        this.$emit('open')
      },
      close () {
        this.isVisible = false
        this.$emit('close')
      }
    },
    mounted () {
      if (this.autoOpen) {
        this.open()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    overflow-y: auto;
    background-color: rgba(0,0,0,0.5);

    .video-modal & {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &__close-video {
      position: absolute;
      top: $grid-gutter;
      right: $grid-gutter;
    }

    &__content {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      max-width: 100%;
      background-color: $bg--main;
      padding: 30px;
      @include mobile-only {
        min-height: 100vh;
      }
      @include tablet-up {
        top: 50px;
        min-width: 500px;
        padding: 65px;
      }

      &--video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: $container-max-width;
        max-width: 100%;

        &__container {
          position: relative;
          padding-bottom: 56.25%;
          padding-top: 30px; 
          height: 0; 
          overflow: hidden;

          iframe,
          object,
          embed {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    
    &__content,
    &__content--video {
      z-index: 1;
    }
    &__title {
      margin-bottom: $content-gutter;
    }
    &__close {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 44px;
      width: 44px;
      font-size: rem(36);
      line-height: 44px;
      padding: 8px;
      text-align: center;
    }
  }
</style>