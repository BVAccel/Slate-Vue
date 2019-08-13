import 'styles/templates/collection/index.scss';
import CollectionTemplate from '../vue/templates/Collection.vue';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});


const initVue = () => {
    /**
     * INIT VUE APP
     */
    new Vue({
        delimiters: ['${', '}'],
        el: '#app-collection',
        data: {
        },
        components:{
            CollectionTemplate
        },
        methods: {

        }
    });
}

export const init = () => {
    initVue();
};
