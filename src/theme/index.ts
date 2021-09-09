export interface IThemeType {
  mode: 'light' | 'dark';

  MAIN: string;
}

export const lightTheme: IThemeType = {
  mode: 'light',

  MAIN: 'hsl(148, 84%, 20%)',
};

export const darkTheme: IThemeType = {
  mode: 'dark',

  MAIN: 'hsl(152, 69%, 70%)',
};
