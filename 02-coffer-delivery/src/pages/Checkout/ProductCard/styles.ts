import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  padding: 8px 4px;
  justify-content: space-between;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Title = styled.span`
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
`;

export const OptionSection = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 4px;
  border: none;
  background: ${({ theme }) => theme['base-button']};
  padding: 6.5px 8px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};

  & > svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`;

export const PriceText = styled.span`
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};
  font-weight: 700;
`;
