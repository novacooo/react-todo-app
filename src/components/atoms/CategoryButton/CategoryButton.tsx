/* eslint-disable indent */
import {
  BORDER_RADIUS,
  BP_MOBILE_MAX,
  BP_TABLET_MAX,
  BP_TABLET_MIN,
  TRANSITION_TIME,
} from 'app_constants';
import styled from 'styled-components';
import { fontSettings } from 'theme/fontSettings';

interface ICategoriesButtonProps {
  active?: boolean;
}

const CategoryButton = styled.button<ICategoriesButtonProps>`
  padding: 12px 24px;
  background-color: ${({ theme, active }) => (active ? theme.MAIN_TRANSPARENT : theme.BG_PRIMARY)};
  border: none;
  border-radius: ${BORDER_RADIUS};
  font-size: ${fontSettings.sizesDesktop.l};
  font-weight: ${({ active }) =>
    active ? fontSettings.weights.semiBold : fontSettings.weights.medium};
  color: ${({ theme, active }) => (active ? theme.MAIN : theme.TEXT_PRIMARY)};
  white-space: nowrap;
  transition: background-color ${TRANSITION_TIME};

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme, active }) => (active ? theme.MAIN_TRANSPARENT : theme.BG_HOVER)};
  }

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    padding: 11px 22px;
    font-size: ${fontSettings.sizesDesktop.m};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 10px 18px;
    font-size: ${fontSettings.sizesMobile.m};
  }
`;

export default CategoryButton;
