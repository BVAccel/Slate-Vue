
// template
<template >
 <div>

    <div>
        <h1>HOME PAGE TITLE</h1>
    </div>
    <hr>
    <div>Buy not button for the clif bar</div>
    <button-primary
        text="open cart"
        @buttonClick="onOpenCartClick()">
    </button-primary>
    <button-primary
        text="close cart"
        @buttonClick="onCloseCartClick()">
    </button-primary>
    <button-primary
        text="buy a clif"
        @buttonClick="onButtonClick()">
    </button-primary>
     <button-primary
        text="get cart"
        @buttonClick="onGetCartClick()">
    </button-primary>


    <!-- Section Outlet-->
    <slot></slot>

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



