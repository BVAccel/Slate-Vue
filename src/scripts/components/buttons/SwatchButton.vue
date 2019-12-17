
<template lang="pug">
  <button class="filter_color_swatch" @click="onToggleFilter($event)" v-bind:class="{ active: isActive, }" :style="getStyle" :label="color"></button>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    name: 'SwatchButton',
    props: {
      filters: Object,
      color: String,
    },
    computed: {
      ...mapState({
        colors: state => state.swatchColors.colors
      }),
      getStyle(){
        // Style Container to gather image or color
        let style = {};

        // Image swatch
        if (this.colors) {
          for (let i = 0; i < this.colors.colors.length; i++) {
            const currentColor = this.colors.colors[i];
            // Check Color Title
            if(currentColor.title == this.color){
              // If has image show higher priority than hex color
              if(currentColor.image){
                style = {
                  'backgroundImage':`url(${currentColor.image})`,
                  'backgroundPosition': 'center',
                  'backgroundSize': 'cover'
                }
                return style;
              }
              // If only hex color chosen
              else if(currentColor.color_code){
                style = {
                  'backgroundColor': currentColor.color_code
                }
                return style;
              }
              // If the client doesn't add a hex or image in blocks just flag them with this question mark
              else{
                style = {
                  'backgroundImage':`url(https://cdn.shopify.com/s/files/1/0250/5057/9028/files/Screen_Shot_2019-09-23_at_11.50.27_AM.png?10125)`,
                  'backgroundPosition':'center',
                  'backgroundSize': 'cover',
                  'border': '0px'
                }
                return style;
              }
            }
          }
        }
      }
    },
    // Component Data
    data: function () {
      return {
          isActive: false,
      }
    },
    methods:{
      onToggleFilter: function(){
        // emit here. tell the parent if it is active or not, set this to active or not
        this.isActive = !this.isActive;
        this.$emit('onClick',this.isActive)
      },
      setNotActive: function(){
        this.isActive = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .filter_color_swatch {
    position: relative;
    height: 35px;
    width: 35px;
    border-radius: 20px;
    background-color: gray;
    margin: 15px;
    border: 1px #fff solid;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }

    &:after {
      content: "";
      border: 1px solid #bbb;
      width: 43px;
      height: 43px;
      border-radius: 24px;
      display: inline-block;
      position: absolute;
      top: -5px;
      left: -5px;
      opacity: 0;
      transition: 0.3s ease opacity;
    }

    &.active {
      &:after {
        opacity: 1;
      }
    }
  }
</style>