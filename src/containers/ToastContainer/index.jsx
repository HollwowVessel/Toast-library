import { ToastWrapper } from "components/ToastWrapper/index.jsx";
import { GlobalStyles } from "helpers/GlobalStyles.js";
import { theme } from "helpers/theme.js";
import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";

import { ToastManager } from "../../services/singleton.js";

export function ToastContainer() {
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
}
