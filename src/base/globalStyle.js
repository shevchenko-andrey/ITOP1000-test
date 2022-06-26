import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

a {
    text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

body {
  font-weight: 400;
  font-family: "Roboto"
}


`;
