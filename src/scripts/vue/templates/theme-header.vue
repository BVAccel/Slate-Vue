// Template
<template>
  <div>
    <div class="global-announcement">
      new season sale: 20% off | code: seasons20
    </div>
    <div class="main-nav-wrapper">
      <ul class="main-nav-list">
        <nav-link v-for="(item, index) in items" :key="index" :link="item"></nav-link>
      </ul>

      <div class="flex">
        <button class="icon-button-secondary">
          <i class="fas fa-user"></i>
        </button>
        <button @click="onOpenCartClick()" class="icon-button-secondary">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

// JavaScript
<script>
import { EventBus, OpenCartModal } from '../services/event.service';

/*******************
 * VALUE PROP CARD
 ******************/
export default {
  // Component Bindings
  name: 'ThemeHeader',
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
  // Component Data
  data: function() {
    return {};
  },
  components: {
    'nav-link': () => import('../components/navigation/NavLink.vue'),
  },
  methods: {
    onOpenCartClick() {
      EventBus.$emit(OpenCartModal);
    },
  },
  created: function() {
    // On Init
    console.log(this.items);
  },
};
</script>

// SCSS
<style lang="scss" scoped>
.global-announcement {
  background-color: #263746;
  color: #edeff2;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 35px;
  text-align: center;
  height: 35px;
  display: flex;
  justify-content: center;
}
.main-nav {
  &-list {
    padding-left: 0;
    border-top: 1px solid #fff;
    flex-direction: row;
    display: flex;
  }
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    flex-wrap: wrap;
    position: relative;
    z-index: 3;
    background-color: #fff;
    padding: 0;
    border-bottom: 1px solid hsla(0, 0%, 53%, 0.2);
  }
}

.icon-button-secondary {
  font-size: 18px;
  border: 0px;
  color: #828282;
  padding: 19px;
  &:hover {
    color: #535353;
    cursor: pointer;
  }
  &:focus {
    outline: 0px;
  }
}
</style>
