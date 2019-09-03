import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your global components.
import PrimaryButton from '../src/scripts/vue/shared/components/buttons/primary-button.vue';


// Register global components.
Vue.component('primary-button', PrimaryButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../stories');
}

configure(loadStories, module);