
// template
<template >
    <button
        @click="onButtonClick()"
        class="close-button" >
        <i class="far fa-window-close"></i>
    </button>
</template>

// SCSS
<style lang="scss" scoped>
    .close-button{
        border: 0px;
        font-size: 20px;
        &:hover{
            color:gray;
            cursor: pointer;
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
        name: 'CloseButton',
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



