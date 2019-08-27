import 'styles/templates/collection/index.scss';
import Collection from '../vue/templates/collection/collection.vue';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
  init();
});

const initVue = () => {
  /**
   * INIT VUE APP
   */
  new Vue({
    template: '<Collection :collectionHandle="collectionHandle" :collectionProductCount="collectionProductCount"/>',
    delimiters: ['${', '}'],
    el: '#app-collection',
    data: {
      collectionHandle: window.currentCollection.handle,
      collectionProductCount: window.currentCollection.productCount,
    },
    components: {
      Collection,
    },
    methods: {}
  });
};

export const init = () => {
  initVue();
};
