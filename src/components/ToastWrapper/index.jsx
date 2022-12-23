import { Toast } from 'components/Toast/index.jsx';
import { useToastService } from 'hooks/index.js';
import { any } from 'prop-types';
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import { ToastItemContainer } from './styled';

export const ToastWrapper = forwardRef((_, ref) => {
  const { toasts, position } = useToastService(ref);

  return createPortal(
    <ToastItemContainer position={position}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastItemContainer>,
    document.body,
  );
});

ToastWrapper.propTypes = {
  _: any,
  ref: any,
};
