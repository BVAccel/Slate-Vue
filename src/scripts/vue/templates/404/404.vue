// template
<template>
    <div class="board">
        <p>Error</p>
        <p>404</p>
    </div>
</template>

// SCSS
<style lang="scss" scoped>
    body {
        background-color: #111111;
    }
    .board {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 150px;
        width: 500px;
        margin: -75px 0 0 -250px;
        padding: 20px;
        font: 75px/75px Monoton, cursive;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
        color: red;
    }
    #error {
        color: #fff;
        text-shadow: 0 0 80px #ffffff,0 0 30px #c1e0c1,0 0 6px #0000ff;
    }
</style>

// JavaScript
<script>
    /******************
     *  404 TEMPLATE  *
     *****************/
    const ComponentName = 'PageNotFoundTemplate';

    export default {
        name: ComponentName,
        props: {},
        components:{},
    }

</script>



