
// Template
<template >
    <div>
        <div class="desktop-hero-wrapper" :style="{ backgroundImage: `url('${imagedesktop}')` }">
            <div>
                <h1 class="desktop-hero-header">
                {{headertext}}
                </h1>
                <h3 class="desktop-hero-sub-header">
                    {{subheadertext}}
                </h3>
                <button-primary
                    class="desktop-hero-cta"
                    :text="buttontext">
                </button-primary>
            </div>
        </div>
    </div>
</template>


// SCSS
<style lang="scss" scoped>
    .desktop-hero{
        &-wrapper{
            justify-content: flex-end;
            padding: 200px;
            height:600px;
            width: 100%;
            background: no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            display: flex;
            align-items: center;
        }
        &-header{
            color:#666666;
            font-weight: 200;
            font-size: 40px;
            margin-top:0px
        }
        &-sub-header{
            color:#666666;
            font-weight: 200;
            font-size: 16px;
        }
        &-cta{
            margin-top:30px;
        }
    }
</style>


// JavaScript
<script>
    import CloseButton from '../buttons/close-button.vue';
    import ButtonPrimary from '../buttons/primary-button.vue';
    import FlatButton from '../buttons/flat-button.vue';
    import IconButton from '../buttons/icon-button.vue';


    /*******************
     * VALUE PROP CARD
     ******************/
    export default {
        // Component Bindings
        name: 'HeroSlider',
        props: {
           headertext: String,
           subheadertext: String,
           imagedesktop: String,
           imagemobile: String,
           buttontext: String,
        },
        // Component Data
        data: function () {
            return {

            }
        },
        components:{
            CloseButton,
            ButtonPrimary,
            FlatButton,
            IconButton
        },
        methods: {

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



