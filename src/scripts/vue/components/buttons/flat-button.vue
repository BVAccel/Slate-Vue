
// template
<template >
    <button
        @click="onButtonClick()"
        class="flat-button"
        v-bind:class="{ 'flat-button-active': isActive }" >
        {{text}}
    </button>
</template>

// SCSS
<style lang="scss" scoped>
    .flat-button{
        border:0px;
        font-size: 14px;
        font-weight: 500;
        color: rgb(61, 188, 247);
        &:hover{
            color:rgb(148, 211, 240);
            cursor: pointer;
        }
        &:focus{
            outline:0px;
        }
        &-active{
            color:rgb(148, 211, 240);
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
        name: 'FlatButton',
        props: {
            text: String
        },
        // Component Data
        data: function () {
            return {
                isActive: false,
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



