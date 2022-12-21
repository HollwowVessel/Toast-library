import React, { useEffect, useRef } from 'react';
import { ToastWrapper } from 'components/ToastWrapper/index.jsx';

import { ToastManager } from './../../services/singleton.js';
import { GlobalStyles } from 'helpers/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'helpers/theme.js';

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
