import { nanoid } from "nanoid";

import { positionMap } from "../constants";

class ToastService {
  static instance;

  toasts = [];

  position = "bottomLeft";

  toastRef = null;

  static getInstance() {
    if (!ToastService.instance) {
      ToastService.instance = new ToastService();
    }

    return ToastService.instance;
  }

  init(ref) {
    this.toastRef = ref;
  }

  generateToast(options) {
    const toastId = nanoid();
    const remove = () => this.removeToast(toastId);

    return {
      id: toastId,
      remove,
      ...options,
    };
  }

  addToast(options) {
    if (this.toasts.length < 3) {
      const newToast = this.generateToast(options);
      this.toasts = [...this.toasts, newToast];
      this.toastRef?.current?.onToastAdd(newToast);
    }
  }

  setPosition(position) {
    this.position = positionMap[position];
    this.toastRef?.current?.onPositionChange(positionMap[position]);
  }

  removeToast(toastId) {
    this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    this.toastRef?.current?.onToastRemove(toastId);
  }
}

export const ToastManager = ToastService.getInstance();
