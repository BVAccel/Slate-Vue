<template lang="pug">
  <button class="button button--icon" type="button" :class="buttonClass" :disabled="disabled" @click="$emit('click')">
    <icon v-if="icon" :name="icon" :size="size"></icon><span class="u-sr-only">{{ label }}</span>
  </button>
</template>

<script>
import Icon from 'scripts/components/basic/Icon.vue';
import PrimaryButton from 'scripts/components/buttons/PrimaryButton.vue';

export default {
  extends: PrimaryButton,
  components: { Icon },
  name: 'IconButton',
  props: {
    size: String,
  },
};
</script>

<style scoped lang="scss"></style>
