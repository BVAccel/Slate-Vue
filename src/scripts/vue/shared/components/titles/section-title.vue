
// template
<template >
    <div class="section-title-wrapper">
        <!-- Heading with custome filter  -->
        <h2 class="section-title">{{sectiondataJson.header |  uppercase}}</h2>
    </div>
</template>

// SCSS
<style lang="scss" scoped>
    .section-title{
        color: #263746;
        font-size: 36px;
        font-weight: 200;
        line-height: 40px;
        &-wrapper{
            display: flex;
            justify-content: center;
        }
    }
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



