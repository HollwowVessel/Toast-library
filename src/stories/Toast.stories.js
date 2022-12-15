import React from 'react';

import { ToastItem } from 'components/ToastItem';
import { inAnimation } from 'helpers/animations';

export default {
  title: 'components',
  component: ToastItem,
};

const heading = 'Basic Header';
const message = 'Lorem ipsum dolor sit ';
const position = 'topLeft';

const generalParams = { heading, message, position };

const Template = (args) => <ToastItem {...args} />;

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
