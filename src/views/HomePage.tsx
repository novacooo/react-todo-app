import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators, StateType } from 'state';
import { ThemeColorType, appThemes } from 'theme';
import { toggleTransitionClass } from 'helpers';
import {
  THEME_COLOR_BLUE,
  THEME_COLOR_VIOLET,
  THEME_COLOR_ORANGE,
  THEME_MODE_LIGHT,
} from 'app_constants';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

interface IColorButtonProps {
  bgColor: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
`;

const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.MAIN};
`;

const Button = styled.button`
  height: 4rem;
  border: 2px solid #a8a8a8;
  border-radius: 2rem;
  padding: 0 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ColorButton = styled.button<IColorButtonProps>`
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  background-color: ${({ bgColor }) => bgColor};
  border: 2px solid #a8a8a8;
  border-radius: 50%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  font-size: 600;
  color: ${({ theme }) => theme.TEXT_SECONDARY};
`;

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const theme = useSelector((state: StateType) => state.theme);

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  const toggleTheme = () => {
    const { mode, color } = theme;

    if (mode == THEME_MODE_LIGHT) switchTheme(appThemes.dark[color]);
    else switchTheme(appThemes.light[color]);

    toggleTransitionClass();
  };

  const changeThemeColor = (color: ThemeColorType) => {
    const { mode } = theme;

    switchTheme(appThemes[mode][color]);
    toggleTransitionClass();
  };

  return (
    <Container>
      <Header>react-todo-app</Header>
      <Button onClick={toggleTheme}>toggle theme</Button>
      <ButtonsContainer>
        <ColorButton
          bgColor={appThemes[theme.mode][THEME_COLOR_BLUE].MAIN}
          onClick={() => changeThemeColor(THEME_COLOR_BLUE)}
        />
        <ColorButton
          bgColor={appThemes[theme.mode][THEME_COLOR_ORANGE].MAIN}
          onClick={() => changeThemeColor(THEME_COLOR_ORANGE)}
        />
        <ColorButton
          bgColor={appThemes[theme.mode][THEME_COLOR_VIOLET].MAIN}
          onClick={() => changeThemeColor(THEME_COLOR_VIOLET)}
        />
      </ButtonsContainer>
      <StyledLink to={routes.login}>LoginPage -{'>'}</StyledLink>
    </Container>
  );
};

export default HomePage;
