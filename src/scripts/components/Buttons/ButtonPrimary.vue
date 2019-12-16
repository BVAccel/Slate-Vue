
// template
<template >
    <button
        @click="onButtonClick()"
        class="primary-button"
        v-bind:class="{ 'primary-button-active': isActive }" >
        {{text}}
    </button>
</template>

// SCSS
<style lang="scss" scoped>
    .primary-button{
        background: #4c9ec3;
        padding: 13px;
        font-size: 16px;
        border: 0px;
        color: #ffffff;
        &:hover{
            background:rgb(39, 178, 243);
            cursor: pointer;
        }
        &-active{
            background: rgb(107, 201, 123);
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
        name: 'PrimaryButton',
        props: {
            text: String,
            isActive:Boolean
        },
        // Component Data
        data: function () {
            return {}
        },
        methods: {
             onButtonClick(value) {
                // Emit event to parent component
                this.$emit('buttonClick', value);
            }
        }
    }
</script>



