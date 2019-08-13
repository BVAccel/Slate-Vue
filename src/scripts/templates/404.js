import AppErr from '../vue/templates/404';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});

const initVue = () => {
    new Vue({
        delimiters: ['${', '}'],
        el: '#app-404',
        data: {},
        components:{AppErr},
        methods: {}
    });
}

export const init = () => {
    initVue();
};




