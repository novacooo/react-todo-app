import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import {
  BORDER_RADIUS,
  MARGIN_SIDE_DESKTOP,
  THEME_COLOR_BLUE,
  THEME_COLOR_ORANGE,
  THEME_COLOR_VIOLET,
  THEME_MODE_LIGHT,
  TRANSITION_TIME,
} from 'app_constants';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as HomeFilledIcon } from 'assets/icons/home_filled.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
import { ReactComponent as ClockFilledIcon } from 'assets/icons/clock_filled.svg';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { ReactComponent as DoneFilledIcon } from 'assets/icons/done_filled.svg';
import { ReactComponent as PaletteIcon } from 'assets/icons/palette.svg';
import { ReactComponent as LightModeIcon } from 'assets/icons/light_mode.svg';
import { fontSettings } from 'theme/fontSettings';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { toggleTransitionClass } from 'helpers';
import { appThemes, ThemeColorType } from 'theme';
import { actionCreators, StateType } from 'state';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ColorButton from 'components/atoms/ColorButton/ColorButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 11px ${MARGIN_SIDE_DESKTOP};
  width: 100%;
  height: 74px;
  background-color: ${({ theme }) => theme.MAIN};
  border-bottom: 4px solid ${({ theme }) => theme.MAIN_BORDER};
`;

const StyledAppLogo = styled(AppLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 36px;
  transform: translate(-50%, -50%);
  fill: ${({ theme }) => theme.MAIN_ITEMS};
`;

const ButtonsContainer = styled.div`
  display: flex;

  > * {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PaletteHoverContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 50%;
  padding-top: 3px;
  transform: translateX(-50%);
  transition: visibility ${TRANSITION_TIME}, opacity ${TRANSITION_TIME};

  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

const PaletteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.BG_NOTE};
  box-shadow: ${({ theme }) => theme.NOTE_SHADOW};
  border-radius: ${BORDER_RADIUS};

  > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const PaletteButtonContainer = styled.div`
  position: relative;
  border-radius: 24px;
  transition: border-radius ${TRANSITION_TIME};

  &:hover {
    border-radius: 24px 24px 0 0;

    ${PaletteHoverContainer} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const LoginButton = styled.button`
  margin-left: 30px;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.MAIN_ITEMS};
  border: none;
  border-radius: ${BORDER_RADIUS};
  color: ${({ theme }) => theme.MAIN};
  font-weight: ${fontSettings.weights.semiBold};

  &:hover {
    cursor: pointer;
  }
`;

const TopBar = (): JSX.Element => {
  const { pathname } = useLocation();
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
      <StyledAppLogo />
      <ButtonsContainer>
        <NavLink to={routes.home}>
          <IconButton
            active={pathname === routes.home ? true : false}
            icon={HomeIcon}
            iconActive={HomeFilledIcon}
          />
        </NavLink>
        <NavLink to={routes.deadline}>
          <IconButton
            active={pathname === routes.deadline ? true : false}
            icon={ClockIcon}
            iconActive={ClockFilledIcon}
          />
        </NavLink>
        <NavLink to={routes.done}>
          <IconButton
            active={pathname === routes.done ? true : false}
            icon={DoneIcon}
            iconActive={DoneFilledIcon}
          />
        </NavLink>
      </ButtonsContainer>
      <RightContainer>
        <ButtonsContainer>
          <PaletteButtonContainer>
            <IconButton icon={PaletteIcon} />
            <PaletteHoverContainer>
              <PaletteContainer>
                <ColorButton
                  color={appThemes[theme.mode][THEME_COLOR_BLUE].MAIN}
                  active={theme.color === THEME_COLOR_BLUE ? true : false}
                  onClick={() => changeThemeColor(THEME_COLOR_BLUE)}
                />
                <ColorButton
                  color={appThemes[theme.mode][THEME_COLOR_ORANGE].MAIN}
                  active={theme.color === THEME_COLOR_ORANGE ? true : false}
                  onClick={() => changeThemeColor(THEME_COLOR_ORANGE)}
                />
                <ColorButton
                  color={appThemes[theme.mode][THEME_COLOR_VIOLET].MAIN}
                  active={theme.color === THEME_COLOR_VIOLET ? true : false}
                  onClick={() => changeThemeColor(THEME_COLOR_VIOLET)}
                />
              </PaletteContainer>
            </PaletteHoverContainer>
          </PaletteButtonContainer>
          <IconButton icon={LightModeIcon} iconSize={25} onClick={toggleTheme} />
        </ButtonsContainer>
        <LoginButton>Login</LoginButton>
      </RightContainer>
    </Container>
  );
};

export default TopBar;
