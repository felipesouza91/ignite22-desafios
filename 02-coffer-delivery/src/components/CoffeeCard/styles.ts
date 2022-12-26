import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 20px 24px;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;
  margin-top: 20px;
`;

export const CardImage = styled.img`
  width: 120px;
  height: 120px;
  top: -20px;
  position: relative;
`;

export const CoffeeType = styled.span`
  padding: 4px 8px;
  background: ${({ theme }) => theme['yellow-light']};
  font-size: 10px;
  line-height: 130%;
  color: ${({ theme }) => theme['yellow-dark']};
  font-weight: 700;
  border-radius: 13px;
  margin-bottom: 16px;
`;

export const Title = styled.span`
  font-family: 'Baboo 2', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme['base-subtitle']};
  line-height: 130%;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme['base-label']};
  text-align: center;
  line-height: 130%;
  margin-bottom: 33px;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-family: 'Boloo 2', sans-serif;
  font-size: 24px;
  gap: 4px;
  font-weight: 800;

  color: ${({ theme }) => theme['base-text']};
  & > span {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;

export const QuantityInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 72px;
  padding: 8.5px 8px;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 8px;
  border: none;
  gap: 4px;
  & > button {
    background: none;
    border: none;
    cursor: pointer;
  }

  & > button > svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const QuantityInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  text-align: center;
`;
