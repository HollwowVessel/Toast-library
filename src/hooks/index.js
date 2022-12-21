import { useEffect, useImperativeHandle, useRef, useState } from 'react';

import { ToastManager } from './../services/singleton.js';

export const useToastAnimation = ({
  inAnimationName,
  outAnimationName,
  animationTime,
  duration,
  destroy,
}) => {
  const [animation, setAnimation] = useState(inAnimationName);

  const animationRef = useRef(null);
  const destroyRef = useRef(null);

  useEffect(() => {
    if (!duration || !destroy) return;

    if (outAnimationName) {
      animationRef.current = setTimeout(() => {
        setAnimation(outAnimationName);
      }, duration - (animationTime || 1000));
    }

    destroyRef.current = setTimeout(() => {
      destroy();
    }, duration);

    return () => {
      if (animationRef.current !== null) {
        clearTimeout(animationRef.current);
      }
      if (destroyRef.current !== null) {
        clearTimeout(destroyRef.current);
      }
    };
  }, [destroy, duration]);

  const deleteWithAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    if (destroyRef.current) {
      clearTimeout(destroyRef.current);
    }
    if (!outAnimationName) {
      destroy();
    }

    setAnimation(outAnimationName);
    setTimeout(() => destroy(), (animationTime || 1000) - 100);
  };

  return {
    animation,
    deleteWithAnimation,
  };
};

export const useToastService = (ref) => {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState('bottomLeft');

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

const showToast = (type) => (options) => {
  ToastManager.addToast({ ...options, type });
};

export const useToast = () => {
  const showInfoToast = showToast('information');
  const showWarningToast = showToast('warning');
  const showSuccessToast = showToast('success');
  const showErrorToast = showToast('error');

  return { showInfoToast, showWarningToast, showSuccessToast, showErrorToast };
};
