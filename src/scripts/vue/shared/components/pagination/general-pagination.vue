
// Template
<template >
    <div class="pagination-wrapper">
        <!-- PAGINATION BUTTONS -->
        <!-- Next -->
        <icon-button
            icon="fas fa-chevron-left"
            @buttonClick="prevPage">
        </icon-button>
            <!-- Page Numbers  -->
            <button class="pagination-button" @click="pageNumberClick(page)" :class="{active: page == activePage }" v-for="(page,index) in pageNumberArray" :key="index">{{page}}</button>
        <!-- Prev -->
         <icon-button
            icon="fas fa-chevron-right"
            @buttonClick="nextPage">
        </icon-button>
    </div>
</template>


// SCSS
<style lang="scss" scoped>
     .active{
        background:rgb(216, 216, 216);
    }
    .pagination-button{
        border:0px;
        font-size: 18px;
        &:focus{
            outline:0px;
        }
    }
    .pagination-wrapper{
        display: flex;
        align-items: center;
        margin-top:10px;
    }
</style>


// JavaScript
<script>
    import IconButton from '../buttons/icon-button.vue';
    const Pagination = 'pagination';
    const ComponentName = 'GeneralPagination';

    /*******************
     * VALUE PROP CARD
     ******************/
    export default {
        // Component Bindings
        name:ComponentName,
        props: {
            totalNumberOfItems:Number,
            numberOfItemsPerPage:Number,
            pageSize:Number,
            numberOfPaginationButtons:Number
        },
        // Component Data
        data: function () {
            return {
                activePage:Number,
                lastPage:Number
            }
        },
        components:{
            IconButton
        },
        methods: {
            /**
             * CONFIGURE PAGINATION
             */
             initPagination(){
                // What page butts to show.
                this.activePage = 1;
                this.configPageNumberArray();
            },
             configPageNumberArray(){
                 // This configures what page numbers go in the pagination buttons
                let newArr = [];
                for (let i = 0; i < this.numberOfPaginationButtons; i++) {
                    // Dont creat buttons for pages that are not there.
                    if(i + this.activePage >this.lastPage){
                        break;
                    }
                    newArr.push(i + this.activePage);
                }
                this.pageNumberArray = newArr;
            },
            configPageNumberArrayRetro(){
                let newStartPoint = (this.activePage - this.numberOfPaginationButtons) + 1 ;
                let newArr = [];
                for (let i = 0 ; i < this.numberOfPaginationButtons; i++) {
                    newArr.push(i + newStartPoint);
                }
                this.pageNumberArray = newArr;
            },
            findLastPage(){
                this.lastPage = Math.ceil(this.totalNumberOfItems/ this.numberOfItemsPerPage);
            },
            /**
             * CLICK EVENTS
             */
             pageNumberClick(pageNumber){
                if(pageNumber > this.lastPage){
                    return
                }
                this.activePage = pageNumber;
                this.emitStartAndEnd();
            },
            prevPage(){
                // Cant go below 1
                if(this.activePage == 1 ){
                    // do nothing
                    return;
                }
                this.activePage = this.activePage - 1;
                // Check if first Button ( example 6-10 on 6 );
                let firstNumber = this.pageNumberArray[0];
                if(this.activePage < firstNumber){
                    this.configPageNumberArrayRetro();
                }
                this.emitStartAndEnd();
            },
            nextPage(){
                // do a check here so user cant page too far look at how many pages.
                if(this.activePage == this.lastPage){
                    // do nothing
                    return
                }
                this.activePage = this.activePage + 1;
                // Check if Last Button ( example 1-5 on 5 );
                let lastNumber = this.pageNumberArray[this.pageNumberArray.length-1];
                if(this.activePage > lastNumber){
                    this.configPageNumberArray();
                }
                this.emitStartAndEnd();
            },
            /**
             * EMMITTERS
             */
            emitStartAndEnd(){
                // Get start and end, can be used to slice json or config graphql
                let end = (this.activePage * this.numberOfItemsPerPage);
                let start = end - this.numberOfItemsPerPage;
                let dataSection = {'start':start,'end':end};
                this.$emit(Pagination,dataSection);
            }
        },
         created: function () {
            // On Init
            this.initPagination();
            this.findLastPage();
        }
    }
</script>



