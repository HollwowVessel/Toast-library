import React, { useRef } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import { Toast } from 'components/Toast';
import { toast } from 'helpers/singleton';

export const ToastContainer = () => {
  const toastRef = useRef(null);

  return (
    <ErrorBoundary>
      <ToastItem />
    </ErrorBoundary>
  );
};
