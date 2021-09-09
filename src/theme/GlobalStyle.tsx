import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: all 0.2s;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: hsl(0, 0%, 8%);
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;

    * {
      font-family: 'Montserrat', sans-serif;
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default GlobalStyle;
