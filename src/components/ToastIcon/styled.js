import styled from 'styled-components';

export const ToastIconImage = styled.img`
  width: ${({ theme }) => theme.width[1]}px;
  height: ${({ theme }) => theme.height[1]}px;
  margin: ${({ theme }) => theme.spaces[5]}px
    ${({ theme }) => theme.spaces[3]}px 0 ${({ theme }) => theme.spaces[2]}px;
`;
