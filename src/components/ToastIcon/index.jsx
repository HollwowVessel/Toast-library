import React from 'react';
import { iconsMap } from 'constants';
import { string } from 'prop-types';

export const ToastIcon = ({ toastIcon }) => {
  return <img src={iconsMap.get(toastIcon)} />;
};

ToastIcon.protTypes = {
  toastIcon: string.isRequired,
};
