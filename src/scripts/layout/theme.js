import { focusHash, bindInPageLinks } from '@shopify/theme-a11y';
import 'styles/theme.scss';
import 'styles/theme.scss.liquid';
// Vue components
import ThemeTemplate from '../vue/templates/theme/theme.vue';
import ThemeTemplateFooter from '../vue/templates/theme/theme-footer.vue';

// Common a11y fixes
focusHash();
bindInPageLinks();

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
  init();
});


// HMR
if (module.hot) {
  module.hot.accept();
}

if (module.hot) {
  module.hot.dispose(() => {
    // reset/undo the behavior/side effect that as possibly enabled/enacted
  });
}

const initVue = () => {



  Vue.prototype.$http = axios;
  Window.$http = axios;

  /**
   * INIT VUE APP
   */
  new Vue({
      delimiters: ['${', '}'],
      el: '#app-theme',
      data: {
      },
      components:{
          // Wrapper Component
          ThemeTemplate
      },
      methods: {

      }
  });

  new Vue({
    delimiters: ['${', '}'],
    el: '#app-theme-footer',
    data: {
    },
    components:{
        // Wrapper Component
        ThemeTemplateFooter
    },
    methods: {

    }
  });

}

// Init all functions here.
export const init = () => {
  initVue();
};