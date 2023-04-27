import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 21px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: inherit;
}

li {
  list-style: none;
}
`;
