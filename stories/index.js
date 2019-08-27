import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import ButtonPrimary from '../src/scripts/vue/components/buttons/primary-button.vue';

storiesOf('Button', module)
  .add('as a component', () => ({
            components: { ButtonPrimary },
            template: '<button-primary text="BVA Primary Button"></button-primary>'
        }),
        {
            notes: "popover tooltip"
        }
    );