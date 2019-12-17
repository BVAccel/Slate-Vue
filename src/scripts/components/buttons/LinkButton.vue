
<template lang="pug">
  <a class="button" :href="href" :class="buttonClass" :disabled="disabled">
    <icon v-if="icon" :name="icon" :size="iconSize"></icon><span>{{ label }}</span>
  </a>
</template>

<script>
  import Icon from 'scripts/components/basic/Icon.vue'
  import PrimaryButton from 'scripts/components/buttons/PrimaryButton.vue'

  export default {
    extends: PrimaryButton,
    components: { Icon },
    name: 'LinkButton',
    props: {
      href: {
        type: String,
        default: '#'
      }
    }
  }
</script>

<style scoped lang="scss">
</style>