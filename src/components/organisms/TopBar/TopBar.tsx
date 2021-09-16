import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AppLogo } from 'assets/logo/app_logo.svg';
import {
  BP_MOBILE_MAX,
  BP_TABLET_MAX,
  BP_TABLET_MIN,
  MARGIN_SIDE_DESKTOP,
  MARGIN_SIDE_MOBILE,
  MARGIN_SIDE_TABLET,
} from 'app_constants';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg';
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 11px ${MARGIN_SIDE_DESKTOP};
  width: 100%;
  background-color: ${({ theme }) => theme.MAIN};
  border-bottom: 4px solid ${({ theme }) => theme.MAIN_BORDER};

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    padding: 11px ${MARGIN_SIDE_TABLET};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    grid-template-columns: repeat(3, minmax(80px, 1fr));
    padding: 6px ${MARGIN_SIDE_MOBILE};
  }
`;

const HamburgerButton = styled(IconButton)`
  position: relative;
  left: -13px;
  display: none;

  @media (max-width: ${BP_MOBILE_MAX}) {
    display: block;
  }
`;

const ButtonsContainer = styled.div`
  justify-self: start;
  display: flex;
  gap: 20px;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    gap: 10px;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    display: none;
  }
`;

const StyledAppLogo = styled(AppLogo)`
  justify-self: center;
  width: auto;
  height: 36px;
  fill: ${({ theme }) => theme.MAIN_ITEMS};

  @media (max-width: ${BP_MOBILE_MAX}) {
    height: 30px;
  }
`;

const RightContainer = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;

  @media (max-width: ${BP_MOBILE_MAX}) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  height: 33px;
  background-color: ${({ theme }) => theme.MAIN_ITEMS};
  color: ${({ theme }) => theme.MAIN};
  font-size: ${fontSettings.sizesDesktop.s};

  &:hover {
    background-color: ${({ theme }) => theme.MAIN_ITEMS};
  }
`;

const ButtonLink = styled(Link)`
  margin-left: 30px;
  text-decoration: none;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    margin-left: 15px;
  }
`;

const TopBar = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <Container>
      <HamburgerButton icon={HamburgerIcon} />
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
      <StyledAppLogo />
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
