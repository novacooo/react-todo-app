import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import { MARGIN_SIDE_DESKTOP } from 'app_constants';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as HomeFilledIcon } from 'assets/icons/home_filled.svg';
import { ReactComponent as ClockIcon } from 'assets/icons/clock.svg';
import { ReactComponent as ClockFilledIcon } from 'assets/icons/clock_filled.svg';
import { ReactComponent as DoneIcon } from 'assets/icons/done.svg';
import { ReactComponent as DoneFilledIcon } from 'assets/icons/done_filled.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow_right.svg';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import ThemeButton from 'components/molecules/ThemeButton/ThemeButton';
import ModeButton from 'components/molecules/ModeButton/ModeButton';
import Button from 'components/atoms/Button/Button';
import { fontSettings } from 'theme/fontSettings';

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

const StyledButton = styled(Button)`
  margin-left: 30px;
  height: 33px;
  background-color: ${({ theme }) => theme.MAIN_ITEMS};
  color: ${({ theme }) => theme.MAIN};
  font-size: ${fontSettings.sizesDesktop.s};
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

const TopBar = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <Container>
      <StyledAppLogo />
      <ButtonsContainer>
        <Link to={routes.home}>
          <IconButton
            active={pathname === routes.home ? true : false}
            icon={HomeIcon}
            iconActive={HomeFilledIcon}
          />
        </Link>
        <Link to={routes.deadline}>
          <IconButton
            active={pathname === routes.deadline ? true : false}
            icon={ClockIcon}
            iconActive={ClockFilledIcon}
          />
        </Link>
        <Link to={routes.done}>
          <IconButton
            active={pathname === routes.done ? true : false}
            icon={DoneIcon}
            iconActive={DoneFilledIcon}
          />
        </Link>
      </ButtonsContainer>
      <RightContainer>
        <ButtonsContainer>
          <ThemeButton />
          <ModeButton />
        </ButtonsContainer>
        <ButtonLink to={routes.login}>
          <StyledButton icon={ArrowRightIcon} iconSize={12}>
            Login
          </StyledButton>
        </ButtonLink>
      </RightContainer>
    </Container>
  );
};

export default TopBar;
