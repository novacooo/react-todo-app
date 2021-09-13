import React from 'react';
import styled from 'styled-components';
import {
  BORDER_RADIUS,
  LS_KEY_THEME_COLOR,
  THEME_COLOR_BLUE,
  THEME_COLOR_ORANGE,
  THEME_COLOR_VIOLET,
  TRANSITION_TIME,
} from 'app_constants';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as PaletteIcon } from 'assets/icons/palette.svg';
import { appThemes, ThemeColorType } from 'theme';
import { actionCreators, StateType } from 'state';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ColorButton from 'components/atoms/ColorButton/ColorButton';

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

const ThemeButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const theme = useSelector((state: StateType) => state.theme);

  const { switchTheme } = bindActionCreators(actionCreators, dispatch);

  const changeThemeColor = (color: ThemeColorType) => {
    const { mode } = theme;

    localStorage.setItem(LS_KEY_THEME_COLOR, color);
    switchTheme(appThemes[mode][color]);

    // toggleTransitionClass();
  };

  return (
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
  );
};

export default ThemeButton;
