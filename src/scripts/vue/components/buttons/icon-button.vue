
// template
<template >
    <button
        @click="onButtonClick()"
        class="icon-button"
        v-bind:class="{ 'flat-button-active': isActive, 'icon-button-delete': isDelete }" >
         <i class="fas" v-bind:class='icon'></i>
    </button>
</template>

// SCSS
<style lang="scss" scoped>
    .icon-button{
        border:0px;
        border-radius: 20px;
        background-color: orange;
        color:#fff;
        height: 25px;
        margin: 3px;
        &:hover{
            cursor: pointer;
            background-color: rgb(245, 180, 60);
        }
        &:focus{
            outline:0px;
        }
        &-active{
            background-color: rgb(245, 180, 60);
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
            icon: String,
            isDelete: Boolean = false
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



