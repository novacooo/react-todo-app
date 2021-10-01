/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS, BP_MOBILE_MAX, TRANSITION_TIME } from 'app_constants';
import { fontSettings } from 'theme/fontSettings';

interface IButtonProps {
  children: string;
  icon?: React.FC;
  iconSize?: number;
  iconMargin?: number;
  position?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  height: 46px;
  background-color: ${({ theme }) => theme.MAIN};
  border: none;
  border-radius: ${BORDER_RADIUS};
  color: ${({ theme }) => theme.MAIN_ITEMS};
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.semiBold};
  transition: background-color ${TRANSITION_TIME};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${({ theme }) => theme.MAIN_HOVER};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 0 23px;
    height: 44px;
    font-size: ${fontSettings.sizesMobile.m};
  }
`;

const Button = ({
  children,
  icon,
  iconSize = 14,
  iconMargin = 15,
  position = 'right',
  className,
  onClick,
}: IButtonProps): JSX.Element => {
  const renderIcon = () => {
    if (icon) {
      interface IStyledIconProps {
        position: 'left' | 'right';
      }

      const StyledIcon = styled(icon)<IStyledIconProps>`
        margin: ${({ position }) =>
          position === 'right' ? `0 0 0 ${iconMargin}px` : `0 ${iconMargin}px 0 0`};
        width: ${iconSize}px;
        height: ${iconSize}px;
        fill: currentColor;
        order: ${({ position }) => (position === 'right' ? 1 : -1)};
      `;

      return <StyledIcon position={position} />;
    } else {
      return null;
    }
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <StyledButton className={className} onClick={handleClick}>
      {children}
      {renderIcon()}
    </StyledButton>
  );
};

export default Button;
