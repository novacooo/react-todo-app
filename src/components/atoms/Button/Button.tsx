import { BORDER_RADIUS } from 'app_constants';
import React from 'react';
import styled from 'styled-components';
import { fontSettings } from 'theme/fontSettings';

interface IButtonProps {
  children: string;
  icon?: React.FC;
  iconSize?: number;
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

  &:hover {
    cursor: pointer;
  }
`;

const Button = ({
  children,
  icon,
  iconSize = 14,
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
        margin: ${({ position }) => (position === 'right' ? '0 0 0 15px' : '0 15px 0 0')};
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
