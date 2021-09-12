import {
  THEME_MODE_LIGHT,
  THEME_MODE_DARK,
  THEME_COLOR_BLUE,
  THEME_COLOR_YELLOW,
  THEME_COLOR_VIOLET,
} from 'app-constants';

export type ThemeModeType = typeof THEME_MODE_LIGHT | typeof THEME_MODE_DARK;

export type ThemeColorType =
  | typeof THEME_COLOR_BLUE
  | typeof THEME_COLOR_YELLOW
  | typeof THEME_COLOR_VIOLET;

export interface IThemeType {
  mode: ThemeModeType;
  color: ThemeColorType;
  MAIN: string;
  BG: string;
}
