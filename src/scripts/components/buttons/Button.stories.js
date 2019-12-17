import PrimaryButton from './PrimaryButton.vue';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import '../../../styles/theme.scss';

export default {
  title: 'Buttons',
  decorators: [withKnobs],
};

export const Primary = () => ({
  components: { PrimaryButton },
  template: `<primary-button v-bind="$props"></primary-button>`,
  props: {
    label: {
      default: text('Text', 'Primary Button'),
    },
    icon: {
      defualt: text('icon', 'icon'),
    },
    iconSize: {
      default: select('iconSize', { '12px': '12px', '16px': '16px' }, '12px'),
    },
    hollow: {
      default: boolean('hollow', false),
    },
    small: {
      default: boolean('small', false),
    },
    full: {
      default: boolean('full', false),
    },
    secondary: {
      default: boolean('secondary', false),
    },
    simple: {
      default: boolean('simple', false),
    },
    text: {
      default: boolean('text', false),
    },
    flex: {
      default: boolean('flex', false),
    },
    inline: {
      default: boolean('inline', false),
    },
    disabled: {
      default: boolean('disabled', false),
    },
  },
});
