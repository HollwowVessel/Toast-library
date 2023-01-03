import { Toast } from "components/Toast/index.jsx";
import { positionMap } from "constants";
import { useToastService } from "hooks/useToastService";
import { func, object, oneOfType, shape } from "prop-types";
import { forwardRef } from "react";
import { createPortal } from "react-dom";

import { ToastItemContainer } from "./styled";

export const ToastWrapper = forwardRef((_, ref) => {
  const { toasts, position } = useToastService(ref);

  if (toasts.length) {
    return createPortal(
      <ToastItemContainer position={positionMap[position]}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </ToastItemContainer>,
      document.body
    );
  }

  return null;
});

// ToastWrapper.propTypes = {
//   _: func,
//   ref: oneOfType([func, shape({ current: object })]),
// };
