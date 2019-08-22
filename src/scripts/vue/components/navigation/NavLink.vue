<template>
  <li class="main-nav-item">
    <a :href="link.url" v-text="link.title" :title="link.title"></a>
    <ul class="main-nav-sub-items" v-if="link.links">
      <nav-link v-for="(item, index) in link.links" :key="index" :link="item"></nav-link>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  // Component Data
  data: function() {
    return {
      // itemData: '',
      // itemData: '',
      // isOpen: false,
    };
  },
  components: {
    // Link,
  },
  methods: {},
  created: function() {
    // On Init
    console.log('Link', this.link);
  },
};
</script>

// SCSS
<style lang="scss" scoped>
.main-nav {
  &-item {
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    position: relative;
    a {
      display: block;
      font-size: 13px;
      letter-spacing: 2.3px;
      font-family: FuturaPT, sans-serif;
      color: #263746;
      text-decoration: none;
      padding: 18px;
      white-space: nowrap;
      &:hover {
        color: #3e5366;
        cursor: pointer;
      }
    }
    &:hover {
      > .main-nav-sub-items {
        display: block;
      }
    }
  }
  &-sub-items {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    padding: 0;

    .main-nav-sub-items {
      display: none;
      top: 0;
      left: 100%;
    }
  }
}
</style>
