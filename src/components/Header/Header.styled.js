import styled from 'styled-components';
export const StyledHeader = styled.header`
  background-color: #414994;
  padding: 20px 0;
`;
export const ExchangeRatesList = styled.ul`
  display: flex;
  justify-content: center;
  color: #ffffff;
`;

export const ExchangeRate = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
