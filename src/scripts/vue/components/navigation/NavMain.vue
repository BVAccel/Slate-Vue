<template>
  <!-- {% assign main_nav_item_indexes = '' %} {% assign sub_nav_item_indexes = '' %} {% assign break_indexes = '' %} {% for block in section.blocks %} {% if block.type == 'top' %} {% assign main_nav_item_indexes = main_nav_item_indexes | append: forloop.index0 | append: ',' %} {%
  elsif block.type == 'sub' %} {% assign sub_nav_item_indexes = sub_nav_item_indexes | append: forloop.index0 | append: ',' %} {% elsif block.type == 'break' %} {% assign break_indexes = break_indexes | append: forloop.index0 | append: ',' %} {% endif %} {% endfor %} {% assign
  main_nav_item_indexes = main_nav_item_indexes | split: ',' %} {% assign sub_nav_item_indexes = sub_nav_item_indexes | split: ',' %} {% assign break_indexes = break_indexes | split: ',' %} -->

  <nav class="main-nav">
    <div class="main-nav__inner max-width-container">
      <div class="mobile-nav__toggle-wrapper screen-md-down">
        <div class="mobile-nav__toggle" mobile-nav-toggle>
          <!-- {% include 'icon-menu', class: 'mobile-nav__toggle-icon' %} -->
        </div>
      </div>

      <div class="main-nav__logo-wrapper">
        <a class="main-nav__logo-link" href="">
          <!-- {% include 'icon-logo', class: 'main-nav__logo' %} -->
        </a>
      </div>

      <ul class="main-nav__items nav__items screen-md-up">
        <!-- {% for index in main_nav_item_indexes %} {% assign i = index | times: 1 %} {% assign main_nav_block = section.blocks[i] %} {% assign is_mobile_only = false %} {% if main_nav_block.settings['mobile-only'] != blank %} {% assign is_mobile_only = true %} {% endif %} {% unless
        is_mobile_only %} {% assign title = main_nav_block.settings['title'] %} {% assign url = main_nav_block.settings['url'] %} {% assign is_highlighted = false %} {% assign has_subnav = false %} {% if main_nav_block.settings['enable-subnav'] != blank %} {% assign has_subnav =
        true %} {% endif %} {% if main_nav_block.settings['enable-highlight'] != blank %} {% assign is_highlighted = true %} {% endif %} {% if has_subnav %} {% assign subnav_type = main_nav_block.settings['subnav-type'] %} {% assign sub_nav_start_index = i | plus: 1 %} {% assign
        sub_nav_end_index = break_indexes[forloop.index0] | minus: 1 %} {% endif %} -->

        <li v-for="block_index in topNavItemIndicies" class="main-nav__item nav__item {% if is_highlighted %}item--accent{% endif %} {% if has_subnav %}item--contains-subnav{% endif %}">
          <a class="main-nav__link nav__link" href="" aria-label="" v-text="blocks[block_index].settings.title"></a>
          <!-- {% if has_subnav %} {% include 'nav-sub', type: subnav_type, start_index: sub_nav_start_index, end_index: sub_nav_end_index %} {% endif %} -->
        </li>
        <!-- {% endunless %} {% endfor %} -->
      </ul>

      <!-- {% if enable_util_nav %} {% include 'nav-util' %} {% endif %} -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMain',
  props: {
    settings: {
      type: Object,
      required: true,
    },
    blocks: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {
      topNavItemIndicies: [],
      subNavItemIndicies: [],
      breakNavItemIndicies: [],
    };
  },
  created: function() {
    this.blocks.forEach((block, index) => {
      if (block.type == 'top') {
        this.topNavItemIndicies.push(index);
      } else if (block.type === 'sub') {
        this.subNavItemIndicies.push(index);
      } else if (block.type === 'break') {
        this.breakNavItemIndicies.push(index);
      }
    });
    // this.topNavItemIndicies = this.blocks.filter((block, index) => {
    //   if (block.type === 'top') {
    //     return index;
    //   }
    // });
    // this.subNavItemIndicies = this.blocks.map((block, index) => {
    //   if (block.type === 'sub') {
    //     return index;
    //   }
    // });
    // this.breakNavItemIndicies = this.blocks.map((block, index) => {
    //   if (block.type === 'break') {
    //     return index;
    //   }
    // });
    console.log('NavMain:', this.topNavItemIndicies);
  },
};
</script>

// SCSS
<style lang="scss" scoped></style>
