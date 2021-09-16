import {
  LS_KEY_THEME_MODE,
  THEME_MODE_AUTO,
  THEME_MODE_DARK,
  THEME_MODE_LIGHT,
  TRANSITION_TIME,
} from 'app_constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as AutoModeIcon } from 'assets/icons/auto_mode.svg';
import { ReactComponent as LightModeIcon } from 'assets/icons/light_mode.svg';
import { ReactComponent as DarkModeIcon } from 'assets/icons/dark_mode.svg';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, StateType } from 'state';
import { bindActionCreators } from 'redux';
import { appThemes, ThemeModeType } from 'theme';
import { useThemeDetector } from 'hooks';

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border: none;
  border-radius: 24px;
  transition: background-color ${TRANSITION_TIME};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.BG_HOVER};
  }
`;

const AutoIcon = styled(AutoModeIcon)`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.MAIN_ITEMS};
  transition: fill ${TRANSITION_TIME};
`;

const LightIcon = styled(LightModeIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.MAIN_ITEMS};
  transition: fill ${TRANSITION_TIME};
`;

const DarkIcon = styled(DarkModeIcon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.MAIN_ITEMS};
  transition: fill ${TRANSITION_TIME};
`;

const ModeButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const theme = useSelector((state: StateType) => state.theme);
  const isSystemDarkTheme = useThemeDetector();

  const modeItem = localStorage.getItem(LS_KEY_THEME_MODE) as ThemeModeType;
  const mode = modeItem ? modeItem : THEME_MODE_AUTO;

  const [iconMode, setIconMode] = useState<ThemeModeType>(mode);

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  const changeMode = () => {
    const { color } = theme;

    switch (iconMode) {
      case THEME_MODE_AUTO:
        setIconMode(THEME_MODE_LIGHT);
        localStorage.setItem(LS_KEY_THEME_MODE, THEME_MODE_LIGHT);
        switchTheme(appThemes.light[color]);
        break;

      case THEME_MODE_LIGHT:
        setIconMode(THEME_MODE_DARK);
        localStorage.setItem(LS_KEY_THEME_MODE, THEME_MODE_DARK);
        switchTheme(appThemes.dark[color]);
        break;

      case THEME_MODE_DARK:
        setIconMode(THEME_MODE_AUTO);
        localStorage.setItem(LS_KEY_THEME_MODE, THEME_MODE_AUTO);
        switchTheme(appThemes[isSystemDarkTheme ? THEME_MODE_DARK : THEME_MODE_LIGHT][color]);
        break;
    }

    // toggleTransitionClass();
  };

  const renderIcon = (themeMode: ThemeModeType) => {
    switch (themeMode) {
      case THEME_MODE_AUTO:
        return <AutoIcon />;

      case THEME_MODE_LIGHT:
        return <LightIcon />;

      case THEME_MODE_DARK:
        return <DarkIcon />;
    }
  };

  return <Container onClick={changeMode}>{renderIcon(iconMode)}</Container>;
};

export default ModeButton;
