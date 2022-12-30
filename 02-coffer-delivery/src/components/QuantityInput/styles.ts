import styled from 'styled-components';

export const QuantityInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 72px;
  padding: 8.5px 8px;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 8px;
  border: none;
  gap: 4px;
  & > button {
    background: none;
    border: none;
    cursor: pointer;
  }

  & > button > svg:hover {
    color: ${({ theme }) => theme['purple-dark']};
  }

  & > button > svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  text-align: center;
`;
