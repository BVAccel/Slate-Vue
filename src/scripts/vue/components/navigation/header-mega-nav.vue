// Template
<template>
  <div class="header__spacer">
    <header class="global-header">
      <promobar v-if="theme_settings.enable_promobar" :content="theme_settings.promobar_content"></promobar>
      <nav-main :settings="settings" :blocks="blocks"></nav-main>
    </header>
  </div>
</template>

// JavaScript
<script>
// import { EventBus, OpenCartModal } from '../../services/event.service';
// import { JSONTemplateService } from '../../services/json-template.service';

/*******************
 * VALUE PROP CARD
 ******************/
export default {
  // Component Bindings
  name: 'HeaderMegaNav',
  props: {
    theme_settings: {
      type: Object,
      required: true,
    },
    settings: {
      type: Object,
      required: false,
    },
    blocks: {
      type: Array,
      required: true,
    },
  },
  // Component Data
  data: function() {
    return {};
  },
  components: {
    promobar: () => import('./PromoBar.vue'),
    'nav-main': () => import('./NavMain.vue'),
  },
  // methods: {
  //   onOpenCartClick() {
  //     EventBus.$emit(OpenCartModal);
  //   },
  // },
  created: function() {
    // On Init
    console.log(this.theme_settings);
    console.log(this.settings);
    console.log(this.blocks);
  },
};
</script>

// SCSS
<style lang="scss" scoped>
.global-announcement {
  background-color: #263746;
  color: #edeff2;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 35px;
  text-align: center;
  height: 35px;
  display: flex;
  justify-content: center;
}
.main-nav {
  &-list {
    padding-left: 0;
    border-top: 1px solid #fff;
    flex-direction: row;
    display: flex;
  }
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    flex-wrap: wrap;
    position: relative;
    z-index: 3;
    background-color: #fff;
    padding: 0;
    border-bottom: 1px solid hsla(0, 0%, 53%, 0.2);
  }
}

.icon-button-secondary {
  font-size: 18px;
  border: 0px;
  color: #828282;
  padding: 19px;
  &:hover {
    color: #535353;
    cursor: pointer;
  }
  &:focus {
    outline: 0px;
  }
}
</style>
