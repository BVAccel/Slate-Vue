
// template
<template >
 <div>
    <main-nav>
    </main-nav>
    <!-- Add global components here such as modals that
    are used accross the site such as an inline cart. -->

    <!--  Inline Cart Modal  -->
    <inline-cart-modal>
    </inline-cart-modal>

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
    import InlineCartModal from '../components/modals/inline-cart-modal.vue';
    import MainNav from '../components/nagivation/main-nav.vue';
    import { EventBus, OpenCartModal, CloseCartModal } from '../services/event.service';
    import { CartService } from '../services/cart.service';

    const cartService = new CartService();

    export default {
        // Component Bindings
        name: 'Theme',
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
            ButtonPrimary,
            InlineCartModal,
            MainNav
        },
        methods: {
            testMethod(value){

            }
        },
        created: function () {
           // Runs on Init
        }
    }

</script>



