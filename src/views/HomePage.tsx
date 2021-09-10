import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators, StateType } from 'state';
import { lightTheme, darkTheme } from 'theme';
import { useThemeDetector } from 'hooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.BG};
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

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const theme = useSelector((state: StateType) => state.theme);
  const isSystemDarkTheme = useThemeDetector();

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  const changeTheme = () => {
    if (theme.mode == 'light') switchTheme(darkTheme);
    else switchTheme(lightTheme);

    document.documentElement.classList.add('transition');
    setTimeout(() => document.documentElement.classList.remove('transition'), 200);
  };

  return (
    <Container>
      <Header onClick={changeTheme}>{isSystemDarkTheme ? 'dark' : 'light'}</Header>
      <Paragraph>app is under development</Paragraph>
      <Link href="..">&lt;- main page</Link>
    </Container>
  );
};

export default HomePage;
