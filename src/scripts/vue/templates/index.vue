
// template
<template >
 <div>
    <!-- Section Outlet-->
    <slot></slot>
    <div style="padding: 10px;">
         <button-primary
            text="OPEN CART"
            @buttonClick="onOpenCartClick()">
        </button-primary>
        <button-primary
            text="CLOSE CART"
            @buttonClick="onCloseCartClick()">
        </button-primary>
        <button-primary
            text="BUY ITEM"
            @buttonClick="onButtonClick()">
        </button-primary>
        <button-primary
            text="CART DATA"
            @buttonClick="onGetCartClick()">
        </button-primary>
    </div>

 </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>


// JavaScript
<script>

    /******************
     *  INDEX TEMPALTE
     *****************/
    import ButtonPrimary from '../components/buttons/primary-button.vue';
    import { EventBus, OpenCartModal, CloseCartModal } from '../services/event.service';
    import { CartService } from '../services/cart.service';

    const cartService = new CartService();

    export default {
        // Component Bindings
        name: 'Index',
        props: {
            exampleProp: String
        },
        // Component Data
        data: function () {
            return {
                exampleArr:[]
            }
        },
        components:{
            ButtonPrimary
        },
        methods: {
            testMethod(value){

            },
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
        },
        created: function () {
           // Runs on Init
        }
    }

</script>



