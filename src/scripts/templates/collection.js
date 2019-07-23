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
        delimiters: ['${', '}'],
        el: '#app-collection',
        data: {
        },
        components:{
            // Wrapper Component
            CollectionTemplate
        },
        methods: {

        }
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};
