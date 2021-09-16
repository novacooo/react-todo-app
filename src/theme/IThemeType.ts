import {
  THEME_MODE_LIGHT,
  THEME_MODE_DARK,
  THEME_COLOR_BLUE,
  THEME_COLOR_ORANGE,
  THEME_COLOR_VIOLET,
  THEME_MODE_AUTO,
} from 'app_constants';

export type ThemeModeType =
  | typeof THEME_MODE_AUTO
  | typeof THEME_MODE_LIGHT
  | typeof THEME_MODE_DARK;

export type ThemeColorType =
  | typeof THEME_COLOR_BLUE
  | typeof THEME_COLOR_ORANGE
  | typeof THEME_COLOR_VIOLET;

export interface IThemeType {
  mode: typeof THEME_MODE_LIGHT | typeof THEME_MODE_DARK;
  color: ThemeColorType;

  MAIN: string;
  MAIN_HOVER: string;
  MAIN_BORDER: string;
  MAIN_TRANSPARENT: string;
  MAIN_ITEMS: string;
  MAIN_ITEMS_HOVER: string;
  MAIN_PATTERN: string;

  BG_PRIMARY: string;
  BG_SECONDARY: string;
  BG_NOTE: string;
  BG_BADGE: string;
  BG_HOVER: string;

  BORDER: string;
  BORDER_HOVER: string;

  TEXT_PRIMARY: string;
  TEXT_SECONDARY: string;
  TEXT_BUTTON: string;

  ICON_PRIMARY: string;
  ICON_SECONDARY: string;

  GREEN: string;
  YELLOW: string;
  RED: string;

  NOTE_SHADOW: string;
  DIALOG_SHADOW: string;
}
