import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 416px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 2rem;
  height: 260px;
  background: ${({ theme }) => theme['base-post']};
  border-radius: 18px;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

export const Title = styled.span`
  width: 80%;

  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme['base-title']};
  line-height: 160%;
`;

export const CreatedAt = styled.span`
  font-size: 0.875rem;
  line-height: 160%;
  color: ${({ theme }) => theme['base-span']};
`;

export const Description = styled.span``;
