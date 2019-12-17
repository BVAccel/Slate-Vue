<template lang="pug">
  <button class="filter_size_swatch" :label="value" @click="onToggleFilter($event)" v-bind:class="{ active: isActive, }">{{ value }}</button>
</template>

<script>
export default {
  name: 'SwatchValueButton',
  props: {
    value: String,
  },
  // Component Data
  data: function() {
    return {
      isActive: false,
    };
  },
  methods: {
    onToggleFilter: function() {
      // emit here. tell the parent if it is active or not, set this to active or not
      this.isActive = !this.isActive;
      this.$emit('onClick', this.isActive);
    },
    setNotActive: function() {
      this.isActive = false;
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  &_size {
    &_swatch {
      border: 1px solid $color-ivory;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
      font-size: 13px;
      color: $color-coal;
      background-color: $color-ivory;
      padding: 12px;
      margin: 6px;
      display: inline-block;
      text-align: center;

      &:hover,
      &:active,
      &:focus {
        background-color: $color-white;
      }
    }
  }
}
.active {
  background-color: $color-white;
  border: 1px solid $color-sand;
}
</style>
