// import { storiesOf } from '@storybook/vue';
import PrimaryButton from './ButtonPrimary.vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Buttons',
  component: PrimaryButton,
  decorators: [withKnobs],
};

export const Primary = () => ({
  components: { 'primary-button': PrimaryButton },
  template: `<primary-button :text="text" :isActive="isActive"></primary-button>`,
  props: {
    text: {
      default: text('Text', 'Primary Button'),
    },
    isActive: {
      default: boolean('IsActive', false),
    },
  },
});

// storiesOf('Primary', module)
//   .add('default', () => <PrimaryButton />)
//   .add('other', () => <PrimaryButton initialState={{ someVar: 'otherVal' }} />);
