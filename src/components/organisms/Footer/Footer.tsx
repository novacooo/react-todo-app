import React from 'react';
import styled from 'styled-components';
import { MARGIN_SIDE_DESKTOP, TRANSITION_TIME } from 'app_constants';
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 30px ${MARGIN_SIDE_DESKTOP};
  width: 100%;
  background-color: ${({ theme }) => theme.MAIN};
  border-top: 2px solid ${({ theme }) => theme.MAIN_BORDER};
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  > * {
    transition: fill ${TRANSITION_TIME}, color ${TRANSITION_TIME};
  }

  &:hover > * {
    fill: ${({ theme }) => theme.MAIN_ITEMS_HOVER};
    color: ${({ theme }) => theme.MAIN_ITEMS_HOVER};
  }
`;

const StyledLogoText = styled.p`
  margin-left: 15px;
  color: ${({ theme }) => theme.MAIN_ITEMS};
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.semiBold};
`;

const StyledCopyright = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.MAIN_ITEMS};
  font-size: ${fontSettings.sizesDesktop.s};
  font-weight: ${fontSettings.weights.medium};
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  * {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
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
        <StyledLogoText>novaco</StyledLogoText>
      </LogoContainer>
      <StyledCopyright>Copyright &copy; 2021 Jacek Nowak. All rights reserved.</StyledCopyright>
      <IconsContainer>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={NovacoLogo} size={28} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://github.com/novacooo" rel="noreferrer">
          <FooterIcon icon={GitHubIcon} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={LinkedInIcon} size={28} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={InstagramIcon} />
        </StyledAnchor>
        <StyledAnchor target="_blank" href="https://novaco.dev" rel="noreferrer">
          <FooterIcon icon={FacebookIcon} size={28} />
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
