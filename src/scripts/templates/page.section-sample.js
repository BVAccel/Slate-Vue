import PageTemplate from '../vue/templates/page/page.section-sample.vue';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
  init();
});

const initVue = () => {
  new Vue({
    delimiters: ['${', '}'],
    el: '#app-page',
    components:{
      PageTemplate
    },
  });
}

// Init all functions here.
export const init = () => {
  initVue();
};