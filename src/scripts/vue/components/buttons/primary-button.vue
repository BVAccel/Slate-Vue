
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
        background:rgb(61, 188, 247);
        padding: 10px;
        font-size: 16px;
        border: 0px;
        color: #ffffff;
        &-active{
            background: rgb(238, 117, 117);
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
        name: 'ButtonPrimary',
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
                // Toggle active button
                this.isActive = !this.isActive;
            }
        }
    }
</script>



