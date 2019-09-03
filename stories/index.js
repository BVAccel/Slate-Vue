import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import PrimaryButton from '../src/scripts/vue/shared/components/buttons/primary-button.vue';
import primaryButtonMarkdown from './primary-button.md';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Primary Button', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => ({
    components: { PrimaryButton },
    props: {
        text: {
            default: text('Text', 'Primary Button')
        },
        isActive: {
            default: boolean('IsActive', false)
        },
    },
    template: `<primary-button :text="text" :isActive="isActive" ></primary-button>`
    }),
    {
        notes: { markdown: primaryButtonMarkdown }
    }
);