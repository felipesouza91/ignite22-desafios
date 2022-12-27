import styled, { css } from 'styled-components';

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
