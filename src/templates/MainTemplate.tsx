import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { actionCreators, StateType } from 'state';
import { useThemeDetector } from 'hooks';
import GlobalStyle from 'theme/GlobalStyle';
import { appThemes, ThemeColorType, ThemeModeType } from 'theme';
import { toggleTransitionClass } from 'helpers';
import {
  LS_KEY_THEME_COLOR,
  LS_KEY_THEME_MODE,
  THEME_COLOR_BLUE,
  THEME_MODE_AUTO,
  THEME_MODE_DARK,
  THEME_MODE_LIGHT,
} from 'app_constants';

interface IProps extends RouteComponentProps {
  children: JSX.Element;
}

const MainTemplate = ({ children }: IProps) => {
  const theme = useSelector((state: StateType) => state.theme);
  const isSystemDarkTheme = useThemeDetector();
  const dispatch = useDispatch();

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  const setTheme = () => {
    const modeItem = localStorage.getItem(LS_KEY_THEME_MODE) as ThemeModeType;
    const colorItem = localStorage.getItem(LS_KEY_THEME_COLOR) as ThemeColorType;

    const mode = modeItem ? modeItem : THEME_MODE_AUTO;
    const color = colorItem ? colorItem : THEME_COLOR_BLUE;

    if (mode === THEME_MODE_AUTO) {
      const modeToSet = isSystemDarkTheme ? THEME_MODE_DARK : THEME_MODE_LIGHT;
      switchTheme(appThemes[modeToSet][color]);
    } else {
      switchTheme(appThemes[mode][color]);
    }

    toggleTransitionClass();
  };

  useEffect(() => {
    setTheme();
  }, [isSystemDarkTheme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default withRouter(MainTemplate);
