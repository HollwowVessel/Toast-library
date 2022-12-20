import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import { Toast } from 'components/Toast';
import { useToastService } from 'hooks/index';

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
