import React, { useEffect, useRef } from 'react';
import { ToastWrapper } from 'components/ToastItem';

import { ToastManager } from 'services/singleton';
import { GlobalStyles } from 'helpers/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'helpers/theme';

export const ToastContainer = () => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (toastRef) {
      ToastManager.init(toastRef);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastWrapper ref={toastRef} />
    </ThemeProvider>
  );
};
