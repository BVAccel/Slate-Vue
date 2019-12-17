
<template lang="pug">
  .toast
    transition-group(name="slide-fade-right")
      .toast__message(
        v-for="message in messages", 
        :key="message.id",
        :class="{ 'error': message.type === 'error' }"
      )
        p.toast__message__copy(v-html="message.text")
        primary-button.toast__message__cta(
          v-if="message.callback", 
          :small="true", 
          :secondary="true", 
          :label="message.label", 
          @click="message.callback"
        )
</template>

<script>
  import { mapState } from 'vuex'
  import PrimaryButton from 'scripts/components/buttons/PrimaryButton.vue'

  export default {
    name: 'Toast',
    components: { PrimaryButton },
    computed: {
      ...mapState({
        messages: state => state.toast.messages
      })
    }
  }
</script>

<style scoped lang="scss">
  .toast {
    position: fixed;
    bottom: 10px;
    left: 10px;
    max-width: calc(100% - 20px);
    color: $text--light;
    text-align: center;

    @include tablet-up {
      text-align: left;
    }

    &__message {
      padding: 10px 20px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: $bg--dark;
      border-radius: 4px;

      &.error {
        background-color: $color--error;
      }

      &__copy {
        line-height: 1.7;
      }

      &__cta {
        margin-left: 10px;
      }
    }
  }
</style>
