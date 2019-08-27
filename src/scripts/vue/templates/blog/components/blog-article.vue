// template
<template>
    <div>
        <h3
            v-text="article.title"
        ></h3>
        <p
            v-text="article.author"
        ></p>
    </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>

// JavaScript
<script>
    /******************
     *  BLOG ARTICLE  *
     *****************/

    const ComponentName = 'BlogArticle';

    export default {
        name: ComponentName,
        props: {
            article: {
                type: Object,
                required: true
            }
        }
    }

</script>


