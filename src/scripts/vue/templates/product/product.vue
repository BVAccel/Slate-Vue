
// template
<template >
    <div class="product-page-wrapper">
        <div class="product-page-container">
            <div class="product-page-image-block-wrapper">
                <img :src="featuredImage.src" class="product-page-featured-image" alt="Featured Image">
            </div>
            <div class="product-page-description-block-wrapper">
                <h1>{{title}}</h1>
                <div class="product-page-price">
                    ${{featuredPrice}}
                </div>
                <hr>

                <div class="product-page-description-section-wrapper">
                    <div class="product-page-description-section">
                        <label class="product-page-description-label">Frame Color</label>
                        <div  class="swatch-wrapper">
                            <div
                            v-for="(color,index) in colorOptions" :key="index"
                            class="swatch-block"
                            :class="{
                                'black-swatch': color.value == Black,
                                'vader-swatch': color.value == Vader,
                                'tort-swatch': color.value == Tort,
                                'tobacco-swatch': color.value == Tobacco,
                                'cola-swatch': color.value == Cola,}">
                            </div>
                        </div>
                    </div>

                    <div class="product-page-description-section">
                        <label class="product-page-description-label">Lens Type</label>
                        <div>
                            put lens here
                        </div>
                    </div>

                    <div class="product-page-description-section">
                        <label class="product-page-description-label">Quantity</label>
                        <div>
                            put counter here
                        </div>
                    </div>
                </div>


                <primary-button
                    text="ADD TO CART">
                </primary-button>
            </div>
        </div>
    </div>
</template>

// SCSS
<style lang="scss" scoped>
    .product-page{
        &-wrapper{
            display: flex;
            justify-content: center
        }
        &-container{
            max-width: 1400px;
            width: 100%;
            display: grid;
            grid-template-columns: 50% 50%;
        }
        &-featured-image{
            height: auto;
            width: 100%;
        }
        &-image{
            &-block{
                &-wrapper{

                }
            }
        }
        &-description{
            &-block{
                &-wrapper{
                    padding: 15px;
                }
            }
            &-label{
                font-weight: 600;
            }
            &-section{
                margin-bottom: 20px;
                &-wrapper{
                    margin-top:20px;
                }
            }
        }
    }

    hr{
        border: .5px #dad9d9 solid
    }

    h1{
        font-weight: 400;
        letter-spacing: 1.2px;
        line-height: 1.2;
    }

    .swatch{
        &-block{
            height:30px;
            width:30px;
            border:rgb(185, 185, 185) solid .5px;
            border-spacing: 10px;
            margin:15px 15px 15px 0px;
            position: relative;
            &:after{
                content: "";
                border: 1px solid #bbb;
                width: 38px;
                height: 37px;
                display: inline-block;
                position: absolute;
                top: -4px;
                right: -4px;
            }
            &:hover{
                cursor: pointer;
                opacity: .8;
            }
        }
        &-wrapper{
            display: flex;
            flex-wrap: wrap;
        }
    }
    .black-swatch{
        background-color: black
    }
    .vader-swatch{
        background-color: rgb(61, 61, 61)
    }
    .tort-swatch{
        background-color: rgb(100, 84, 71)
    }
    .tobacco-swatch{
        background-color: rgb(177, 135, 101)
    }
    .cola-swatch{
        background-color: rgb(177, 146, 112)
    }

</style>


// JavaScript
<script>

    /********************
     *  PRODUCT TEMPALTE
     *******************/
    import { PrimaryButton } from '../../shared/components.js';
    import { ShopifyService } from '../../core/services.js';

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
                vendor:'',
                featuredImage:{},
                featuredPrice:'',
                lensOptions:{},
                colorOptions:{},
                //Colors
                Black:'black',
                Vader:'vader',
                Tort:'tort',
                Tobacco:'tobacco',
                Cola:'cola'
            }
        },
        components:{
            PrimaryButton
        },
        methods: {
            testMethod(value){

            },
            setFeaturedImage(image){
                this.featuredImage = {
                    'src':image.src
                }
            },
            setFeaturedPrice(varId){
                // look through varients and get id.
                if(varId && this.variants.length){
                    for (let i = 0; i < this.variants.length; i++) {
                        const current = this.variants[i];
                        if(current.id == varId){
                            this.featuredPrice = current.price
                        }
                    }
                }
            },
            setOptions(options){
                const Color = 'Color';
                const Lens = 'Lens';

                for (let i = 0; i < options.length; i++) {
                    const current = options[i];
                    if(current.name == Color){
                        this.colorOptions = current.values
                    }
                    if(current.name == Lens){

                    }
                }

            }
        },
        created: function () {
            // Runs on Init
            shopifyService.getProduct(this.id).then((resp)=>{
            console.log('product information', resp);
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
            this.setFeaturedImage(resp.images[0]);
            this.setFeaturedPrice(resp.variants[0].id);
            this.setOptions(resp.options);
           })

        }
    }

</script>



