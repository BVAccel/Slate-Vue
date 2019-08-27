// template
<template >
 <div>
    <div>
        <h1>Collection Template</h1>
        <collection-product
            class="collection_single_prod"
            v-for="(product, index) in collection"
                :key="index"
                :product="product"
        />
    </div>
 </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>

// JavaScript
<script>

    /************************
     * COLLECTION TEMPLATE *
     ***********************/
    const ComponentName = 'CollectionTemplate';
    import CollectionProduct from './components/collection-product.vue';

    export default {
        name: ComponentName,
        props: {
            exampleProp: {
                type: String,
                required: false
            }
        },
        data: function(){

        },
        props: {
            collection: {
                type: Object
            }
        },
        components:{
            CollectionProduct
        },
        methods: {}
    }

</script>



