import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { actionCreators, StateType } from 'state';
import { useThemeDetector } from 'hooks';
import GlobalStyle from 'theme/GlobalStyle';
import { appThemes } from 'theme';
import { toggleTransitionClass } from 'helpers';

interface IProps extends RouteComponentProps {
  children: JSX.Element;
}

const MainTemplate = ({ children }: IProps) => {
  const theme = useSelector((state: StateType) => state.theme);
  const isSystemDarkTheme = useThemeDetector();
  const dispatch = useDispatch();

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const { light, dark } = appThemes;
    const { color } = theme;

    switchTheme(isSystemDarkTheme ? dark[color] : light[color]);
    toggleTransitionClass();
  }, [isSystemDarkTheme]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default withRouter(MainTemplate);
