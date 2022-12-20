import { nanoid } from 'nanoid';

class ToastService {
  static instance;
  toasts = [];

  toastQueue = [];

  position = 'bottomLeft';

  containerRef = null;

  static getInstance() {
    if (!ToastService.instance) {
      ToastService.instance = new ToastService();
    }

    return ToastService.instance;
  }

  init(ref) {
    this.containerRef = ref;
  }

  generateToast(options) {
    const toastId = nanoid();
    const destroy = () => this.removeToast(toastId);

    return {
      id: toastId,
      destroy,
      ...options,
    };
  }

  addToast(options) {
    const newToast = this.generateToast(options);

    if (this.toasts.length >= 3) {
      this.toastQueue.push(newToast);
    } else {
      this.toasts = [...this.toasts, newToast];
      this.containerRef?.current?.onToastAdd(newToast);
    }
  }

  setPosition(position) {
    this.position = position;
    this.containerRef?.current?.onPositionChange(position);
  }

  removeToast(toastId) {
    if (this.toasts.length > 3) {
      this.toasts = this.toasts.filter(({ id }) => id !== toastId);
      const nextToast = this.toastQueue.shift();

      if (nextToast) {
        this.toasts = [...this.toasts, nextToast];
        this.containerRef?.current?.onToastAdd(nextToast);
      }
    } else {
      this.toasts = this.toasts.filter(({ id }) => id !== toastId);
    }

    this.containerRef?.current?.onToastRemove(toastId);
  }
}

export const ToastManager = ToastService.getInstance();
