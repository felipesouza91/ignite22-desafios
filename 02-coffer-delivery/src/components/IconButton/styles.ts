import styled from 'styled-components';

interface IconButtonContainerProps {
  bgColor: 'yellow-light' | 'purple-dark';
}

export const IconButtonWrapper = styled.div`
  & > div {
    position: relative;
    top: -46px;
    right: -27px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme['yellow-dark']};
  }

  & > div > span {
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    position: relative;
    color: ${({ theme }) => theme.white};
  }
`;

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

  & > span {
    position: relative;
  }
`;
