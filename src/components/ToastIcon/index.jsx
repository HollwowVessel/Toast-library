import React from 'react';

import { iconsMap } from 'constants/index.js';
import { ToastIconImage } from './styled';

export const ToastIcon = ({ type }) => {
  return <ToastIconImage src={iconsMap.get(type)} />;
};
