import { useEffect, useRef, useState } from "react";

export const useToastAnimation = ({
  inAnimationName,
  outAnimationName,
  animationTime,
  duration,
  remove,
}) => {
  const [animation, setAnimation] = useState(inAnimationName);

  const animationRef = useRef(null);
  const removeRef = useRef(null);

  useEffect(() => {
    if (!duration || !remove) return;

    if (outAnimationName) {
      animationRef.current = setTimeout(() => {
        setAnimation(outAnimationName);
      }, duration - (animationTime || 1000));
    }

    removeRef.current = setTimeout(() => {
      remove();
    }, duration);

    return () => {
      if (animationRef.current !== null) {
        clearTimeout(animationRef.current);
      }
      if (removeRef.current !== null) {
        clearTimeout(removeRef.current);
      }
    };
  }, [remove, duration]);

  const deleteWithAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    if (removeRef.current) {
      clearTimeout(removeRef.current);
    }
    if (!outAnimationName) {
      remove();
    }

    setAnimation(outAnimationName);
    setTimeout(() => remove(), (animationTime || 1000) - 100);
  };

  return {
    animation,
    deleteWithAnimation,
  };
};
