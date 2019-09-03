import 'styles/templates/index/index.scss';
import ProductTemplate from '../vue/templates/product/product.vue';
import PrimaryButton from '../vue/shared/components/buttons/primary-button.vue';

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
            PrimaryButton
        },
        methods: {

        }
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};
