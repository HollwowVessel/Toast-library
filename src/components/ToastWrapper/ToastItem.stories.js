import { positionMap } from "constants";
import { GlobalStyles } from "helpers/GlobalStyles";
import { theme } from "helpers/theme";
import { ThemeProvider } from "styled-components";

import { Toast } from "../Toast";
import { ToastItemContainer } from "./styled";

const heading = "Basic heading";
const message = "Lorem ipsum...";

const toasts = [
  {
    id: "1",
    heading,
    message,
    color: "purple",
  },
  {
    id: "2",
    heading,
    message,
    type: "success",
    color: "yellow",
  },
  {
    id: "3",
    heading,
    message,
    type: "information",
    color: "purple",
  },
  {
    id: "4",
    heading,
    message,
    type: "error",
    color: "red",
  },
];

function ToastList({ position }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastItemContainer position={positionMap[position]}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </ToastItemContainer>
    </ThemeProvider>
  );
}

export default {
  title: "components/Position",
  component: ToastList,
  argTypes: {
    position: {
      options: ["topRight", "topLeft", "bottomRight", "bottomLeft"],
      control: { type: "radio" },
    },
  },
};
function Template(args) {
  return <ToastList {...args} />;
}

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: "topLeft",
};

export const TopRight = Template.bind({});
TopRight.args = {
  position: "topRight",
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: "bottomLeft",
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: "bottomRight",
};
