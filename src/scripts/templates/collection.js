import 'styles/templates/collection/index.scss';
import CollectionTemplate from '../vue/templates/collection.vue';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});


const initVue = () => {
    /**
     * INIT VUE APP
     */
    new Vue({
      template: '<CollectionTemplate :collectionHandle="collectionHandle" :collectionProductCount="collectionProductCount"/>',
      delimiters: ['${', '}'],
      el: '#app-collection',
      data: {
        collectionHandle: window.currentCollection.handle,
        collectionProductCount: window.currentCollection.productCount,
      },
      components: {
        CollectionTemplate,
      },
      methods: {},
      create: function() {
        console.log(data.collectionHandle, data.collectionProductCount);
      },
    });
}

export const init = () => {
    initVue();
};
