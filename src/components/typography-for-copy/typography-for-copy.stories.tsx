import React from 'react';
import { ComponentStory } from '@storybook/react';

import { TypographyForCopy } from './typography-for-copy';

import './typography-for-copy.css';

export default {
    title: 'TypographyForCopy',
    component: TypographyForCopy,
    args: {
        color: 'primary',
        notificationText: 'Скопировано в буффер',
        value: 'Бармалей Петрович',
        closeDelay: 1500,
        position: 'right',
        view: 'primary-small',
        weight: 'bold',
        zIndex: 70,
    },
};

const Template: ComponentStory<typeof TypographyForCopy> = (args) => (
    <TypographyForCopy { ...args } />
);

export const Primary = Template.bind({});
