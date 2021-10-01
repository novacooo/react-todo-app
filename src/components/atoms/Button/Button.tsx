/* eslint-disable indent */
import React from 'react';
import styled, { css } from 'styled-components';
import { BORDER_RADIUS, BP_MOBILE_MAX, TRANSITION_TIME } from 'app_constants';
import { fontSettings } from 'theme/fontSettings';

interface IStyledButtonProps {
  secondary?: boolean;
}

interface IButtonProps extends IStyledButtonProps {
  children: string;
  icon?: React.FC;
  iconSize?: number;
  iconMargin?: number;
  position?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
}

interface IStyledIconProps extends IStyledButtonProps {
  position: 'left' | 'right';
}

const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  height: 46px;
  background-color: ${({ theme, secondary }) => (secondary ? theme.BG_SECONDARY : theme.MAIN)};
  border: ${({ theme, secondary }) => (secondary ? `2px solid ${theme.BORDER}` : 'none')};
  border-radius: ${BORDER_RADIUS};
  color: ${({ theme, secondary }) => (secondary ? theme.TEXT_SECONDARY : theme.MAIN_ITEMS)};
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.semiBold};
  transition: background-color ${TRANSITION_TIME}, border-color ${TRANSITION_TIME};

  &:hover,
  &:focus {
    cursor: pointer;

    ${({ theme, secondary }) =>
      secondary
        ? css`
            border-color: ${theme.BORDER_HOVER};
          `
        : css`
            background-color: ${({ theme }) => theme.MAIN_HOVER};
          `}
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 0 23px;
    height: 44px;
    font-size: ${fontSettings.sizesMobile.m};
  }
`;

const Button = ({
  children,
  secondary,
  icon,
  iconSize = 14,
  iconMargin = 15,
  position = 'right',
  className,
  onClick,
}: IButtonProps): JSX.Element => {
  const renderIcon = () => {
    if (icon) {
      const StyledIcon = styled(icon)<IStyledIconProps>`
        margin: ${({ position }) =>
          position === 'right' ? `0 0 0 ${iconMargin}px` : `0 ${iconMargin}px 0 0`};
        width: ${iconSize}px;
        height: ${iconSize}px;
        fill: ${({ theme, secondary }) => (secondary ? theme.ICON_SECONDARY : 'currentColor')};
        order: ${({ position }) => (position === 'right' ? 1 : -1)};
      `;

      return <StyledIcon position={position} secondary={secondary} />;
    } else {
      return null;
    }
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <StyledButton className={className} onClick={handleClick} secondary={secondary}>
      {children}
      {renderIcon()}
    </StyledButton>
  );
};

export default Button;
