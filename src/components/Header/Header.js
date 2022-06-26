import { useEffect, useState } from 'react';
import {
  StyledHeader,
  ExchangeRatesList,
  ExchangeRate,
  Text,
} from './Header.styled';
import { convertValue } from '../../base/API/ExchangeRatesDataAPI';
const Header = () => {
  const [curencyUsd, setcurencyUsd] = useState(null);
  const [curencyEur, setcurencyEur] = useState(null);
  const [complited, setComplited] = useState(false);
  useEffect(() => {
    const getCurency = async () => {
      const [curencyUsd] = await convertValue('', 'USD', 'UAH', 1);

      setcurencyUsd(curencyUsd.new_amount);
      const [curencyEur] = await convertValue('', 'EUR', 'UAH', 1);
      setcurencyEur(curencyEur.new_amount);
      setComplited(true);
    };
    getCurency();
  }, []);
  return (
    <StyledHeader>
      <ExchangeRatesList>
        {complited && (
          <>
            <ExchangeRate>
              <Text>USD: {curencyUsd}</Text>
            </ExchangeRate>
            <ExchangeRate>
              <Text>EUR: {curencyEur}</Text>
            </ExchangeRate>
          </>
        )}
      </ExchangeRatesList>
    </StyledHeader>
  );
};
export default Header;
