import React from 'react';
import { oneOf } from 'prop-types';
import { iconsMap } from 'constants';
import { ToastIconImage } from './styled';

export const ToastIcon = ({ type }) => {
  return <ToastIconImage src={iconsMap.get(type)} />;
};

ToastIcon.protTypes = {
  type: oneOf(['warning', 'information', 'error', 'success']),
};
