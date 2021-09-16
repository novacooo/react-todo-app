import { THEME_COLOR_BLUE, THEME_MODE_LIGHT } from 'app_constants';
import { IThemeType } from 'theme';

const blueLight: IThemeType = {
  mode: THEME_MODE_LIGHT,
  color: THEME_COLOR_BLUE,

  MAIN: 'hsl(227, 59%, 52%)',
  MAIN_HOVER: 'hsl(227, 59%, 56%)',
  MAIN_BORDER: 'hsl(227, 59%, 48%)',
  MAIN_TRANSPARENT: 'hsla(227, 59%, 52%, 0.12)',
  MAIN_ITEMS: 'hsl(0, 0%, 100%)',
  MAIN_ITEMS_HOVER: 'hsl(227, 100%, 88%)',
  MAIN_PATTERN: 'hsl(223, 75%, 93%)',

  BG_PRIMARY: 'hsl(0, 0%, 100%)',
  BG_SECONDARY: 'hsl(0, 0%, 96%)',
  BG_NOTE: 'hsl(0, 0%, 100%)',
  BG_BADGE: 'hsl(0, 0%, 90%)',
  BG_HOVER: 'hsla(0, 0%, 100%, 0.15)',
  BG_DARKEN: 'hsla(0, 0%, 0%, 0.33)',

  BORDER: 'hsl(0, 0%, 90%)',
  BORDER_HOVER: 'hsl(0, 0%, 80%)',

  TEXT_PRIMARY: 'hsl(0, 0%, 7%)',
  TEXT_SECONDARY: 'hsl(0, 0%, 43%)',
  TEXT_BUTTON: 'hsl(0, 0%, 100%)',

  ICON_PRIMARY: 'hsl(0, 0%, 7%)',
  ICON_SECONDARY: 'hsl(0, 0%, 63%)',

  GREEN: 'hsl(126, 75%, 36%)',
  YELLOW: 'hsl(40, 88%, 61%)',
  RED: 'hsl(360, 90%, 61%)',

  NOTE_SHADOW: '0px 5px 15px 0px hsla(0, 0%, 0%, 0.08)',
  DIALOG_SHADOW: '0px 20px 60px 0px hsla(0, 0%, 0%, 0.22)',
};

export default blueLight;
