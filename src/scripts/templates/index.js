import 'styles/templates/index/index.scss';
import IndexTemplate from '../vue/templates/index.vue';

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
        el: '#app-index',
        data: {
        },
        components:{
            // Wrapper Component
            IndexTemplate
        },
        methods: {

        }
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};




