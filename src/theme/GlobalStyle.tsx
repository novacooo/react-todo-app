import { createGlobalStyle } from 'styled-components';
import {
  THEME_TRANSITION_TIME,
  THEME_TRANSITION_CLASS,
  BOARDS_GRID_CLASS,
  BOARDS_GRID_COLUMN_CLASS,
  BP_MOBILE_MAX,
} from 'app_constants';

const GlobalStyle = createGlobalStyle`
  html.${THEME_TRANSITION_CLASS},
  html.${THEME_TRANSITION_CLASS} *,
  html.${THEME_TRANSITION_CLASS} *:before,
  html.${THEME_TRANSITION_CLASS} *:after {
    /* transition: all ${THEME_TRANSITION_TIME}ms !important;
    transition-delay: 0 !important; */
    transition: none !important;
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
    background-color: ${({ theme }) => theme.BG_PRIMARY};
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;

    * {
      margin: 0;
      padding: 0;
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

  /* ---------- MASONRY LAYOUT ---------- */
  .${BOARDS_GRID_CLASS} {
    display: flex;
    margin-left: -40px;
    width: calc(100% + 40px);

    @media (max-width: ${BP_MOBILE_MAX}) {
      margin-left: -30px;
      width: calc(100% + 30px);
    }
  }

  .${BOARDS_GRID_COLUMN_CLASS} {
    padding-left: 40px;
    background-clip: padding-box;

    @media (max-width: ${BP_MOBILE_MAX}) {
      padding-left: 30px;
    }
  }
`;

export default GlobalStyle;
