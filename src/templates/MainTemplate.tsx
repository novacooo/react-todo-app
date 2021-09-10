import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { actionCreators, StateType } from 'state';
import { useThemeDetector } from 'hooks';
import GlobalStyle from 'theme/GlobalStyle';
import { lightTheme, darkTheme } from 'theme';

interface IProps extends RouteComponentProps {
  children: JSX.Element;
}

const MainTemplate = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: StateType) => state.theme);
  const isSystemDarkTheme = useThemeDetector();

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    switchTheme(isSystemDarkTheme ? darkTheme : lightTheme);

    const htmlClassList = document.documentElement.classList;
    htmlClassList.add('transition');
    setTimeout(() => htmlClassList.remove('transition'), 200);
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
