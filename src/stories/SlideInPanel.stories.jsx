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
    backdropTransition: {
      control: 'number',
      defaultValue: 1000,
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
