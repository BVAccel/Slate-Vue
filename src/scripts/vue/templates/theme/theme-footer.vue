
// template
<template >
 <div class="footer-wrapper">
    <div class="footer-link-block">
        <h4 class="footer-title" >CUSTOMER SERVICE</h4>
        <ul class="footer-list">
            <li>
                <a class="footer-link" href="#">Help</a>
            </li>
            <li>
                <a class="footer-link" href="#">Shipping & Returns</a>
            </li>
            <li>
                <a class="footer-link" href="#">Contact Us</a>
            </li>
        </ul>
    </div>
     <div class="footer-link-block">
        <h4 class="footer-title">COMPANY</h4>
        <ul class="footer-list">
            <li>
                <a class="footer-link" href="#">Privacy Policy</a>
            </li>
            <li>
                <a class="footer-link" href="#">Terms & Conditions</a>
            </li>
            <li>
                <a class="footer-link" href="#">Accesibility</a>
            </li>
        </ul>
    </div>
 </div>
</template>

// SCSS
<style lang="scss" scoped>
    .footer{
        &-wrapper{
            height: 250px;
            width: 100%;
            background: #535d5e;
            margin-top: 10px;
            color: #ffffff;
            padding:40px;
            display:flex;
        }
        &-title{
            margin-bottom: 10px;
            margin-top:0px;
            color: #aaaaaa;
            font-weight: 400;
        }
        &-list{
           list-style-type: none;
           padding: 5px 5px 5px 0px;
           li{
               margin-bottom: 5px;
           }
        }
        &-link{
            text-decoration: none;
            color: #98b5d6;
            font-weight: 200;
            &:hover{
                cursor: pointer;
                color: #d0d8e2;
            }
            &-block{
                padding: 20px;
            }
        }
    }
</style>


// JavaScript
<script>

    /**************************
     *  THEME FOOTER TEMPLATE
     *************************/
    const ComponentName = 'ThemeFooter';

    export default {
        // Component Bindings
        name: ComponentName,
        props: {
            exampleProp: String
        },
        // Component Data
        data: function () {
            return {
                exampleArr:[]
            }
        },
        components:{

        },
        methods: {
            testMethod(value){

            }
        },
        created: function () {
           // Runs on Init
        }
    }

</script>



