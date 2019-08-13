
// template
<template >
    <!-- VP Card  -->
    <div class="vp-card-container"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ active: hover }" >
        <img v-bind:src="image" alt="vp image">
        <div>{{title}}</div>
        <div>{{description}}</div>
    </div>

</template>

// SCSS
<style lang="scss" scoped>
    .vp-card-container{
        padding: 10px;
        text-align: center;
        margin: 10px;
        -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.12);
        -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.12);
        box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.12);
    }
    .active{
        background-color: rgb(197, 238, 245);
        -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.22);
        -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.22);
        box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.22);
        cursor: pointer;
        /* Firefox */
        -moz-transition: all 1s ease-in;
        /* WebKit */
        -webkit-transition: all 1s ease-in;
        /* Opera */
        -o-transition: all 1s ease-in;
        /* Standard */
        transition: all 1s ease-in;
    }
</style>

// JavaScript
<script>

    /*******************
     * VALUE PROP CARD
     ******************/
    export default {
        // Component Bindings
        name: 'ValuePropCard',
        props: {
            title: String,
            description: String,
            image: String,
        },
        // Component Data
        data: function () {
            return {
                hover: false,
            }
        },
        methods: {
        },
         created: function () {

        }
    }
</script>



