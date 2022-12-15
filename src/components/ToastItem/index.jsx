import React, { useRef } from 'react';
import { Toast } from 'components/Toast';
import { StyledToastItemContainer } from './styled';
import { colors, positionMap } from 'constants';
import { createPortal } from 'react-dom';
import { animations } from 'helpers/animations';

export const ToastItem = ({
  type = 'warning',
  color = 'yellow',
  position = 'topLeft',
  heading = '',
  message = '',
  inAnimation = 'appearanceAnimation',
}) => {
  const toastRef = useRef(null);

  return createPortal(
    <StyledToastItemContainer
      ref={toastRef}
      color={colors[color]}
      position={positionMap.get(position)}
      animation={animations[inAnimation]}
    >
      <Toast type={type} heading={heading} message={message} />
    </StyledToastItemContainer>,
    document.body,
  );
};
