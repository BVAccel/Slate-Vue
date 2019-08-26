<template >
 <div>
    <div>
        <h1>Collection Template</h1>
    </div>
    <!-- Pagination Example -->
    <div class="center">
        <div class="flex-wrap">
            <div v-for="item in items" :key="item.id" class="item-card">
                <p><b>Name:</b> {{item.employee_name}}</p>
                <p><b>ID:</b> {{item.id}}</p>
                <button-primary
                    class="item-card-button"
                    text="EDIT">
                </button-primary>
            </div>
        </div>
    </div>

    <div class="center margin-top-10">
        <general-pagination
            :numberOfPaginationButtons="numberOfPaginationButtons"
            :numberOfItemsPerPage="numberOfItemsPerPage"
            :totalNumberOfItems="dummyData.length"
            @pagination="onPagination">
        </general-pagination>
    </div>
 </div>
</template>


<script>
    import ButtonPrimary from '../components/buttons/primary-button.vue';
    import GeneralPagination  from '../components/pagination/general-pagination.vue';
    import CollectionProduct from '../components/CollectionProduct';
    import { ShopifyService } from '../services/shopify.service';

    const shopifyService = new ShopifyService();

    export default {
        name: 'CollectionTemplate',
        props: {
            collectionHandle: {
                type: String,
                required: true
            },
            collectionProductCount: {
                type: Number,
                required: true
            },
        },
        components:{
            CollectionProduct,
            GeneralPagination,
            ButtonPrimary
        },
        methods: {
            onPagination(dataSection){
                console.log('pagination start/end',dataSection);
                this.setPageData(dataSection)
            },
            setPageData(dataSection){
                if(dataSection){
                    this.items = this.dummyData.slice(dataSection.start,dataSection.end);
                }else{
                    // if not set. set to 20 items
                    this.items = this.dummyData.slice(0,this.numberOfItemsPerPage);
                }
            },
            initPagination(){
                this.numberOfPaginationButtons = 5;
                this.numberOfItemsPerPage = 20;
                let dataSection = {'start':0,'end':20};
                this.setPageData(dataSection);
            }
        },
        created: function() {
            // Runs on Init
           this.dummyData = shopifyService.getDummyData();
           //this needs to come after ajax promise
           this.initPagination();
        }
    }

</script>



<style lang="scss" scoped>
    .active{
        background:red;
    }
    .center{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    li{
        list-style-type: none;
    }
    .item-card{
        height:250px;
        width: 250px;
        border: 1px solid rgb(202, 202, 202);
        padding: 20px;
        margin: 5px;
        word-wrap: break-word;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.19);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.19);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.19);
        position: relative;
        &-button{
            position: absolute;
            bottom: 20px;
            right:20px;
        }
    }
</style>