
// template
<template >
    <!-- INLINE CART  -->
    <transition name="fade">
        <div class="inline-cart-wrapper" v-if="isOpen">
            <div class="flex-end">
                <close-button
                    @buttonClick="onCloseCartClick()">
                </close-button>
            </div>
            <h3>Shopping Cart</h3>
            <hr>
            <div v-if="this.cartData.length">
                <div v-for="(item, index) in this.cartData" :key="index" >

                    <!-- LINE ITEM -->
                    <div class="inline-cart-line-item">
                        <img class="inline-cart-image" :src="item.image" alt="">
                        <div class="inline-cart-line-item-attr">
                             <div class="inline-cart-title">
                                {{item.title}}
                            </div>
                            <div class="inline-cart-qty-wrapper">
                                <div class="inline-cart-qty">
                                     qty {{item.quantity}}
                                </div>
                                <icon-button
                                    icon="fa-plus-circle"
                                    @buttonClick="onAddOneClick(item.variant_id)">
                                </icon-button>
                                <icon-button
                                    icon="fa-minus-circle"
                                    :isDelete="true"
                                     @buttonClick="onMinusOneClick(item.key,item.quantity)">
                                </icon-button>
                            </div>
                             <div class="inline-cart-qty">
                                ${{item.price}}
                            </div>
                        </div>
                    </div>
                    <div class="flex-end">
                        <flat-button
                            @buttonClick="onRemoveItemClick(item.id)"
                            text="REMOVE ITEM">
                        </flat-button>
                    </div>
                </div>
                <hr>
            </div>
            <div v-if="!this.cartData.length">
                <h2>You Don't Have Any Items!</h2>
            </div>
            <div class="inline-cart-footer">
                <button-primary
                    text="CLEAR CART"
                    @buttonClick="onClearCart()">
                </button-primary>
            </div>
        </div>
    </transition>

</template>

// SCSS
<style lang="scss" scoped>
    .inline-cart{
        &-wrapper{
            width:400px;
            height: calc(100vh - 10px);
            background: #ffffff;
            border: solid #c5c5c5 1px;
            position: fixed;
            top: 5px;
            right: 5px;
            z-index: 100;
            padding: 20px;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.51);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.51);
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.51);
        }
        &-image{
            height:100px;
        }
        &-title{
            padding: 5px;
        }
        &-qty{
            margin-right: 10px;
            &-wrapper{
                font-size: 12px;
                padding: 5px;
                display: flex;
                align-items: center;
            }
        }
        &-footer{
            position: absolute;
            width: 400px;
            right: 0px;
            bottom: 0px;
            display: flex;
            justify-content: flex-end;
            padding: 10px;
        }
        &-line-item{
            margin-top: 10px;
            display: flex;
            &-attr{
                padding-top:5px;
            }
        }
    }

</style>



// JavaScript
<script>

    import { EventBus, OpenCartModal, AddProduct, CloseCartModal, CartUpdated } from '../../services/event.service';
    import { CartService } from '../../services/cart.service';
    import CloseButton from '../buttons/close-button.vue';
    import ButtonPrimary from '../buttons/primary-button.vue';
    import FlatButton from '../buttons/flat-button.vue';
    import IconButton from '../buttons/icon-button.vue';

    const cartService = new CartService();

    /*******************
     * VALUE PROP CARD
     ******************/
    export default {
        // Component Bindings
        name: 'InlineCartModal',
        props: {
           example:Object
        },
        // Component Data
        data: function () {
            return {
                cartData: '',
                isOpen: false
            }
        },
        components:{
            CloseButton,
            ButtonPrimary,
            FlatButton,
            IconButton
        },
        methods: {
            onClearCart(){
               cartService.clearCart();
            },
            onCloseCartClick(){
                this.isOpen = false;
            },
            onAddOneClick(variant_id){
               cartService.addItem(1,variant_id);
            },
            onMinusOneClick(key,currentQuantity){
                // subtrack one from qty
                let newQuantity = Number(currentQuantity - 1);
                cartService.changeItem(newQuantity,key)
            }
        },
         created: function () {
            // On Init
            cartService.getCartData().then((resp)=>{
                this.cartData = resp.data.items;
            })

            /**
             * EVENTS
             */

            // Add Product
            EventBus.$on(AddProduct,(data)=>{
                this.cartData = [data];
            });

            // Cart Update
            EventBus.$on(CartUpdated,(data)=>{
                this.cartData = data;
            });

            // Open Modal
            EventBus.$on(OpenCartModal,()=>{
                this.isOpen = true;
            });

            // Close Modal
            EventBus.$on(CloseCartModal,()=>{
                this.isOpen = false;
            });


        }
    }
</script>



