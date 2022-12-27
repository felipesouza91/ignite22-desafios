import styled, { css } from 'styled-components';

interface InputProps {
  isOptional?: boolean;
  sizeType: 'sm' | 'md' | 'lg';
  isValue?: boolean;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;

  ${({ sizeType = 'lg' }) =>
    sizeType === 'sm'
      ? css`
          width: 60px;
        `
      : sizeType === 'md'
      ? css`
          width: 200px;
        `
      : css`
          flex: 1;
        `};
  padding: 12px;
  height: 42px;
  background: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;

  &:hover {
    border: 1px solid ${({ theme }) => theme['yellow-dark']};
  }

  &:hover::after {
    content: '';
  }
  &:focus::after {
    content: '';
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme['yellow-dark']};
  }

  ${({ isOptional, isValue }) =>
    isOptional &&
    !isValue &&
    css`
      &::after {
        content: 'Opcional';
        font-size: 12px;
        font-style: italic;
        color: ${({ theme }) => theme['base-label']};
      }
    `}

  & > input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: 0;
    font-size: 14px;
    color: ${({ theme }) => theme['base-text']};
    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`;
