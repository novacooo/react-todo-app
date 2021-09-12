import { THEME_COLOR_BLUE, THEME_MODE_DARK } from 'app_constants';
import { IThemeType } from 'theme';

const blueDark: IThemeType = {
  mode: THEME_MODE_DARK,
  color: THEME_COLOR_BLUE,

  MAIN: 'hsl(216, 62%, 53%)',
  MAIN_BORDER: 'hsl(216, 58%, 46%)',
  MAIN_TRANSPARENT: 'hsla(216, 81%, 63%, 0.07)',
  MAIN_ITEMS: 'hsl(0, 0%, 94%)',
  MAIN_PATTERN: 'hsl(216, 21%, 10%)',

  BG_PRIMARY: 'hsl(0, 0%, 7%)',
  BG_SECONDARY: 'hsl(0, 0%, 9%)',
  BG_NOTE: 'hsl(0, 0%, 10%)',
  BG_BADGE: 'hsl(0, 0%, 13%)',
  BG_HOVER: 'hsla(0, 0%, 0%, 0.1)',

  BORDER: 'hsl(0, 0%, 13%)',
  BORDER_HOVER: 'hsla(0, 0%, 0%, 0.1)',

  TEXT_PRIMARY: 'hsl(0, 0%, 94%)',
  TEXT_SECONDARY: 'hsl(0, 0%, 60%)',
  TEXT_BUTTON: 'hsl(0, 0%, 94%)',

  ICON_PRIMARY: 'hsl(0, 0%, 94%)',
  ICON_SECONDARY: 'hsl(0, 0%, 40%)',

  GREEN: 'hsl(126, 54%, 59%)',
  YELLOW: 'hsl(40, 70%, 61%)',
  RED: 'hsl(360, 90%, 61%)',
};

export default blueDark;
