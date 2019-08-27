// template
<template>
    <div>
        <h3
            v-text="product.title"
        ></h3>
        <div
            v-text="product.description"
        ></div>
    </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>

// JavaScript
<script>
    export default {
        name: "CollectionProduct",
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>



