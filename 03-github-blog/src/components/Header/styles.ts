import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 296px;
  background: ${({ theme }) => theme['base-profile']};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 940px) {
    & {
      justify-content: center;
    }
  }
`;

export const EffectImg = styled.img`
  width: 409px;
  height: 188px;
  margin-top: 65px;
  &:last-child {
    margin-top: 0px;

    width: 371px;
    height: 236px;
  }
  @media screen and (max-width: 940px) {
    & {
      display: none;
    }
  }
`;
export const LogoImg = styled.img`
  width: 148px;
  height: 98px;

  margin-bottom: 57px;
`;
