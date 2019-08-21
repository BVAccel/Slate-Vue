import ArticleTemplate from '../vue/templates/Article';


document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});

const initVue = () => {
    new Vue({
        delimiters: ['${', '}'],
        el: '#app-article',
        data: {},
        components:{ArticleTemplate},
        methods: {}
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};




