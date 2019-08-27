import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your global components.
import ButtonPrimary from '../src/scripts/vue/components/buttons/primary-button.vue';


// Register global components.
Vue.component('button-primary', ButtonPrimary);

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);