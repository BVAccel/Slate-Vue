
// template
<template >
    <button
        @click="onButtonClick()"
        class="icon-button"
        v-bind:class="{ 'flat-button-active': isActive }" >
         <i v-bind:class='icon'></i>
    </button>
</template>

// SCSS
<style lang="scss" scoped>
    .icon-button{
        border:1px solid rgb(189, 189, 189);
        border-radius: 13px;
        background-color: #ffffff;
        color: #555759;
        height: 26px;
        margin: 3px;
        min-width: 26px;
        &:hover{
            cursor: pointer;
            background-color: #e7e7e7;
        }
        &:focus{
            outline:0px;
        }
        &-active{
           background-color: #e7e7e7;
        }
        &-delete{
            background-color: rgb(233, 27, 27);
            &:hover{
                background-color:rgb(228, 111, 111);
            }
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
        name: 'IconButton',
        props: {
            icon: String
        },
        // Component Data
        data: function () {
            return {
                isActive: false
            }
        },
        methods: {
             onButtonClick(value) {
                // Emit event to parent component
                this.$emit('buttonClick', value);
            }
        }
    }
</script>



