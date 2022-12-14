class ToastService {
  static instance;

  getInstance() {
    if (!ToastService.instance) {
      ToastService.instance = new ToastService();
    }
    return ToastService.instance;
  }
}

export const toast = new ToastService();
