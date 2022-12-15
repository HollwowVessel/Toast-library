import React from 'react';
import { closeIconsMap } from 'constants';

import { StyledToastCloseIcon } from './styled';
import { oneOf } from 'prop-types';

export const CloseIcon = ({ closeIcon }) => {
  return <StyledToastCloseIcon src={closeIconsMap.get(closeIcon)} />;
};

CloseIcon.propTypes = {
  closeIcon: oneOf(['white', 'black']),
};
