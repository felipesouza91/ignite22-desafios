import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ProfileContainer = styled.div`
  max-width: 864px;
  height: 221px;
  margin-top: -100px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;
export const ProfileImg = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProfileDescriptionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`;

export const GitHubButton = styled(Link)`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  span,
  svg {
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.blue};
  }
  &:hover {
    padding-bottom: 3.5px;
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }
`;

export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme['base-title']};
  line-height: 130%;
`;
export const Description = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
`;
export const ProfileFooter = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
export const ProfileFotterGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  svg {
    color: ${({ theme }) => theme['base-label']};
    font-size: 1.125rem;
  }
  span {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`;
