import { BORDER_RADIUS, BP_MOBILE_MAX, TRANSITION_TIME } from 'app_constants';
import styled from 'styled-components';
import { fontSettings } from 'theme/fontSettings';

interface ICategoriesButtonProps {
  active?: boolean;
}

const CategoriesButton = styled.button<ICategoriesButtonProps>`
  padding: 12px 24px;
  background-color: ${({ theme, active }) => (active ? theme.MAIN_TRANSPARENT : theme.BG_PRIMARY)};
  border: none;
  border-radius: ${BORDER_RADIUS};
  font-size: ${fontSettings.sizesDesktop.l};
  font-weight: ${({ active }) =>
    active ? fontSettings.weights.semiBold : fontSettings.weights.medium};
  color: ${({ theme, active }) => (active ? theme.MAIN : theme.TEXT_PRIMARY)};
  transition: background-color ${TRANSITION_TIME};

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme, active }) => (active ? theme.MAIN_TRANSPARENT : theme.BG_HOVER)};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.l};
  }
`;

export default CategoriesButton;
