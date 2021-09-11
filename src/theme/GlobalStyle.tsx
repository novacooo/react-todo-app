import { createGlobalStyle } from 'styled-components';
import { THEME_TRANSITION_TIME, THEME_TRANSITION_CLASS } from 'app-constants';

const GlobalStyle = createGlobalStyle`
  html.${THEME_TRANSITION_CLASS},
  html.${THEME_TRANSITION_CLASS} *,
  html.${THEME_TRANSITION_CLASS} *:before,
  html.${THEME_TRANSITION_CLASS} *:after {
    transition: all ${THEME_TRANSITION_TIME}ms !important;
    transition-delay: 0 !important;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
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
    height: 100%;
  }
`;

export default GlobalStyle;
