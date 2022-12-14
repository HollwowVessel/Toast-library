import styled from 'styled-components';

export const StyledToastItemContainer = styled.div`
  background: ${({ color }) => color} 0% 0% no-repeat padding-box;
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  opacity: 1;
  position: absolute;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  width: 668px;
  height: 181px;
`;

export const StyledToastInfo = styled.div`
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: left;
  display: flex;

  height: 100%;
  padding: ${({ spaces }) => spaces.y + 'px'} ${({ spaces }) => spaces.x + 'px'};
  font-size: 32px;
  img {
    width: 64px;
    height: 64px;
    margin: ${({ spaces }) => spaces.y + 'px'} 39px 0 0;
  }
`;

export const StyledToastDescription = styled.div`
  display: block;
`;
