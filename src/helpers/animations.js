import {
  bottomSlideHundred,
  bottomSlideZero,
  leftSlideHundred,
  leftSlideZero,
  opacityOne,
  opacityZero,
  rightSlideHundred,
  rightSlideZero,
  topSlideHundred,
  topSlideZero,
} from "constants/animations";
import { keyframes } from "styled-components";

export const inAnimations = {
  appearance: keyframes` 
    0% {
      ${opacityZero};
    } 
    100% {
      ${opacityOne};
    }
  `,
  "left-slide-in": keyframes`
    0% {
      ${leftSlideHundred}
    }
    100% {
      ${leftSlideZero}
    }
  `,
  "right-slide-in": keyframes`
    0% {
      ${rightSlideZero}
    }
    100% {
      ${rightSlideHundred}
    }
  `,
  "top-slide-in": keyframes`
    0% {
      ${topSlideZero}
    }
    100% {
      ${topSlideHundred}
    }
  `,
  "bottom-slide-in": keyframes`
    0% {
      ${bottomSlideZero}
    }
    100% {
      ${bottomSlideHundred}
    }
  `,
};

export const outAnimations = {
  disappearance: keyframes` 
    from {
      ${opacityOne}
    } 
    to {
      ${opacityZero}
    }
  `,
  "left-slide-out": keyframes`
    0% {
      ${rightSlideHundred}
    }
    100% {
      ${rightSlideZero}
    }
  `,
  "right-slide-out": keyframes`
    0% {
      ${leftSlideZero}
    }
    100% {
      ${leftSlideHundred}
    }
  `,
  "top-slide-out": keyframes`
    0% {
      ${bottomSlideHundred}
    }
    100% {
      ${bottomSlideZero}
    }
  `,
  "bottom-slide-out": keyframes`
    0% {
      ${topSlideHundred}
    }
    100% {
      ${topSlideZero}
    }
  `,
};

export const determineAnimation = (animationName) => {
  if (animationName) {
    return animationName in inAnimations
      ? inAnimations[animationName]
      : outAnimations[animationName];
  }
  return "none";
};
