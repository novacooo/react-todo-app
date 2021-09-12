import {
  THEME_MODE_LIGHT,
  THEME_MODE_DARK,
  THEME_COLOR_BLUE,
  THEME_COLOR_YELLOW,
  THEME_COLOR_VIOLET,
} from 'app-constants';
import blueDark from './dark/blueDark';
import violetDark from './dark/violetDark';
import yellowDark from './dark/yellowDark';
import blueLight from './light/blueLight';
import violetLight from './light/violetLight';
import yellowLight from './light/yellowLight';

export const themes = {
  [THEME_MODE_LIGHT]: {
    [THEME_COLOR_BLUE]: blueLight,
    [THEME_COLOR_YELLOW]: yellowLight,
    [THEME_COLOR_VIOLET]: violetLight,
  },
  [THEME_MODE_DARK]: {
    [THEME_COLOR_BLUE]: blueDark,
    [THEME_COLOR_YELLOW]: yellowDark,
    [THEME_COLOR_VIOLET]: violetDark,
  },
};
