import styled from 'styled-components';
import { determineAnimation } from '../../helpers/animations';

export const ToastInfo = styled.div`
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: left;
  display: flex;
  cursor: pointer;
  height: 100%;
  background: ${({ background }) => background};
  display: flex;
  box-shadow: 4px 4px 8px #00000029;
  position: relative;
  border-radius: 24px;
  margin: 0 0 10px 0;
  font-size: 32px;

  animation: ${({ animationName }) => determineAnimation(animationName)}
    ${({ animationTime }) => {
      if (animationTime) {
        return animationTime;
      }
      return 1000;
    }}ms;

  h1,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 28px;
    padding: 0 0 0 0;
  }
  h1 {
    font-size: 32px;
    padding: 0 0 10px 0;
  }
`;

export const ToastDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
