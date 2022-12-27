import { ToastManager } from "services/singleton";

const showToast = (type) => (options) => {
  ToastManager.addToast({ ...options, type });
};

export const useToast = () => {
  const showInfoToast = showToast("information");
  const showWarningToast = showToast("warning");
  const showSuccessToast = showToast("success");
  const showErrorToast = showToast("error");

  return {
    showInfoToast,
    showWarningToast,
    showSuccessToast,
    showErrorToast,
  };
};
