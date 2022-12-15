import React, { useEffect, useRef } from 'react';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { Toast } from 'components/Toast';

export const ToastContainer = () => {
  return (
    <ErrorBoundary>
      <ToastItem />
    </ErrorBoundary>
  );
};
