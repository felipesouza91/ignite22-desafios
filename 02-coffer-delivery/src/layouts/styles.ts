import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: calc(100vh -10rem);
  margin: 0 auto;

  @media (max-width: 1120px) {
    margin: 0 2rem;
  }
`;
