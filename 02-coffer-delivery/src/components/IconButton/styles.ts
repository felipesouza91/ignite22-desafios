import styled from 'styled-components';

interface IconButtonContainerProps {
  bgColor: 'yellow-light' | 'purple-dark';
}

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: ${({ theme, bgColor }) => theme[bgColor]};
  color: ${({ theme, bgColor }) =>
    bgColor === 'purple-dark' ? theme.white : theme['yellow-dark']};
  cursor: pointer;
`;
