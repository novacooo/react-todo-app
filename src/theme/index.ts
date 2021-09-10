export interface IThemeType {
  mode: 'light' | 'dark';

  MAIN: string;
  BG: string;
}

export const lightTheme: IThemeType = {
  mode: 'light',

  MAIN: 'hsl(148, 84%, 20%)',
  BG: 'hsl(0, 0%, 100%)',
};

export const darkTheme: IThemeType = {
  mode: 'dark',

  MAIN: 'hsl(152, 69%, 70%)',
  BG: 'hsl(0, 0%, 10%)',
};
