// Template
<template>
    <div>
        <h3>Article Template</h3>
        <div class="article-test"
            v-html="article">
        </div>
    </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>

// JavaScript
<script>

    /********************
     * ARTICLE TEMPLATE *
     *******************/
    const ComponentName = 'ArticleTemplate';

    export default {
        name: ComponentName,
        props: {
            article: {
                type: Object,
                required: false
            }
        },
        components:{},
    }

</script>



