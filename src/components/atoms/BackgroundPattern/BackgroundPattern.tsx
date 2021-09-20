import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Icon } from 'assets/pattern/icon.svg';
import { ReactComponent as TopLeftShape } from 'assets/pattern/top_left_shape.svg';
import { ReactComponent as BottomLeftShape } from 'assets/pattern/bottom_left_shape.svg';
import { ReactComponent as TopRightShape } from 'assets/pattern/top_right_shape.svg';
import { ReactComponent as BottomRightShape } from 'assets/pattern/bottom_right_shape.svg';

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
  top: 0;
  left: 0;
  transform: translate(44%, -88%);
  width: 26vw;
  height: auto;
`;

const StyledBottomLeftShape = styled(BottomLeftShape)`
  ${patternStyle}
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-71%, -36%);
  width: 22vw;
  height: auto;
`;

const StyledTopRightShape = styled(TopRightShape)`
  ${patternStyle}
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-8%, -70%);
  width: 38vw;
  height: auto;
`;

const StyledBottomRightShape = styled(BottomRightShape)`
  ${patternStyle}
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(84%, -46%);
  width: 21vw;
  height: auto;
`;

const StyledTopLeftIcon = styled(Icon)`
  ${patternStyle}
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-44%, -31%) rotate(16deg);
  width: 7vw;
  height: auto;
`;

const BackgroundPattern = (): JSX.Element => (
  <StyledContainer>
    <StyledTopLeftShape />
    <StyledBottomLeftShape />
    <StyledTopRightShape />
    <StyledBottomRightShape />
    <StyledTopLeftIcon />
  </StyledContainer>
);

export default BackgroundPattern;
