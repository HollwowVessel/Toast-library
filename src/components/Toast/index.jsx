import { CloseIcon } from "components/CloseIcon/index.jsx";
import { ToastIcon } from "components/ToastIcon/index.jsx";
import { useToastAnimation } from "hooks/index.js";
import { func, number, string } from "prop-types";
import React from "react";

import {
  ToastDescription,
  ToastHeading,
  ToastInfo,
  ToastMessage,
} from "./styled";

export function Toast({
  type = "warning",
  color = "yellow",
  heading = "basic heading",
  message = "Lorem ipsum...",
  duration = 3000,
  inAnimationName = "appearance",
  outAnimationName = "left-slide-in",
  closeIconColor = "white",
  animationTime = 1000,
  remove,
}) {
  const { animation, deleteWithAnimation } = useToastAnimation({
    inAnimationName,
    outAnimationName,
    animationTime,
    remove,
    duration,
  });

  return (
    <ToastInfo
      background={color}
      animationName={animation}
      animationTime={animationTime}
    >
      <ToastIcon type={type} />
      <ToastDescription>
        <ToastHeading>{heading}</ToastHeading>
        {message && <ToastMessage>{message}</ToastMessage>}
      </ToastDescription>
      <CloseIcon type={closeIconColor} remove={deleteWithAnimation} />
    </ToastInfo>
  );
}

Toast.propTypes = {
  type: string,
  color: string,
  heading: string,
  message: string,
  duration: number,
  inAnimationName: string,
  outAnimationName: string,
  closeIconColor: string,
  animationTime: number,
  remove: func,
};
