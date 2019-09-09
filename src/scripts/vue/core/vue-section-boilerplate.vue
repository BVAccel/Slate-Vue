// Template
<template>
  <!-- Build section using props: settings & blocks -->
  <section v-if="section.settings.enabled">
    <ul v-if="section.blocks">
      <li v-for="block in getBlocks()" v-if="block.settings.enabled">
        <img :src="imgUrl(block.settings.image)" />
        <p v-if="block.settings.title" v-text="block.settings.title"></p>
      </li>
    </ul>
  </section>
</template>

// JavaScript
<script>
import { ShopifyAdminService } from './services';
const shopifyAdminService = new ShopifyAdminService();

export default {
  name: 'VueSectionBoilerplate',
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getBlocks: function () {
      return this.section.block_order.map((handle) => {
        return this.section.blocks[handle];
      });
    },
    imgUrl: shopifyAdminService.imgUrl,
  },
  created: function() {
    // console.log('SECTION:', this.section);
  },
};
</script>

// SCSS
<style lang="scss" scoped></style>
