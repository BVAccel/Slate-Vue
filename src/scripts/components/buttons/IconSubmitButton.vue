
<template lang="pug">
  <button class="button button--icon" type="submit" :class="buttonClass" :disabled="disabled" @click="$emit('click')">
    <icon v-if="icon" :name="icon" :size="size"></icon><span class="u-sr-only">{{ label }}</span>
  </button>
</template>

<script>
  import Icon from 'scripts/components/basic/Icon.vue'
  import IconButton from 'scripts/components/buttons/IconButton.vue'

  export default {
    extends: IconButton,
    components: { Icon },
    name: 'IconSubmitButton'
  }
</script>

<style scoped lang="scss">
</style>