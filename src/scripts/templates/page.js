// import 'styles/templates/index/index.scss';
import PageTemplate from '../vue/templates/page/page.vue';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});

const initVue = () => {
    new Vue({
        delimiters: ['${', '}'],
        el: '#app-page',
        data: {
            content: {}
        },
        components:{
            PageTemplate
        },
        methods: {

        }
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};




