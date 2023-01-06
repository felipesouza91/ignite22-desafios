import styled, { css } from 'styled-components';

interface PaymentOptionProps {
  isSelected?: boolean;
}

export const CheckoutInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
`;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`;

export const MessageGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;

  & > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`;

export const SubTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme['base-subtitle']};
  line-height: 130%;
`;

export const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme['base-subtitle']};
  line-height: 130%;
`;

export const AddressForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InlineGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  &:first-child {
    flex: 1;
  }
`;

export const PaymentInfo = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`;

export const PaymentMessageGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  & > svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const PaymentOption = styled.button<PaymentOptionProps>`
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: center;
  border: none;
  padding: 14px;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-button']};
  font-size: 12px;
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};

  & > svg {
    color: ${({ theme }) => theme.purple};
  }

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      background: ${theme['purple-light']};
      border: 1px solid ${theme.purple};
    `}

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`;
