import { action } from '@storybook/addon-actions';
import Component from '../src/index';

export default {
  title: 'Component',
  component: Component,
  argTypes: {
    name: {
      name: 'Name',
      description: 'Hello {name}',
      table: {
        type: { },
        defaultValue: {
          summary: ''
        },
      },
      control: { 'type': 'text' }
    },
    buttonText: {
      name: 'Button Text',
      description: 'The button text',
      table: {
        type: { },
        defaultValue: {
          summary: 'Button'
        },
      },
      control: { 'type': 'text' }
    }
  },
};

export const Text = (args) => ({
  Component: Component,
  props: {
    name: 'World',
    buttonText: 'Hello Button',
    ...args
  },
  on: { click: action('clicked') },
});

export const Emoji = (args) => ({
  Component: Component,
  props: {
    name: '😀 😎',
    buttonText: '👍 💯',
    ...args
  },
  on: { click: action('clicked') },
});
