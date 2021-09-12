import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import { MARGIN_SIDE_DESKTOP } from 'app_constants';

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
  height: 32px;
  transform: translate(-50%, -50%);
  fill: ${({ theme }) => theme.MAIN_ITEMS};
`;

const TopBar = (): JSX.Element => {
  return (
    <Container>
      <StyledAppLogo />
    </Container>
  );
};

export default TopBar;
