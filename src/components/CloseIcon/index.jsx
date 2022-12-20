import React from 'react';
import { closeIconsMap } from 'constants';

import { ToastCloseIcon } from './styled';
import { oneOf } from 'prop-types';

export const CloseIcon = ({ type, destroy }) => {
  return <ToastCloseIcon src={closeIconsMap.get(type)} onClick={destroy} />;
};

CloseIcon.propTypes = {
  type: oneOf(['white', 'black']),
};
