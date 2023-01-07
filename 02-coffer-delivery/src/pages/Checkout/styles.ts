import styled, { css } from 'styled-components';

interface InputProps {
  isOptional?: boolean;
  sizeType: 'sm' | 'md' | 'lg';
  isValue?: boolean;
}

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: auto 448px;
  column-gap: 32px;
  margin-top: 40px;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
`;

export const CheckoutResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ResumeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px 44px;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  &:first-child {
    padding: 0 0 24px 0;
  }
`;

export const PricesDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin: 24px 0;
`;

export const TotalItemValueText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: ${({ theme }) => theme['base-text']};
    line-height: 130%;
  }

  & > span:first-child {
    font-size: 14px;
  }

  & > span:last-child {
    font-size: 16px;
  }
`;

export const DeliveryValueText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: ${({ theme }) => theme['base-text']};
    line-height: 130%;
  }

  & > span:first-child {
    font-size: 14px;
  }

  & > span:last-child {
    font-size: 16px;
  }
`;

export const TotalText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 130%;
    font-weight: bold;
  }

  & > span:first-child {
    font-size: 20px;
  }

  & > span:last-child {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 8px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  background: ${({ theme }) => theme.yellow};
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  line-height: 130%;
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
  &:disabled:hover {
    background: ${({ theme }) => theme.yellow};
  }
`;

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
