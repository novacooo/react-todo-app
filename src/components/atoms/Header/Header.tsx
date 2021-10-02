import styled, { css } from 'styled-components';
import { fontSettings } from 'theme/fontSettings';
import { BP_MOBILE_MAX, TRANSITION_TIME } from 'app_constants';

interface IHeaderProps {
  active?: boolean;
}

export const activeHeaderStyle = css`
  color: ${({ theme }) => theme.TEXT_PRIMARY};

  &::before {
    width: calc(100% + 20px);
    background-color: ${({ theme }) => theme.MAIN};
  }
`;

const Header = styled.h1<IHeaderProps>`
  position: relative;
  margin-bottom: 9px;
  font-size: ${fontSettings.sizesDesktop.xxl};
  font-weight: ${fontSettings.weights.semiBold};
  color: ${({ theme, active }) => (active ? theme.TEXT_PRIMARY : theme.TEXT_SECONDARY)};
  transition: color ${TRANSITION_TIME};

  &::before {
    content: '';
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: ${({ active }) => (active ? 'calc(100% + 20px)' : 'calc(100% + 15px)')};
    height: 4px;
    background-color: ${({ theme, active }) => (active ? theme.MAIN : theme.BORDER)};
    transition: width ${TRANSITION_TIME}, background-color ${TRANSITION_TIME};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.xxl};
  }
`;

export default Header;
