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


<script>

    import CollectionProduct from '../components/CollectionProduct';

    export default {
        name: 'CollectionTemplate',
        props: {
            exampleProp: {
                type: String,
                required: false
            }
        },
        data: function(){},
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



<style lang="scss" scoped>

</style>