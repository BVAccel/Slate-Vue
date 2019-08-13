
// template
<template >
    <div class="justify-center">
        <!-- Heading with custome filter  -->
        <h2>{{sectiondataJson.header |  uppercase}}</h2>
    </div>
</template>

// SCSS
<style lang="scss" scoped>
</style>

// JavaScript
<script>

    /*****************
     * BUTTON PRIMARY
     ****************/
    export default {
        // Component Bindings
        name: 'SectionTitle',
        props: {
            sectiondata: String
        },
        // Component Data
        data: function () {
            return {
                sectiondataJson: Object,
            }
        },
        methods: {
        },
         created: function () {
            // Pars JSON data
            if(this.sectiondata){
                this.sectiondataJson = JSON.parse( this.sectiondata);
            }
        }
    }
</script>



