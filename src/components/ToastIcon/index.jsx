import React from 'react';
import { oneOf } from 'prop-types';
import { iconsMap } from 'constants';
import { string } from 'prop-types';

export const ToastIcon = ({ toastIcon }) => {
  return <img src={iconsMap.get(toastIcon)} />;
};

ToastIcon.protTypes = {
  toastIcon: oneOf(['warning', 'information', 'error', 'success']),
};
