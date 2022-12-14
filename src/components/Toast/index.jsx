import React from 'react';
import '../../index.css';
import {
  StyledToastDescription,
  StyledToastInfo,
  StyledToastItemContainer,
} from './styled';
import { colors } from 'constants';
import { CloseIcon } from 'components/CloseIcon';
import { ToastIcon } from 'components/ToastIcon';
import { ToastItem } from 'components/ToastItem';
import { number, object, string } from 'prop-types';

export const Toast = ({
  type = 'warning',
  heading = '',
  color,
  message,
  closeIconColor = 'black',
  duration = 3,
  inAnimation,
  outAnimation,
  position = { top: 0, left: 0 },
  spaces = { y: 30, x: 30 },
}) => {
  const toastColor = colors[color];

  return (
    <StyledToastItemContainer color={toastColor} position={position}>
      <StyledToastInfo spaces={spaces}>
        <ToastIcon toastIcon={type} />
        <StyledToastDescription>
          <h1>{heading}</h1>
          <p>{message}</p>
        </StyledToastDescription>
      </StyledToastInfo>
      <CloseIcon closeIcon={closeIconColor} />
    </StyledToastItemContainer>
  );
};

Toast.propTypes = {
  type: string.optional,
  heading: string.isRequired,
  color: string.isRequired,
  message: string.optional,
  closeIconColor: string.optional,
  duration: number.optional,
  inAnimation: string.optional,
  outAnimation: string.optional,
  position: object.optional,
  spaces: object.optional,
};
