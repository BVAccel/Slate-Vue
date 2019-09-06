<template>
  <div class="promobar">
    <div class="promobar__content" v-html="this.content"></div>
  </div>
</template>

<script>
export default {
  name: 'PromoBar',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

// SCSS
<style lang="scss" scoped>
.promobar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  height: 40px;
  padding: 0 40px;
}

.promobar__content {
  color: #ffffff;
  font-size: 11px;
  line-height: 1.4;
  text-align: center;

  p {
    font: inherit;
    margin-bottom: 0;
  }

  a {
    text-decoration: underline;
  }
}
</style>
