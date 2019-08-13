import 'styles/templates/index/index.scss';
import ProductTemplate from '../vue/templates/product.vue';
import ButtonPrimary from '../vue/components/buttons/primary-button.vue';

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
        el: '#app-product',
        data: {
        },
        components:{
            // Wrapper Component
            ProductTemplate,
            ButtonPrimary
        },
        methods: {

        }
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};
