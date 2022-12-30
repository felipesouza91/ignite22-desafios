import styled, { css } from 'styled-components';

interface PaymentOptionProps {
  isSelected?: boolean;
}

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: auto 448px;
  column-gap: 32px;
  margin-top: 40px;
`;

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
  align-items: center;
  justify-content: space-between;
`;

export const PaymentOption = styled.button<PaymentOptionProps>`
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
`;
