import React from 'react';
import { closeIconsMap } from 'constants/index.js';

import { ToastCloseIcon } from './styled';

export const CloseIcon = ({ type, destroy }) => {
  return <ToastCloseIcon src={closeIconsMap.get(type)} onClick={destroy} />;
};
