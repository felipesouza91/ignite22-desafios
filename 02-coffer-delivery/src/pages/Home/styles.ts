import styled from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

type IconContainerProps = {
  backgroundColor: 'yellow-dark' | 'yellow' | 'base-text' | 'purple';
};

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const IntoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 92px 0;
  gap: 56px;
`;

export const InfoSection = styled.div``;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-title']};

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme['base-subtitle']};
  font-size: 20px;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 66px;
`;

export const BuyInfos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
`;

export const BuyInfoDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  & > span {
    color: ${({ theme }) => theme['base-text']};
    line-height: 130%;
  }
`;

export const IconContainer = styled.div<IconContainerProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};
  padding: 8px;

  & > svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const InfoImage = styled.img`
  width: 476px;
  height: 360px;
`;

export const HomeSubTitle = styled.h4`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
  margin-bottom: 34px;
`;

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 154px;
`;
