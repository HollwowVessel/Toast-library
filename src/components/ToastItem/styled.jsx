import styled from 'styled-components';

export const StyledToastItemContainer = styled.div`
  background: ${({ color }) => color} 0% 0% no-repeat padding-box;
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;

  position: absolute;
  top: ${({ position }) => position.top}%;
  left: ${({ position }) => position.left}%;
  width: 668px;
  height: 181px;
  animation: ${({ animation }) => animation};
  z-index: 100000;
`;
