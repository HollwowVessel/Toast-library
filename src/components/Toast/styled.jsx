import styled from 'styled-components';

export const StyledToastInfo = styled.div`
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-align: left;
  display: flex;
  cursor: pointer;
  height: 100%;
  padding: ${({ spaces }) => spaces.y + 'px'} ${({ spaces }) => spaces.x + 'px'};
  display: flex;

  font-size: 32px;
  img {
    width: 64px;
    height: 64px;
    margin: ${({ spaces }) => spaces.y + 'px'} 39px 0 0;
  }
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

export const StyledToastDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
