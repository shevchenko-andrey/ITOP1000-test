import { Wrapper, Select, Input } from './CurrencyInput.styled';
const CurrencyInput = ({
  onChangeCurency,
  curency,
  value,
  onChangeValue,
  inputName,
}) => {
  return (
    <Wrapper>
      <Input
        value={value}
        onChange={onChangeValue}
        name={inputName}
        type="number"
      ></Input>
      <Select name={inputName} value={curency} onChange={onChangeCurency}>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
        <option value="BTC">BTC</option>
        <option value="CAD">CAD</option>
        <option value="EUR">EUR</option>
      </Select>
    </Wrapper>
  );
};
export default CurrencyInput;
