import { Toast } from "components/Toast";
import { ToastItemContainer } from "components/ToastWrapper/styled";
import { positionMap } from "constants";
import { toasts } from "constants/stories";
import { GlobalStyles } from "helpers/GlobalStyles";
import { theme } from "helpers/theme";
import { ThemeProvider } from "styled-components";

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
      name: "position",
      type: {name: "string", required: false},
      defaultValue: "topLeft",
      description: "Position of the toast",
      table: {
        type: {summary: "string"},
        defaultValue: {summary: "topLeft"}
      },
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
