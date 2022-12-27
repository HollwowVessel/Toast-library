import { ToastContainer } from "containers/ToastContainer";
import { useToast } from "hooks/useToast";
import { useState } from "react";
import { ToastManager } from "services/singleton";

import { AnimationTime } from "./components/AnimationTime";
import { CloseIconColor } from "./components/CloseIconColor";
import { Color } from "./components/Color";
import { Duration } from "./components/Duration";
import { Heading } from "./components/Heading";
import { InAnimation } from "./components/InAnimation";
import { Message } from "./components/Message";
import { OutAnimation } from "./components/OutAnimation";
import { Position } from "./components/Position";
import { Type } from "./components/Type";
import { Form } from "./styled";

export function Demo() {
  const [heading, setHeading] = useState("Basic header");
  const [message, setMessage] = useState("Lorem ipsum...");
  const [duration, setDuration] = useState(3000);

  const [color, setColor] = useState("yellow");
  const [closeIconColor, setCloseIconColor] = useState("white");
  const [animationTime, setAnimationTime] = useState(1000);

  const [type, setType] = useState("information");
  const [position, setPosition] = useState("topLeft");
  const [inAnimation, setInAnimation] = useState("appearance");
  const [outAnimation, setOutAnimation] = useState("left-slide-out");

  const { showInfoToast, showErrorToast, showSuccessToast, showWarningToast } =
    useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      heading,
      message,
      duration: Number(duration),
      inAnimationName: inAnimation,
      outAnimationName: outAnimation,
      animationTime: Number(animationTime),
      color,
      closeIconColor,
    };

    switch (type) {
      case "information":
        showInfoToast(options);
        break;
      case "warning":
        showWarningToast(options);
        break;
      case "success":
        showSuccessToast(options);
        break;
      case "error":
        showErrorToast(options);
        break;
      default:
        return null;
    }
  };

  const handleInputChange = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const handleRadioColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleRadioCloseIconColorChange = (event) => {
    setCloseIconColor(event.target.value);
  };

  const handleRadioTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleRadioPositionChange = (event) => {
    ToastManager.setPosition(event.target.value);
    setPosition(event.target.value);
  };

  const handleRadioInAnimationChange = (event) => {
    setInAnimation(event.target.value);
  };

  const handleRadioOutAnimationChange = (event) => {
    setOutAnimation(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ToastContainer />
      <Heading
        heading={heading}
        handleInputChange={handleInputChange}
        setHeading={setHeading}
      />
      <Message
        handleInputChange={handleInputChange}
        message={message}
        setMessage={setMessage}
      />
      <Duration
        duration={duration}
        handleInputChange={handleInputChange}
        setDuration={setDuration}
      />
      <Type handleRadioTypeChange={handleRadioTypeChange} type={type} />
      <Color color={color} handleRadioColorChange={handleRadioColorChange} />
      <CloseIconColor
        closeIconColor={closeIconColor}
        handleRadioCloseIconColorChange={handleRadioCloseIconColorChange}
      />
      <Position
        handleRadioPositionChange={handleRadioPositionChange}
        position={position}
      />
      <InAnimation
        handleRadioInAnimationChange={handleRadioInAnimationChange}
        inAnimation={inAnimation}
      />
      <OutAnimation
        handleRadioOutAnimationChange={handleRadioOutAnimationChange}
        outAnimation={outAnimation}
      />
      <AnimationTime
        animationTime={animationTime}
        handleInputChange={handleInputChange}
        setAnimationTime={setAnimationTime}
      />

      <button type="submit">Click me</button>
    </Form>
  );
}
