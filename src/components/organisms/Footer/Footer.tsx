import React from 'react';
import styled from 'styled-components';
import {
  BP_MOBILE_MAX,
  BP_TABLET_MAX,
  BP_TABLET_MIN,
  MARGIN_SIDE_DESKTOP,
  MARGIN_SIDE_MOBILE,
  TRANSITION_TIME,
} from 'app_constants';
import { fontSettings } from 'theme/fontSettings';
import FooterIcon from 'components/atoms/FooterIcon/FooterIcon';
import { ReactComponent as NovacoLogo } from 'assets/logo/novaco_logo.svg';
import { ReactComponent as GitHubIcon } from 'assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as YouTubeIcon } from 'assets/icons/youtube.svg';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  row-gap: 30px;
  background-color: red;
  position: relative;
  padding: 30px ${MARGIN_SIDE_DESKTOP};
  width: 100%;
  background-color: ${({ theme }) => theme.MAIN};
  border-top: 2px solid ${({ theme }) => theme.MAIN_BORDER};

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    grid-template-columns: 1fr;
    row-gap: 25px;
    padding: 25px ${MARGIN_SIDE_MOBILE};
  }
`;

const LogoContainer = styled.a`
  justify-self: start;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  > * {
    transition: fill ${TRANSITION_TIME}, color ${TRANSITION_TIME};
  }

  &:hover > * {
    fill: ${({ theme }) => theme.MAIN_ITEMS_HOVER};
    color: ${({ theme }) => theme.MAIN_ITEMS_HOVER};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    justify-self: center;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const StyledLogoText = styled.p`
  color: ${({ theme }) => theme.MAIN_ITEMS};
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.semiBold};

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.m};
  }
`;

const StyledCopyright = styled.p`
  justify-self: center;

  color: ${({ theme }) => theme.MAIN_ITEMS};
  font-size: ${fontSettings.sizesDesktop.s};
  font-weight: ${fontSettings.weights.medium};
  text-align: center;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    grid-row: 3;
    font-size: ${fontSettings.sizesMobile.s};
  }
`;

const IconsContainer = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    gap: 10px;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    justify-self: center;
    gap: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const StyledAnchor = styled.a`
  > svg {
    transition: fill ${TRANSITION_TIME};
  }

  &:hover > svg {
    fill: ${({ theme }) => theme.MAIN_ITEMS_HOVER};
  }
`;

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <LogoContainer target="_blank" href="https://novaco.dev" rel="noreferrer">
        <FooterIcon icon={NovacoLogo} />
        <StyledLogoText>novaco.dev</StyledLogoText>
      </LogoContainer>
      <StyledCopyright>Copyright &copy; 2021 Jacek Nowak. All rights reserved.</StyledCopyright>
      <IconsContainer>
        <StyledAnchor target="_blank" href="https://github.com/novacooo" rel="noreferrer">
          <FooterIcon icon={GitHubIcon} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={LinkedInIcon} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={InstagramIcon} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={FacebookIcon} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={TwitterIcon} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={YouTubeIcon} />
        </StyledAnchor>
      </IconsContainer>
    </StyledFooter>
  );
};

export default Footer;
