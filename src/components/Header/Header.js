import { StyledHeader, ExchangeRatesList, ExchangeRate } from './Header.styled';
const Header = () => {
  return (
    <StyledHeader>
      <ExchangeRatesList>
        <ExchangeRate>
          <p>USD:</p>
        </ExchangeRate>
        <ExchangeRate>
          <p>EUR:</p>
        </ExchangeRate>
      </ExchangeRatesList>
    </StyledHeader>
  );
};
export default Header;
