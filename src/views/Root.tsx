import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { store, actionCreators, StateType } from 'state';
import { lightTheme, darkTheme } from 'theme';
import GlobalStyle from 'theme/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 2.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.MAIN};
`;

const Paragraph = styled.p`
  margin: 20px 0 0 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: hsl(0, 0%, 60%);
`;

const Link = styled.a`
  margin: 20px 0 0 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: hsl(0, 0%, 40%);

  &:hover {
    color: hsl(0, 0%, 80%);
  }
`;

const Root = (): JSX.Element => {
  const colorScheme = 'light';
  const dispatch = useDispatch();
  const theme = useSelector((state: StateType) => state.theme);

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    switchTheme(colorScheme === 'light' ? lightTheme : darkTheme);
  }, [colorScheme]);

  const changeTheme = () => {
    if (theme.mode == 'light') switchTheme(darkTheme);
    else switchTheme(lightTheme);
    console.log(theme.mode);
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Header onClick={changeTheme}>todo-app</Header>
          <Paragraph>app is under development</Paragraph>
          <Link href="..">&lt;- main page</Link>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Root;
