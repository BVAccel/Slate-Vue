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


<style>

</style>
