import React from 'react';
import { closeIconsMap } from 'constants';

import { StyledToastCloseIcon } from './styled';

export const CloseIcon = ({ closeIcon }) => {
  return <StyledToastCloseIcon src={closeIconsMap.get(closeIcon)} />;
};
