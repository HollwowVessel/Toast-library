import { Toast } from '../Toast';
import { positionMap, colors } from 'constants';
import { ToastItemContainer } from './styled';

const heading = 'Basic heading';
const message = 'Lorem ipsum...';

const toasts = [
  { id: '1', heading, message, color: 'yellow' },
  { id: '2', heading, message, type: 'success', color: 'green' },
  { id: '3', heading, message, type: 'information', color: 'purple' },
  { id: '4', heading, message, type: 'error', color: 'red' },
];

const ToastList = ({ position }) => {
  return (
    <ToastItemContainer position={positionMap[position]}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastItemContainer>
  );
};

export default {
  title: 'components/Position',
  component: ToastList,
  argTypes: {
    position: {
      options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
      control: { type: 'radio' },
    },
  },
};
const Template = (args) => <ToastList {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: 'topLeft',
};

export const TopRight = Template.bind({});
TopRight.args = {
  position: 'topRight',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: 'bottomLeft',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: 'bottomRight',
};
