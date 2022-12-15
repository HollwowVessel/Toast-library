import React, { useState } from 'react';
import '../../index.css';
import {
  StyledToastDescription,
  StyledToastInfo,
  StyledToastItemContainer,
} from './styled';
import { oneOf } from 'prop-types';
import { positionMap, spacesMap } from 'constants';
import { CloseIcon } from 'components/CloseIcon';
import { ToastIcon } from 'components/ToastIcon';

import { number, object, string } from 'prop-types';

const Toast = ({
  type = 'warning',
  heading = '',
  message = 'test',
  closeIconColor = 'black',
  duration = 3,
  spaces = 'm',
}) => {
  return (
    <>
      <StyledToastInfo spaces={spacesMap.get(spaces)}>
        <ToastIcon toastIcon={type} />
        <StyledToastDescription>
          <h1>{heading}</h1>
          <p>{message}</p>
        </StyledToastDescription>
      </StyledToastInfo>
      <CloseIcon closeIcon={closeIconColor} />
    </>
  );
};

Toast.propTypes = {
  type: oneOf(['warning', 'information', 'error', 'success']),
  heading: string,
  color: oneOf(['purple', 'red', 'green', 'yellow']),
  message: string,
  closeIconColor: oneOf(['white', 'black']),
  duration: number,
  inAnimation: string,
  outAnimation: string,
  position: oneOf(['topRight', 'topLeft', 'bottomRight', 'bottomLeft']),
  spaces: oneOf(['none', 's', 'm', 'l']),
};

export { Toast };
