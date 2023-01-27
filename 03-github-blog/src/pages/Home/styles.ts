import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 864px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const PublicationContainer = styled.div`
  display: flex;

  width: 100%;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 72px;
`;
export const PublicationTitle = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme['base-subtitle']};
  line-height: 160%;
`;
export const PublicationSubTitle = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-span']};
  line-height: 160%;
`;

export const SearchForm = styled.form`
  margin-top: 12px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    background: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    color: ${({ theme }) => theme['base-text']};
    font-size: 1rem;
    line-height: 160%;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
      font-size: 1rem;
      line-height: 160%;
    }
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 48px;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
  }
`;
