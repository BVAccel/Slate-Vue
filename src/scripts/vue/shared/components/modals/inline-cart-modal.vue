
// template
<template >
    <!-- INLINE CART  -->
    <transition name="fade">
        <div class="inline-cart-wrapper" v-if="isOpen">
            <div class="flex-end">
                <icon-button
                    icon="fas fa-times"
                    @buttonClick="onCloseCartClick()">
                </icon-button>
            </div>
            <h3 class="inline-cart-title">REVIEW YOUR CART</h3>
            <div v-if="this.itemData.length" class="inline-cart-line-item-wrapper">
                <div v-for="(item, index) in this.itemData" :key="index" >

                    <!-- LINE ITEM -->
                    <div class="inline-cart-line-item">
                        <img class="inline-cart-image" :src="item.image" alt="">
                        <div class="inline-cart-line-item-attr">
                             <div class="inline-cart-item-title">
                                {{item.title}}
                            </div>
                            <hr class="inline-cart-hr">
                            <div class="inline-cart-qty-wrapper">
                                <div class="inline-cart-qty">
                                     qty {{item.quantity}}
                                </div>
                                <icon-button
                                    icon="fas fa-plus"
                                    @buttonClick="onAddOneClick(item.variant_id)">
                                </icon-button>
                                <icon-button
                                    icon="fas fa-minus"
                                    @buttonClick="onMinusOneClick(item.key,item.quantity)">
                                </icon-button>
                                <icon-button
                                    icon="far fa-trash-alt"
                                    @buttonClick="onRemoveItemClick(item.key)">
                                </icon-button>
                            </div>
                             <div class="inline-cart-price">
                                ${{item.price}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!this.itemData.length" class="empty-cart-message-wrapper">
                <div class="empty-cart-message">
                    <h2>No Products In Here!</h2>
                    <a href="#" class="primary-link">start shopping</a>
                </div>
            </div>
            <div class="inline-cart-footer">
                <h3 class="inline-cart-footer-title">TOTAL : ${{cartData.total_price}}</h3>
                <div class="inline-cart-footer-disclaimer">* Taxes and shipping calculated at checkout</div>
                <button-primary
                    text="CHECKOUT"
                    @buttonClick="onCheckoutClick()">
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
        &-hr{
            border: .5px solid #dadada;
        }
        &-image{
            height:100px;
            margin:10px;
        }
        &-title{
            font-size: 16px;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 3px;
            line-height: 21px;
            color: #555759;
        }
        &-item-title{
            font-size: 20px;
            text-transform: lowercase;
            line-height: 26px;
            color: #555759;
            margin: 0;
        }
        &-qty{
            margin-right: 10px;
            &-wrapper{
                font-size: 12px;
                display: flex;
                align-items: center;
                font-size: 13px;
                color: #263746;
                line-height: 17px;
            }
        }
        &-price{
            font-size: 16px;
            letter-spacing: 1px;
            line-height: 21px;
            color: #7c98ab;
        }
        &-footer{
            width: 398px;
            text-align: center;
            padding: 20px;
            background-color: #edeff2;
            min-height: 140px;
            margin-left: -20px;
            &-title{
                font-size: 22px;
                line-height: 26px;
                color: #555759;
                margin: 0;
            }
            &-disclaimer{
                font-size: 12px;
                color: #263746;
                line-height: 13px;
                margin: 10px 0;
                letter-spacing: 0;
            }
        }
        &-line-item{
            margin-top: 10px;
            display: flex;
            &-wrapper{
                margin-top:40px;
                height: calc(100vh - 278px);
                overflow-y: scroll;
            }
            &-attr{
                padding-top:5px;
                width: 100%;
            }
        }

    }

    .empty-cart-message{
        text-align: center;
        &-wrapper{
             margin-top: 40px;
            height: calc(100vh - 275px);
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }

</style>



// JavaScript
<script>

    import { EventBus, OpenCartModal, CloseCartModal, CartUpdated } from '../../../core/services/event.service';
    import { CartService } from '../../../core/services/cart.service';
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
                itemData:'',
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
            },
            onRemoveItemClick(key){
                cartService.changeItem(0,key);
            },
            onCheckoutClick(){
                // go to checkout URL
            }
        },
         created: function () {
            // On Init
            cartService.getCartData().then((resp)=>{
                this.itemData = resp.data.items;
                this.cartData = resp.data
            })

            /**
             * EVENTS
             */


            // Cart Update
            EventBus.$on(CartUpdated,(resp)=>{
                console.log('from delte all',resp);
                this.itemData = resp.data.items;
                this.cartData = resp.data;
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



