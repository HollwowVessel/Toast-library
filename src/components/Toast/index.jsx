import React, { memo, useState } from 'react';

import { useToastAnimation } from 'hooks';

import { CloseIcon } from 'components/CloseIcon';
import { ToastIcon } from 'components/ToastIcon';

import { ToastDescription, ToastInfo } from './styled';

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
        <h1 type={type}>{heading}</h1>
        {message && <p type={type}>{message}</p>}
      </ToastDescription>
      <CloseIcon type={closeIconColor} destroy={deleteWithAnimation} />
    </ToastInfo>
  );
};
