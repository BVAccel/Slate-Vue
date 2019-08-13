
// template
<template >
 <div>

    <div>
        <h1>HOME PAGE TITLE</h1>
    </div>
    <hr>

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
     * INDEX TEMPLATE *
     *****************/
    import ButtonPrimary from '../components/buttons/primary-button.vue';

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

            }
        },
        created: function () {
           // Runs on Init
        }
    }

</script>



