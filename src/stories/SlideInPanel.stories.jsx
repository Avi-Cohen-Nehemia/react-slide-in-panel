import React from 'react';
import { storiesOf } from '@storybook/react';
import SlideInPanel from '../SlideInPanel';

const stories = storiesOf('App test', module);

stories.add('App', () => {
    return (<SlideInPanel />);
});
