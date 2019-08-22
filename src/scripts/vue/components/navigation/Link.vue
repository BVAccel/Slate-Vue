<template>
  <li>
    <a :href="link.url" v-text="link.title"></a>
  </li>
</template>

<script>
export default {
  name: 'Link',
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
