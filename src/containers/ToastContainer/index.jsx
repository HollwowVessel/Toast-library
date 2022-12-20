import React, { useEffect, useRef } from 'react';
import { ToastWrapper } from 'components/ToastItem';

import { ToastManager } from 'services/singleton';

export const ToastContainer = () => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (toastRef) {
      ToastManager.init(toastRef);
    }
  }, []);

  return <ToastWrapper ref={toastRef} />;
};
