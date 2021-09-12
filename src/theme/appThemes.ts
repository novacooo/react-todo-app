import {
  THEME_MODE_LIGHT,
  THEME_MODE_DARK,
  THEME_COLOR_BLUE,
  THEME_COLOR_ORANGE,
  THEME_COLOR_VIOLET,
} from 'app-constants';
import blueDark from './dark/blueDark';
import violetDark from './dark/violetDark';
import orangeDark from './dark/orangeDark';
import blueLight from './light/blueLight';
import violetLight from './light/violetLight';
import orangeLight from './light/orangeLight';

export const appThemes = {
  [THEME_MODE_LIGHT]: {
    [THEME_COLOR_BLUE]: blueLight,
    [THEME_COLOR_ORANGE]: orangeLight,
    [THEME_COLOR_VIOLET]: violetLight,
  },
  [THEME_MODE_DARK]: {
    [THEME_COLOR_BLUE]: blueDark,
    [THEME_COLOR_ORANGE]: orangeDark,
    [THEME_COLOR_VIOLET]: violetDark,
  },
};
