import React from 'react';
import SlideInPanel from '../SlideInPanel';

export default {
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    width: {
      control: 'number',
      defaultValue: 60,
    },
    from: {
      control: 'text',
      defaultValue: 'left',
    },
  },
  component: SlideInPanel,
  title: 'Components/SlideInPanel',
};

const Template = (props) => <SlideInPanel {...props} />;

export const Default = Template.bind({});
