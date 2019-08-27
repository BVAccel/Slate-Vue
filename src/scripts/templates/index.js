import 'styles/templates/index/index.scss';
import IndexTemplate from '../vue/templates/index/index.vue';
import ButtonPrimary from '../vue/shared/components/buttons/primary-button.vue';
import SectionTitle from '../vue/shared/components/titles/section-title.vue';
import ValuePropCard from '../vue/shared/components/cards/value-prop-card.vue';
import HeroSlider from '../vue/shared/components/sliders/hero-slider.vue';
import priceFilter from '../vue/shared/filters/price'
import uppercaseFilter from '../vue/shared/filters/uppercase'

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => init());

const initVue = () => {
  Vue.filter('uppercase', uppercaseFilter);
  Vue.filter('price', priceFilter);

  /**
   * INIT VUE APP
   */
  new Vue({
    delimiters: ['${', '}'],
    el: '#app-index',
    data: {
    },
    components: {
      // Wrapper Component
      IndexTemplate,
      ButtonPrimary,
      SectionTitle,
      ValuePropCard,
      HeroSlider
    }
  });
}


// Init all functions here.
export const init = () => initVue();