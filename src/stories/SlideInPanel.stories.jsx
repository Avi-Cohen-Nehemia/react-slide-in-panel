import React from 'react';
import SlideInPanel from '../SlideInPanel';

export default {
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'number',
      defaultValue: 60,
    },
    from: {
      control: 'inline-radio',
      options: ['right', 'left', 'top', 'bottom'],
      defaultValue: 'left',
    },
    handleBackdrop: {
      action: 'backdrop clicked!',
    },
    panelTransition: {
      control: 'number',
      defaultValue: 1000,
    },
    panelColor: {
      control: 'color',
      defaultValue: '#000000',
    },
    backdropTransition: {
      control: 'number',
      defaultValue: 1000,
    },
    backdropColor: {
      control: 'text',
      defaultValue: 'rgba(51, 51, 51, 0.7)',
    },
  },
  component: SlideInPanel,
  title: 'Components/SlideInPanel',
};

const Template = (props) => <SlideInPanel {...props} />;

export const Default = Template.bind({});

export const WithChildren = (props) => (
  <SlideInPanel {...props}>
    <div>I'm a child</div>
    <button>Some button</button>
  </SlideInPanel>
);
