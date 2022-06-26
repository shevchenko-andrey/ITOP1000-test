import { GlobalStyle } from './base/globalStyle';
import Header from './components/Header/Header';
import Section from 'components/Section';
import CurrencyConversion from 'components/СurrencyСonversion';
function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <Section>
        <CurrencyConversion />
      </Section>
    </>
  );
}

export default App;
