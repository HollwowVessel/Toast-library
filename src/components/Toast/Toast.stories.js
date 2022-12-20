import React from 'react';

import { ToastItem } from 'components/ToastItem';
import { positionMap } from 'constants';
import { ToastManager } from '../../services/singleton';
import { Toast } from '.';
import { ToastItemContainer } from '../ToastItem/styled';

export default {
  title: 'components/Toasts',
  component: ToastItem,
  argTypes: {
    color: {
      options: ['yellow', 'red', 'green', 'purple'],
      control: { type: 'radio' },
    },
    type: {
      options: ['warning', 'information', 'error', 'success'],
      control: { type: 'radio' },
    },
  },
};

const heading = 'Basic Header';
const message = 'Lorem ipsum dolor sit ';
const duration = 0;

const generalParams = { heading, message, duration };
console.log(ToastManager.toasts);

const Template = (args) => (
  <ToastItemContainer position={positionMap['topLeft']}>
    <Toast {...args} />
  </ToastItemContainer>
);

export const Warning = Template.bind({});
Warning.args = {
  ...generalParams,
  color: 'yellow',
  type: 'warning',
};

export const Information = Template.bind({});
Information.args = {
  ...generalParams,
  color: 'purple',
  type: 'information',
};

export const Success = Template.bind({});
Success.args = {
  ...generalParams,
  color: 'green',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  ...generalParams,
  color: 'red',
  type: 'error',
};
