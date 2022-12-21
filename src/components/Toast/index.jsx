import React from 'react';

import { useToastAnimation } from 'hooks/index.js';

import { CloseIcon } from 'components/CloseIcon/index.jsx';
import { ToastIcon } from 'components/ToastIcon/index.jsx';

import {
  ToastDescription,
  ToastHeading,
  ToastInfo,
  ToastMessage,
} from './styled';

export const Toast = ({
  type = 'warning',
  color = 'yellow',
  heading = 'basic heading',
  message = 'Lorem ipsum...',
  duration = 3000,
  inAnimationName = 'appearance',
  outAnimationName = 'left-slide-in',
  closeIconColor = 'white',
  animationTime = 1000,
  destroy,
  spaces,
}) => {
  const { animation, deleteWithAnimation } = useToastAnimation({
    inAnimationName,
    outAnimationName,
    animationTime,
    destroy,
    duration,
  });

  return (
    <ToastInfo
      background={color}
      type={type}
      animationName={animation}
      animationTime={animationTime}
      spaces={spaces}
    >
      <ToastIcon type={type} />
      <ToastDescription position={message ? 'normal' : 'center'}>
        <ToastHeading type={type}>{heading}</ToastHeading>
        {message && <ToastMessage type={type}>{message}</ToastMessage>}
      </ToastDescription>
      <CloseIcon type={closeIconColor} destroy={deleteWithAnimation} />
    </ToastInfo>
  );
};
