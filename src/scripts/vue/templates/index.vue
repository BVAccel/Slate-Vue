
// template
<template >
  <div>
    <!-- Section Outlet-->
    <slot></slot>
    <div style="padding: 10px;">
      <button-primary text="OPEN CART" @buttonClick="onOpenCartClick()"></button-primary>
      <button-primary text="CLOSE CART" @buttonClick="onCloseCartClick()"></button-primary>
      <button-primary text="BUY ITEM" @buttonClick="onButtonClick()"></button-primary>
      <button-primary text="CART DATA" @buttonClick="onGetCartClick()"></button-primary>
    </div>
  </div>
</template>

// SCSS
<style lang="scss" scoped>
    .active{
        background:red;
    }
    .center{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    li{
        list-style-type: none;
    }
    .item-card{
        height:250px;
        width: 250px;
        border: 1px solid rgb(202, 202, 202);
        padding: 20px;
        margin: 5px;
        word-wrap: break-word;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.19);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.19);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.19);
        position: relative;
        &-button{
            position: absolute;
            bottom: 20px;
            right:20px;
        }
    }
</style>

// JavaScript
<script>

    /******************
     * INDEX TEMPLATE *
     *****************/
    import ButtonPrimary from '../components/buttons/primary-button.vue';
    import IconButton from '../components/buttons/icon-button.vue';
    import { EventBus, OpenCartModal, CloseCartModal } from '../services/event.service';
    import { CartService } from '../services/cart.service';
    import { ShopifyService } from '../services/shopify.service';
    

    const cartService = new CartService();
    const shopifyService = new ShopifyService();
    const ComponentName = 'Index';


    export default {
        // Component Bindings
        name: ComponentName,
        props: {
            exampleProp: String
        },
        // Component Data
        data: function () {
            return {
                exampleArr:[],
                dummyData:[],
                // Pagination
                numberOfPaginationButtons: Number,
                activePage: Number,
                pageNumberArray:[],
                 // Pagination Data
                numberOfItemsPerPage: Number,
                items:[],
            }
        },
        components:{
            ButtonPrimary,
            IconButton
        },
        methods: {
            onOpenCartClick(){
                EventBus.$emit(OpenCartModal);
            },
            onCloseCartClick(){
                EventBus.$emit(CloseCartModal);
            },
            onButtonClick(){
                const ExampleItem = 29207420371018;
                cartService.addItem(1,ExampleItem);
            },
            onGetCartClick(){
                cartService.getCartData().then((resp)=>{
                   console.log('cart items',resp);
                })
            }
        }
    }

</script>



