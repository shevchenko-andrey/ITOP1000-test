import { useState } from 'react';
import { Title } from './CurrencyConversion.styled';
import CurrencyInput from 'components/CurrencyInput';
import { convertValue } from 'base/API/ExchangeRatesDataAPI';

const CurrencyConversion = () => {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);
  const [firstCurency, setFirstCurency] = useState('USD');
  const [secondCurency, setSecondCurency] = useState('USD');
  const handleChangeCurency = async (curency, inputName) => {
    console.log(curency, inputName);
    switch (inputName) {
      case 'firstInput':
        setFirstCurency(curency);
        const { new_amount } = await convertValue(
          curency,
          secondCurency,
          firstValue
        );
        setSecondValue(new_amount);

        break;
      case 'secondInput':
        setSecondCurency(curency);
        const response = await convertValue(curency, firstCurency, secondValue);
        setFirstValue(response.new_amount);
        break;
      default:
        break;
    }
  };
  const handleChangeValue = async (value, inputName) => {
    console.log(value, inputName);
    switch (inputName) {
      case 'firstInput':
        setFirstValue(value);
        const recalculation = await convertValue(
          secondCurency,
          firstCurency,
          value
        );

        setSecondValue(recalculation.new_amount);
        break;
      case 'secondInput':
        setSecondValue(value);
        const recalculation2 = await convertValue(
          firstCurency,
          secondCurency,
          value
        );
        setFirstValue(recalculation2.new_amount);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Title>Currency conversion</Title>
      <CurrencyInput
        inputName="firstInput"
        onChangeCurency={handleChangeCurency}
        value={firstValue}
        onChangeValue={handleChangeValue}
      />
      <CurrencyInput
        inputName="secondInput"
        value={secondValue}
        onChangeCurency={handleChangeCurency}
        onChangeValue={handleChangeValue}
      />
    </>
  );
};
export default CurrencyConversion;
