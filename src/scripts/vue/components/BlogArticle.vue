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


<script>
    export default {
        name: "BlogArticle",
        props: {
            article: {
                type: Object,
                required: true
            }
        }
    }
</script>


<style>

</style>
