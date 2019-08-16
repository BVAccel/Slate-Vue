
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
    import { EventBus, OpenCartModal, AddProduct, CloseCartModal } from '../services/event.service';

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
                let self = this;
                // CartJS.addItem(29207420371018,1, {
                //     // Define a success callback to display a success message.
                //     "success": self.onProductAddedToCart
                // });
                this.$http.post ( '/cart/add.js', {quantity: 1, id: 29207420371018} ).then(function (resp) {
                    // success actions
                    console.log('ajax works',resp.data);
                    self.onProductAddedToCart(resp.data);
                });
            },
            onGetCartClick(){
                console.log('cart items', CartJS.cart.items);
            },
            onProductAddedToCart(data){
                EventBus.$emit(AddProduct ,data);
            }
        },
        created: function () {
           // Runs on Init
        }
    }

</script>



