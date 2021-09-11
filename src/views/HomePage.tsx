import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators, StateType } from 'state';
import themes from 'theme';
import { toggleTransitionClass } from 'helpers';

interface IColorButtonProps {
  bgColor: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.BG};
`;

const Header = styled.h1`
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

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const theme = useSelector((state: StateType) => state.theme);

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  const toggleTheme = () => {
    const { mode, color } = theme;

    if (mode == 'light') switchTheme(themes.dark[color]);
    else switchTheme(themes.light[color]);

    toggleTransitionClass();
  };

  const changeThemeColor = (color: 'blue' | 'yellow' | 'violet') => {
    const { mode } = theme;

    switchTheme(themes[mode][color]);
    toggleTransitionClass();
  };

  return (
    <Container>
      <Header>todo-app</Header>
      <Button onClick={toggleTheme}>toggle theme</Button>
      <ButtonsContainer>
        <ColorButton bgColor="blue" onClick={() => changeThemeColor('blue')} />
        <ColorButton bgColor="yellow" onClick={() => changeThemeColor('yellow')} />
        <ColorButton bgColor="violet" onClick={() => changeThemeColor('violet')} />
      </ButtonsContainer>
    </Container>
  );
};

export default HomePage;
