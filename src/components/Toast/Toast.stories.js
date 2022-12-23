import { ToastWrapper } from "components/ToastWrapper";
import { positionMap } from "constants";
import { GlobalStyles } from "helpers/GlobalStyles";
import { theme } from "helpers/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

import { ToastItemContainer } from "../ToastWrapper/styled";
import { Toast } from ".";

export default {
  title: "components/Toasts",
  component: ToastWrapper,
  argTypes: {
    color: {
      options: ["yellow", "red", "green", "purple"],
      control: { type: "radio" },
    },
    type: {
      options: ["warning", "information", "error", "success"],
      control: { type: "radio" },
    },
  },
};

const heading = "Basic Header";
const message = "Lorem ipsum dolor sit ";

const generalParams = { heading, message };

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastItemContainer position={positionMap.topLeft}>
        <Toast {...args} />
      </ToastItemContainer>
    </ThemeProvider>
  );
}

export const Warning = Template.bind({});
Warning.args = {
  ...generalParams,
  color: "yellow",
  type: "warning",
};

export const Information = Template.bind({});
Information.args = {
  ...generalParams,
  color: "purple",
  type: "information",
};

export const Success = Template.bind({});
Success.args = {
  ...generalParams,
  color: "green",
  type: "success",
};

export const Error = Template.bind({});
Error.args = {
  ...generalParams,
  color: "red",
  type: "error",
};
