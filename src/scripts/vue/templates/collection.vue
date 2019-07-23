
// template
<template >
 <div>
    <div>
        <h1>COLLECTION PAGE</h1>
    </div>
 </div>
</template>

// SCSS
<style lang="scss" scoped>

</style>


// JavaScript
<script>

    /***********************
     *  COLLECTION TEMPALTE
     ***********************/
    import ButtonPrimary from '../components/buttons/primary-button.vue';

    export default {
        // Component Bindings
        name: 'Collection',
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



