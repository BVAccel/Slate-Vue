// Template
<template>
  <!-- Build section using props: settings & blocks -->
  <section v-if="settings.enabled">
    <ul v-if="blocks">
      <li v-for="key in block_order" v-if="blocks[key].settings.enabled">
        <img :src="blocks[key].settings.image" />
        <p v-if="blocks[key].settings.title" v-text="blocks[key].settings.title"></p>
      </li>
    </ul>
  </section>
</template>

// JavaScript
<script>
export default {
  name: 'VueSectionBoilerplate',
  props: {
    theme_settings: {
      type: Object,
      required: false,
    },
    settings: {
      type: Object,
      required: false,
    },
    blocks: {
      type: Object,
      required: false,
    },
    block_order: {
      type: Array,
      required: false,
    },
  },
  created: function() {
    // console.log(this.theme_settings);
    // console.log(this.settings);
    console.log(this.blocks);
  },
};
</script>

// SCSS
<style lang="scss" scoped></style>
