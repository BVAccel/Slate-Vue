
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
                                    @buttonClick="onAddOneClick(item.id)">
                                </icon-button>
                                <icon-button
                                    icon="fa-minus-circle"
                                    :isDelete="true"
                                     @buttonClick="onMinusOneClick(item.variant_id,item.quantity)">
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
               CartJS.clear();
            },
            onCloseCartClick(){
                this.isOpen = false;
            },
            onAddOneClick(itemId){
                let vm = this;
                // add one more to inventory of this item
                this.$http.post ( '/cart/add.js', {quantity:1, id: itemId} ).then(function (resp) {
                    // success actions
                    console.log('resp',resp.data);
                    if(resp.data){
                        vm.cartData = [resp.data];
                    }
                });
            },
            onMinusOneClick(varId,currentQuantity){
                // subtrack one from qty
                let newQuantity = Number(currentQuantity - 1);
                console.log('newQuantity',newQuantity);
                if(newQuantity < 1 ){
                    this.onRemoveItemClick(varId);
                }else{
                    console.log('attempt minut',varId )
                    cartService.changeItem(1,'29207420371018:df459809971513e5c29a30135e86c8d0')
                    .then(function (resp,error) {
                        console.log('success minut',resp)
                    });

                    // this.$http.post('/cart/change.js', { quantity: 1, id:'29207420371018:df459809971513e5c29a30135e86c8d0'}).then(function (resp,error) {console.log('success minut',resp)});
                }
            },
            onRemoveItemClick(itemId){
                // remove item
                this.$http.post ( '/cart/change.js', {quantity: 0, id: itemId} ).then(function (resp) {
                        // success actions
                });
            }
        },
         created: function () {
             let self = this;
             // on init
             this.cartData = CartJS.cart.items;
             console.log('cartData',this.cartData);


            // Events
            EventBus.$on(AddProduct,(data)=>{
                console.log('DATA',data);
                this.cartData = [data];
            });

            EventBus.$on(CartUpdated,(data)=>{
                console.log('DATA',data);
                this.cartData = data;
            });

            EventBus.$on(OpenCartModal,()=>{
                this.isOpen = true;
            });

            EventBus.$on(CloseCartModal,()=>{
                this.isOpen = false;
            });
        }
    }
</script>



