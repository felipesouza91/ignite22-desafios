import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 864px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;

  h1 {
    margin-top: 8rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
  }
`;

export const PostInfo = styled.div`
  width: 100%;
  max-width: 864px;
  padding: 2rem;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const BaseButton = styled.button`
  display: flex;
  background: none;
  border: none;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.blue};
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 160%;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-title']};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PostFooter = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const FooterGroup = styled.div`
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
    color: ${({ theme }) => theme['base-span']};
    line-height: 160%;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 2.5rem 2rem;
  align-items: flex-start;
`;
