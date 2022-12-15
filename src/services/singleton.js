class ToastService {
  static instance;
  constructor() {
    this.containerRef = null;
    this.position = { top: 0, left: 0 };
  }
  getInstance() {
    if (!ToastService.instance) {
      ToastService.instance = new ToastService();
    }
    return ToastService.instance;
  }

  getContainerRef(ref) {
    this.containerRef = ref;
  }
}

export const toastManager = new ToastService().getInstance();
