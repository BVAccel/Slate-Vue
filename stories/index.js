import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import ButtonPrimary from '../src/scripts/vue/shared/components/buttons/primary-button.vue';
import primaryButtonMarkdown from './primary-button.md';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Primary Button', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => ({
    components: { ButtonPrimary },
    props: {
        text: {
            default: text('Text', 'Primary Button')
        },
        isActive: {
            default: boolean('IsActive', false)
        },
    },
    template: `<button-primary :text="text" :isActive="isActive" ></button-primary>`
    }),
    {
        notes: { markdown: primaryButtonMarkdown }
    }
);