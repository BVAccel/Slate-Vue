
// Template
<template >
    <div>
        <div class="global-announcement">
            new season sale: 20% off | code: seasons20
        </div>
        <div class="main-nav-wrapper">

            <ul class="main-nav-list">
                <li class="main-nav-item">
                    <a href="#">SHOP</a>
                </li>
                <li class="main-nav-item">
                    <a href="#">ABOUT</a>
                </li>
                <li class="main-nav-item">
                    <a href="#">BLOG</a>
                </li>
            </ul>

            <div class="flex">
                <button
                    class="icon-button-secondary" >
                    <i class="fas fa-user"></i>
                </button>
                <button
                    @click="onOpenCartClick()"
                    class="icon-button-secondary" >
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    </div>
</template>


// SCSS
<style lang="scss" scoped>
    .global-announcement{
        background-color: #263746;
        color: #edeff2;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: .8px;
        line-height: 35px;
        text-align: center;
        height: 35px;
        display: flex;
        justify-content: center;
    }
    .main-nav{
        &-list{
            padding-left: 0;
            border-top: 1px solid #fff;
            flex-direction: row;
            display: flex;
        }
        &-item{
            display: flex;
            align-items: center;
            margin: 0;
            justify-content: center;
            flex-direction: column;
            box-sizing: border-box;
            padding: 0;
            a {
                font-size: 13px;
                letter-spacing: 2.3px;
                font-family: FuturaPT,sans-serif;
                color: #263746;
                text-decoration: none;
                padding: 18px;
                &:hover{
                    color: #3e5366;
                    cursor: pointer;
                }
            }
        }
        &-wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 75px;
            flex-wrap: wrap;
            position: relative;
            z-index: 3;
            background-color: #fff;
            padding: 0;
            border-bottom: 1px solid hsla(0,0%,53%,.2);
        }
    }

    .icon-button-secondary{
        font-size: 18px;
        border: 0px;
        color: #828282;
        padding: 19px;
        &:hover{
            color: #535353;
            cursor: pointer;
        }
        &:focus{
            outline:0px;
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
        name: 'MainNav',
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
            onOpenCartClick(){
              EventBus.$emit(OpenCartModal);
            }
        },
         created: function () {
            // On Init
            // cartService.getCartData().then((resp)=>{
            //     this.itemData = resp.data.items;
            //     this.cartData = resp.data
            // })

        }
    }
</script>



