import styled from 'styled-components';

export const ToastItemContainer = styled.div`
  position: absolute;
  top: ${({ position }) => position.top}%;
  left: ${({ position }) => position.left}%;
  width: ${({ theme }) => theme.width[2]}px;
  height: ${({ theme }) => theme.height[3]}px;
`;
