import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 84.95px;
  height: 40px;
`;
export const HeaderSuffix = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
export const Location = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  padding: 8px;
  flex-direction: row;
  gap: 4px;
  background: ${({ theme }) => theme['purple-light']};
  border-radius: 6px;

  color: ${({ theme }) => theme['purple-dark']};

  & > span {
    font-size: 14px;
    line-height: 130%;
  }
`;
export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  cursor: pointer;
`;
