import styled from 'styled-components';
import { determineAnimation } from '../../helpers/animations';

export const ToastInfo = styled.div`
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: left;
  display: flex;
  cursor: pointer;
  height: ${({ theme }) => theme.height[2]}%;
  background: ${({ background }) => background};
  box-shadow: 4px 4px 8px #00000029;
  position: relative;
  border-radius: 24px;
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
  font-size: ${({ theme }) => theme.fontSize[2]}px;

  animation: ${({ animationName }) => determineAnimation(animationName)}
    ${({ animationTime }) => {
      if (animationTime) {
        return animationTime;
      }
      return 1000;
    }}ms;
`;

export const ToastHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  padding: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
`;

export const ToastMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSize[0]}px;
`;

export const ToastDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
