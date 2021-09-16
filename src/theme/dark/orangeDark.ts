import { THEME_COLOR_ORANGE, THEME_MODE_DARK } from 'app_constants';
import { IThemeType } from 'theme';

const orangeDark: IThemeType = {
  mode: THEME_MODE_DARK,
  color: THEME_COLOR_ORANGE,

  MAIN: 'hsl(22, 91%, 60%)',
  MAIN_HOVER: 'hsl(22, 91%, 55%)',
  MAIN_BORDER: 'hsl(25, 70%, 43%)',
  MAIN_TRANSPARENT: 'hsla(22, 91%, 60%, 0.07)',
  MAIN_ITEMS: 'hsl(0, 0%, 94%)',
  MAIN_ITEMS_HOVER: 'hsl(22, 100%, 86%)',
  MAIN_PATTERN: 'hsl(29, 27%, 10%)',

  BG_PRIMARY: 'hsl(0, 0%, 7%)',
  BG_SECONDARY: 'hsl(0, 0%, 9%)',
  BG_NOTE: 'hsl(0, 0%, 10%)',
  BG_BADGE: 'hsl(0, 0%, 13%)',
  BG_HOVER: 'hsla(0, 0%, 0%, 0.1)',
  BG_DARKEN: 'hsla(0, 0%, 0%, 0.33)',

  BORDER: 'hsl(0, 0%, 13%)',
  BORDER_HOVER: 'hsl(0, 0%, 21%)',

  TEXT_PRIMARY: 'hsl(0, 0%, 94%)',
  TEXT_SECONDARY: 'hsl(0, 0%, 60%)',
  TEXT_BUTTON: 'hsl(0, 0%, 94%)',

  ICON_PRIMARY: 'hsl(0, 0%, 94%)',
  ICON_SECONDARY: 'hsl(0, 0%, 40%)',

  GREEN: 'hsl(126, 54%, 59%)',
  YELLOW: 'hsl(40, 70%, 61%)',
  RED: 'hsl(360, 90%, 61%)',

  NOTE_SHADOW: '0px 5px 15px 0px hsla(0, 0%, 0%, 0.12)',
  DIALOG_SHADOW: '0px 20px 60px 0px hsla(0, 0%, 0%, 0.36)',
};

export default orangeDark;
