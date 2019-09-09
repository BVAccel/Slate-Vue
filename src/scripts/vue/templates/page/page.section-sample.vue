// template 
<template >
  <div>
    <h1>Section Sample</h1>
    <vue-section-boilerplate v-if="ready" :section="section_data['vue-section-boilerplate']"></vue-section-boilerplate>
  </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>

// JavaScript
<script>
  import { ShopifyAdminService } from '../../core/services';
  const shopifyAdminService = new ShopifyAdminService();

  export default {
    name: 'PageTemplate',
    data: function ()  {
      return {
        ready: false,
        sections_array: ['vue-section-boilerplate'],
        section_data: {}
      }
    },
    components:{
      'vue-section-boilerplate': () => import('../../core/vue-section-boilerplate.vue'),
    },
    created: function () {
      shopifyAdminService.getMultiSectionData(this.sections_array)
      .then((res) => {
        this.section_data = res;
        this.ready = true;
      });
    },
  }
</script>



