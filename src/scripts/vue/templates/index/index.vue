
// template
<template >
  <div>
    <!-- Section Outlet-->
    <slot></slot>
    <div style="padding: 10px;">
      <button-primary text="OPEN CART" @buttonClick="onOpenCartClick()"></button-primary>
      <button-primary text="CLOSE CART" @buttonClick="onCloseCartClick()"></button-primary>
      <button-primary text="BUY ITEM" @buttonClick="onButtonClick()"></button-primary>
      <button-primary text="CART DATA" @buttonClick="onGetCartClick()"></button-primary>
    </div>

    <!-- Pagination Example -->
    <div class="center">
      <div class="flex-wrap">
        <div v-for="item in items" :key="item.id" class="item-card">
          <p>
            <b>Name:</b>
            {{item.employee_name}}
          </p>
          <p>
            <b>ID:</b>
            {{item.id}}
          </p>
          <p>
            <b>Price:</b>
            {{item.employee_salary | price }}
          </p>
          <button-primary class="item-card-button" text="EDIT"></button-primary>
        </div>
      </div>
    </div>

    <div class="center">
      <general-pagination
        :numberOfPaginationButtons="numberOfPaginationButtons"
        :numberOfItemsPerPage="numberOfItemsPerPage"
        :totalNumberOfItems="dummyData.length"
        @pagination="onPagination"
      ></general-pagination>
    </div>
  </div>
</template>

// SCSS
<style lang="scss" scoped>
.active {
  background: red;
}
.center {
  width: 100%;
  display: flex;
  justify-content: center;
}
li {
  list-style-type: none;
}
.item-card {
  height: 250px;
  width: 250px;
  border: 1px solid rgb(202, 202, 202);
  padding: 20px;
  margin: 5px;
  word-wrap: break-word;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.19);
  position: relative;
  &-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
}
</style>

// JavaScript
<script>
/******************
 * INDEX TEMPLATE *
 *****************/
import ButtonPrimary from '../../shared/components/buttons/primary-button.vue';
import IconButton from '../../shared/components/buttons/icon-button.vue';
import { EventBus, OpenCartModal, CloseCartModal } from '../../core/services/event.service';
import { CartService } from '../../core/services/cart.service';
import { ShopifyService } from '../../core/services/shopify.service';
import GeneralPagination from '../../shared/components/pagination/general-pagination.vue';

const cartService = new CartService();
const shopifyService = new ShopifyService();
const ComponentName = 'Index';

export default {
  // Component Bindings
  name: ComponentName,
  props: {
    exampleProp: String,
  },
  // Component Data
  data: function() {
    return {
      exampleArr: [],
      dummyData: [],
      // Pagination
      numberOfPaginationButtons: Number,
      activePage: Number,
      pageNumberArray: [],
      // Pagination Data
      numberOfItemsPerPage: Number,
      items: [],
    };
  },
  components: {
    ButtonPrimary,
    IconButton,
    GeneralPagination,
  },
  methods: {
    onPagination(dataSection) {
      console.log('pagination start/end', dataSection);
      this.setPageData(dataSection);
    },
    onOpenCartClick() {
      EventBus.$emit(OpenCartModal);
    },
    onCloseCartClick() {
      EventBus.$emit(CloseCartModal);
    },
    onButtonClick() {
      const ExampleItem = 29343910395978;
      cartService.addItem(1, ExampleItem);
    },
    onGetCartClick() {
      cartService.getCartData().then((resp) => {
        console.log('cart items', resp);
      });
    },
    setPageData(dataSection) {
      if (dataSection) {
        this.items = this.dummyData.slice(dataSection.start, dataSection.end);
      } else {
        // if not set. set to 20 items
        this.items = this.dummyData.slice(0, this.numberOfItemsPerPage);
      }
    },
    initPagination() {
      this.numberOfPaginationButtons = 5;
      this.numberOfItemsPerPage = 20;
      let dataSection = { start: 0, end: 20 };
      this.setPageData(dataSection);
    },
  },
  created: function() {
    // Runs on Init
    this.dummyData = shopifyService.getDummyData();
    //this needs to come after ajax promise
    this.initPagination();
  },
};
</script>