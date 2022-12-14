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

export const Toast = ({
  type = 'warning',
  heading = '',
  message,
  duration,
  color,
  closeIconColor = 'black',
  position = { top: 0, left: 0 },
  spaces = { y: 30, x: 30 },
  inAnimation,
  outAnimation,
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
