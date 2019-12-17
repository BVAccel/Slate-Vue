<template lang="pug">
  <a class="button button--icon" :class="buttonClass" :disabled="disabled" :href="href" :title="label" :target="newTab && '_blank'" :rel="newTab && 'noopener'">
    <icon v-if="icon" :name="icon" :size="size"></icon>
    <span class="u-sr-only">{{ label }}</span>
  </a>
</template>

<script>
import Icon from "scripts/components/basic/Icon.vue";
import IconButton from "scripts/components/buttons/IconButton.vue";

export default {
  extends: IconButton,
  name: "IconLink",
  components: { Icon },
  props: {
    href: {
      type: String,
      default: "#"
    },
    newTab: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss"></style>
