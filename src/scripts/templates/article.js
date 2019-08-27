import ArticleTemplate from '../vue/templates/article/article.vue';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});

const initVue = () => {
    new Vue({
        delimiters: ['${', '}'],
        el: '#app-article',
        data: {},
        components:{
            ArticleTemplate
        },
        methods: {}
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};




