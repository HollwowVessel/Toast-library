import styled from 'styled-components';

export const ToastItemContainer = styled.div`
  background: ${({ color }) => color} 0% 0% no-repeat padding-box;
  position: absolute;
  top: ${({ position }) => position.top}%;
  left: ${({ position }) => position.left}%;
  width: 668px;
  height: 181px;
`;
