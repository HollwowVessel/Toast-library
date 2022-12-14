import React from 'react';
import { closeIconsMap } from 'constants';

import { StyledToastCloseIcon } from './styled';
import { string } from 'prop-types';

export const CloseIcon = ({ closeIcon }) => {
  return <StyledToastCloseIcon src={closeIconsMap.get(closeIcon)} />;
};

CloseIcon.propTypes = {
  closeIcon: string.isRequired,
};
