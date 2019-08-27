// template
<template>
    <div>
        <h3>Blog Template</h3>
        <blog-article
            class="blog-test"
            v-for="(article, index) in blog"
                :key="index"
                :article="article"
        ></blog-article>
    </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>

// JavaScript
<script>
    /******************
     * BLOG TEMPLATE *
     *****************/
    // Consts
    const ComponentName = 'BlogTemplate';

    // Imports
    import BlogArticle from './components/blog-article.vue';

    export default {
        name: ComponentName,
        props: {
            blog: {
                type: Array,
                required: false
            }
        },
        components: {
            BlogArticle
        }
    }

</script>




