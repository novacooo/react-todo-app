import { THEME_COLOR_VIOLET, THEME_MODE_LIGHT } from 'app_constants';
import { IThemeType } from 'theme';

const violetLight: IThemeType = {
  mode: THEME_MODE_LIGHT,
  color: THEME_COLOR_VIOLET,

  MAIN: 'hsl(274, 87%, 58%)',
  MAIN_HOVER: 'hsl(274, 87%, 64%)',
  MAIN_BORDER: 'hsl(274, 87%, 52%)',
  MAIN_TRANSPARENT: 'hsla(274, 87%, 58%, 0.12)',
  MAIN_ITEMS: 'hsl(0, 0%, 100%)',
  MAIN_ITEMS_HOVER: 'hsl(274, 100%, 88%)',
  MAIN_PATTERN: 'hsl(281, 62%, 92%)',

  BG_PRIMARY: 'hsl(0, 0%, 100%)',
  BG_SECONDARY: 'hsl(0, 0%, 96%)',
  BG_NOTE: 'hsl(0, 0%, 100%)',
  BG_BADGE: 'hsl(0, 0%, 90%)',
  BG_BADGE_HOVER: 'hsl(0, 0%, 85%)',
  BG_HOVER: 'hsla(0, 0%, 0%, 0.05)',
  BG_HOVER_MAIN: 'hsla(0, 0%, 100%, 0.15)',
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

export default violetLight;
