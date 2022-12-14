import React from 'react';
import { iconsMap } from 'constants';

export const ToastIcon = ({ toastIcon }) => {
  return <img src={iconsMap.get(toastIcon)} />;
};
