import PageNotFoundTemplate from '../vue/templates/404/404.vue';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});

const initVue = () => {
    new Vue({
        delimiters: ['${', '}'],
        el: '#app-404',
        data: {},
        components:{
            PageNotFoundTemplate
        },
        methods: {}
    });
}

export const init = () => {
    initVue();
};




