import styled from "styled-components";

export const ToastCloseIcon = styled.img`
  position: absolute;
  top: 27px;
  cursor: pointer;
  right: 29px;
  width: ${({ theme }) => theme.width[0]}px;
  height: ${({ theme }) => theme.width[0]}px;
`;
