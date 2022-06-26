import { Wrapper } from './CurrencyInput.styled';
const CurrencyInput = ({
  onChangeCurency,
  value,
  onChangeValue,
  inputName,
}) => {
  const handleChangeCurency = e => onChangeCurency(e.target.value, inputName);

  return (
    <Wrapper>
      <input
        value={value}
        onChange={e => onChangeValue(e.target.value, inputName)}
        type="number"
      ></input>
      <select onChange={handleChangeCurency}>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
        <option value="BTC">BTC</option>
        <option value="CAD">CAD</option>
        <option value="EUR">EUR</option>
      </select>
    </Wrapper>
  );
};
export default CurrencyInput;
