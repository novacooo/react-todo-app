import blueDark from './dark/blueDark';
import violetDark from './dark/violetDark';
import yellowDark from './dark/yellowDark';
import blueLight from './light/blueLight';
import violetLight from './light/violetLight';
import yellowLight from './light/yellowLight';

export const themes = {
  light: {
    blue: blueLight,
    yellow: yellowLight,
    violet: violetLight,
  },
  dark: {
    blue: blueDark,
    yellow: yellowDark,
    violet: violetDark,
  },
};
