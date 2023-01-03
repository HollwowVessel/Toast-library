import { Toast } from "components/Toast";
import { ToastWrapper } from "components/ToastWrapper";
import { ToastItemContainer } from "components/ToastWrapper/styled";
import { positionMap } from "constants";
import { GlobalStyles } from "helpers/GlobalStyles";
import { theme } from "helpers/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

export default {
  title: "components/Toasts",
  component: ToastWrapper,
  argTypes: {
    heading: {
      name: "heading",
      type: {name: "string", required: false},
      defaultValue: "basic heading",
      description: "Heading of the toast",
      table: {
        type: {summary: "string"},
        defaultValue: {summary: "Heading of the toast"}
      },
      control: {type: 'text'},
    },
    message: {
      name: "message",
      type: {name: "string", required: false},
      defaultValue: "Lorem ipsum...",
      description: "Message of the toast",
      table: {
        type: {summary: "string"},
        defaultValue: {summary: "Lorem ipsum..."}
      },
      control: {type: 'text'},
    },
    type: {
      name: "type",
      type: {name: "string", required: false},
      defaultValue: "warning",
      description: "Type of the toast",
      table: {
        type: {summary: "string"},
        defaultValue: {summary: "warning"}
      },
      options: ["warning", "information", "error", "success"],
      control: { type: "radio" },
    },
    color: {
      name: "color",
      type: {name: "string", required: false},
      defaultValue: "yellow",
      description: "Color of the toast",
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: "yellow"}
      },
      options: ["yellow", "red", "green", "purple"],
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
      <ToastItemContainer position={positionMap.topLeft} >
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
