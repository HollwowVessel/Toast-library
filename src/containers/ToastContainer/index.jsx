import { ToastWrapper } from "components/ToastWrapper/index.jsx";
import { GlobalStyles } from "helpers/GlobalStyles.js";
import { theme } from "helpers/theme.js";
import { useEffect, useRef } from "react";
import { ToastManager } from "services/singleton.js";
import { ThemeProvider } from "styled-components";

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
