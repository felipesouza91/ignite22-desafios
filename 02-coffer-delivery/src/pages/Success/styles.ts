import styled, { css } from 'styled-components';

interface IconWrapperProps {
  colorType: 'purple' | 'yellow' | 'yellow-dark';
}

export const SuccessContainer = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 80px;
  align-items: flex-end;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const Title = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 130%;
  color: ${({ theme }) => theme['yellow-dark']};
`;

export const SubTitle = styled.span`
  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
`;

export const DescriptionContainerWrapper = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 40px;
  background: linear-gradient(
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.purple}
  );
  border-radius: 6px 36px;
`;

export const DescriptionContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px 36px;
  gap: 32px;
  border: 1px solid linear-gradient(red, blue);
  margin: 1px;
  background: ${({ theme }) => theme.background};
`;

export const SubDescriptionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, colorType }) =>
    colorType === 'purple'
      ? css`
          background: ${theme.purple};
        `
      : colorType === 'yellow'
      ? css`
          background: ${theme.yellow};
        `
      : css`
          background: ${theme['yellow-dark']};
        `}

  & > svg {
    font-size: 16px;
    color: ${({ theme }) => theme.white};
  }
`;

export const Image = styled.img`
  width: 492px;
  height: 293px;
`;
