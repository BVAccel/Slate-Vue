
<template lang="pug">
  <button class="button" type="submit" :class="buttonClass" :disabled="disabled" @click="$emit('click')">
    <icon v-if="icon" :name="icon" :size="iconSize"></icon><span>{{ label }}</span>
  </button>
</template>

<script>
  import Icon from 'scripts/components/basic/Icon.vue'
  import PrimaryButton from 'scripts/components/buttons/PrimaryButton.vue'

  export default {
    extends: PrimaryButton,
    components: { Icon },
    name: 'SubmitButton',
  }
</script>

<style scoped lang="scss">
</style>