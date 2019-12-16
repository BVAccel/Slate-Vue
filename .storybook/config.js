import { configure } from '@storybook/vue';

configure(require.context('../src/scripts/components/', true, /\.stories\.js$/), module);
