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

<script>

    import BlogArticle from './../components/BlogArticle';

    export default {
        name: 'BlogTemplate',
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


<style>

</style>

