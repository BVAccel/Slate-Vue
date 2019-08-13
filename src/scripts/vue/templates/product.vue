
// template
<template >
 <div>

    <div>
        <h1>PRODUCT PAGE TITLE</h1>
    </div>
    <hr>
    <div>{{this.availableForSale}}</div>
    <div>{{this.createdAt}}</div>
    <div>{{this.description}}</div>
    <div>{{this.handle}}</div>
    <div>{{this.title}}</div>

 </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>


// JavaScript
<script>

    /********************
     *  PRODUCT TEMPALTE
     *******************/
    import ButtonPrimary from '../components/buttons/primary-button.vue';
    import { ShopifyService } from '../services/shopify.service';

    /**
     * SERVICES
     */
    const shopifyService = new ShopifyService();

    export default {
        // Component Bindings
        name: 'Product',
        props: {
            id: String
        },
        // Component Data
        data: function () {
            return {
                availableForSale:'',
                createdAt:'',
                description:'',
                descriptionHtml:'',
                handle:'',
                images:'',
                options:'',
                productType:'',
                publishedAt:'',
                title:'',
                type:'',
                updatedAt:'',
                variants:'',
                vendor:''
            }
        },
        components:{
            ButtonPrimary
        },
        methods: {
             testMethod(value){

            }
        },
        created: function () {
           // Runs on Init
           shopifyService.getProduct(this.id).then((resp)=>{
            this.availableForSale= resp.availableForSale
            this.createdAt = resp.createdAt;
            this.description = resp.description;
            this.descriptionHtml = resp.descriptionHtml;
            this.handle = resp.handle;
            this.images = resp.images;
            this.options = resp.options;
            this.productType = resp.productType;
            this.publishedAt = resp.publishedAt;
            this.title = resp.title;
            this.type = resp.type;
            this.updatedAt = resp.updatedAt;
            this.variants = resp.variants;
            this.vendor = resp.vendor;
           })

        }
    }

</script>



