import { useImperativeHandle, useState } from "react";

export const useToastService = (ref) => {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState("topLeft");

  const handleToastAdd = (toast) => {
    setToasts((prevToasts) => [...prevToasts, toast]);
  };

  const handleToastRemove = (toastId) => {
    setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  };

  const handlePosition = (newPosition) => {
    setPosition(newPosition);
  };

  useImperativeHandle(ref, () => ({
    onToastAdd: handleToastAdd,
    onToastRemove: handleToastRemove,
    onPositionChange: handlePosition,
  }));

  return { toasts, position };
};
