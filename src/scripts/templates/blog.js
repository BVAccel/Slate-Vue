import BlogTemplate from '../vue/templates/Blog';


document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
    init();
});

const initVue = () => {
    new Vue({
        delimiters: ['${', '}'],
        el: '#app-blog',
        data: {
        },
        components:{
            BlogTemplate
        },
        methods: {

        }
    });
}


// Init all functions here.
export const init = () => {
    initVue();
};




