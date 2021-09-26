import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Icon } from 'assets/pattern/icon.svg';
import { ReactComponent as TopLeftShape } from 'assets/pattern/top_left_shape.svg';
import { ReactComponent as BottomLeftShape } from 'assets/pattern/bottom_left_shape.svg';
import { ReactComponent as TopRightShape } from 'assets/pattern/top_right_shape.svg';
import { ReactComponent as BottomRightShape } from 'assets/pattern/bottom_right_shape.svg';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const patternStyle = css`
  fill: ${({ theme }) => theme.MAIN_PATTERN};
`;

const StyledTopLeftShape = styled(TopLeftShape)`
  ${patternStyle}
  position: absolute;
  top: -23vw;
  left: 12vw;
  width: 26vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    width: 28vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    top: -24vw;
    width: 30vw;
  }
`;

const StyledBottomLeftShape = styled(BottomLeftShape)`
  ${patternStyle}
  position: absolute;
  top: 300px;
  left: -15vw;
  width: 22vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    left: -17vw;
    width: 26vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    left: -19vw;
    width: 30vw;
  }
`;

const StyledTopRightShape = styled(TopRightShape)`
  ${patternStyle}
  position: absolute;
  top: -16vw;
  right: 3vw;
  width: 40vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    width: 44vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    width: 48vw;
  }
`;

const StyledBottomRightShape = styled(BottomRightShape)`
  ${patternStyle}
  position: absolute;
  top: 420px;
  right: -17vw;
  width: 21vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    top: 390px;
    right: -17vw;
    width: 25vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    top: 360px;
    right: -21vw;
    width: 30vw;
  }
`;

const StyledTopLeftIcon = styled(Icon)`
  ${patternStyle}
  position: absolute;
  top: -2vw;
  left: -3vw;
  transform: rotate(16deg);
  width: 7vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    top: -3vw;
    width: 10vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    top: 10vw;
    left: -5vw;
    width: 12vw;
  }

  @media (max-width: 500px) {
    top: 20vw;
    left: -7vw;
    width: 16vw;
  }
`;

const StyledCenterLeftIcon = styled(Icon)`
  ${patternStyle}
  position: absolute;
  top: 270px;
  left: 20vw;
  transform: rotate(-18deg);
  width: 4.5vw;
  height: auto;

  @media (max-width: ${BP_TABLET_MAX}) {
    display: none;
  }
`;

const StyledBottomLeftIcon = styled(Icon)`
  ${patternStyle}
  position: absolute;
  top: 735px;
  left: 8vw;
  transform: rotate(30deg);
  width: 7.5vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    top: 670px;
    width: 11vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    top: 570px;
    width: 15vw;
  }
`;

const StyledTopRightIcon = styled(Icon)`
  ${patternStyle}
  position: absolute;
  top: 130px;
  right: -1.5vw;
  transform: rotate(16deg);
  width: 7vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    top: 130px;
    right: -3vw;
    width: 10vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    top: 120px;
    right: -5vw;
    width: 12vw;
  }

  @media (max-width: 500px) {
    top: 100px;
    right: -7vw;
    width: 14vw;
  }
`;

const StyledCenterRightIcon = styled(Icon)`
  ${patternStyle}
  position: absolute;
  top: 475px;
  right: 18vw;
  transform: rotate(-4deg);
  width: 6vw;
  height: auto;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    top: 570px;
    right: 15vw;
    width: 9vw;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    top: 570px;
    right: 13vw;
    width: 13vw;
  }
`;

const BackgroundPattern = (): JSX.Element => (
  <StyledContainer>
    <StyledTopLeftShape />
    <StyledBottomLeftShape />
    <StyledTopRightShape />
    <StyledBottomRightShape />
    <StyledTopLeftIcon />
    <StyledCenterLeftIcon />
    <StyledBottomLeftIcon />
    <StyledTopRightIcon />
    <StyledCenterRightIcon />
  </StyledContainer>
);

export default BackgroundPattern;
