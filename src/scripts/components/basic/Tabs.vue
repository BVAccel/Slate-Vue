
<template lang="pug">
  .tabs
    .tabs__nav
      button.tabs__nav__button(
        type="button", 
        v-for="tab in tabs", 
        :class="{ 'active': tab.active }", 
        @click="activate(tab)"
      ) {{ tab.heading }}
    .tabs__content
      slot
</template>

<script>
  export default {
    name: 'Tabs',
    data() {
      return {
        tabs: []
      }
    },
    methods: {
      addTab(newTab) {
        this.tabs.push(newTab)
      },
      removeTab(tab) {
        let index = this.tabs.findIndex(t => t.heading === tab.heading)
        this.tabs.splice(index, 1)
      },
      activate({ heading }) {
        this.tabs.forEach(function (tab) {
          tab.active = Boolean(heading === tab.heading)
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs {
    &__nav {
      margin-left: -8px;
      margin-right: -8px;
      margin-bottom: $content-gutter;

      &__button {
        cursor: pointer;
        background-color: transparent;
        position: relative;
        margin: 5px 8px;
        line-height: 1.5;
        padding: 0;
        border-width: 0 0 2px 0;
        border-style: solid;
        border-color: transparent;
        font-weight: bold;
        color: $text--completed;
        transition: 0.3s ease all;

        &:hover {
          color: $text--main;
        }

        &:focus {
          outline: none;
        }

        &.active {
          color: $text--main;
          border-color: $text--main;
        }
      }
    }
  }
</style>
