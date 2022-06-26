import { useState, useEffect } from 'react';
import { Title } from './CurrencyConversion.styled';
import { convertValue } from 'base/API/ExchangeRatesDataAPI';
import { useDebounce } from 'hooks';
import CurrencyInput from 'components/CurrencyInput';
const CurrencyConversion = () => {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);
  const [firstCurency, setFirstCurency] = useState('USD');
  const [secondCurency, setSecondCurency] = useState('USD');
  const [debouncedConvert, result] = useDebounce(convertValue, 1000);
  useEffect(() => {
    if (!result) {
      return;
    }

    const [response, inputName] = result;
    if (inputName === 'firstInput') {
      setSecondValue(response.new_amount);
    }

    if (inputName === 'secondInput') {
      setFirstValue(response.new_amount);
    }
  }, [result]);
  const firstValueHendler = async e => {
    const { value = '', name = '' } = e.target;
    setFirstValue(value);

    await debouncedConvert(name, firstCurency, secondCurency, value);
  };
  const secondValueHendler = async e => {
    const { value = '', name = '' } = e.target;
    setSecondValue(value);
    await debouncedConvert(name, secondCurency, firstCurency, value);
  };
  const secondCurencyHandler = e => {
    const { value } = e.target;
    const { name } = e.currentTarget;
    setSecondCurency(value);
    debouncedConvert(name, value, firstCurency, secondValue);
  };
  const firstCurencyHandler = e => {
    const { value } = e.target;
    const { name } = e.currentTarget;
    setFirstCurency(value);
    debouncedConvert(name, value, secondCurency, firstValue);
  };
  return (
    <>
      <Title>Currency conversion</Title>
      <CurrencyInput
        value={firstValue}
        onChangeValue={firstValueHendler}
        curency={firstCurency}
        onChangeCurency={firstCurencyHandler}
        inputName="firstInput"
      />
      <CurrencyInput
        value={secondValue}
        onChangeValue={secondValueHendler}
        curency={secondCurency}
        onChangeCurency={secondCurencyHandler}
        inputName="secondInput"
      />
    </>
  );
};
export default CurrencyConversion;
