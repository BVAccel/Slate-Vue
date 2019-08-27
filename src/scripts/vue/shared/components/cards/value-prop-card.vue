
// template
<template >
    <!-- VP Card  -->
    <!-- :class="{ active: hover }" -->
    <div class="vp-card-container"
        @mouseover="hover = true"
        @mouseleave="hover = false">
        <img v-bind:src="image" alt="vp image">
        <h3 class="vp-card-title">{{title}}</h3>
        <div class="vp-card-description" >{{description}}</div>
    </div>

</template>

// SCSS
<style lang="scss" scoped>
    .vp-card{
        &-title{
            color: #555759;
            margin-bottom: 7px;
        }
        &-container{
            padding: 10px;
            text-align: center;
            margin: 10px;
            max-width: 250px;
        }
        &-description{
            color: #555759;
            line-height: 21px;
            font-size: 14px;
        }
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



