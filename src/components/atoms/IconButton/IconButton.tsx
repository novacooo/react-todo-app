import {
  BORDER_RADIUS,
  BP_MOBILE_MAX,
  BP_TABLET_MAX,
  BP_TABLET_MIN,
  TRANSITION_TIME,
} from 'app_constants';
import React from 'react';
import styled, { css } from 'styled-components';

interface IContainer {
  size?: number;
  active?: boolean;
  hoverBackground?: string;
}

interface IIconButton extends IContainer {
  icon: React.FC;
  iconActive?: React.FC;
  iconSize?: number;
  className?: string;
  onClick?: () => void;
}

const Container = styled.button<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${({ size }) => (size ? `${size}px` : '48px')};
  height: ${({ size }) => (size ? `${size}px` : '48px')};
  border: none;
  border-radius: ${({ active }) => (active ? BORDER_RADIUS : '24px')};
  background-color: ${({ active, theme }) => (active ? theme.MAIN_ITEMS : 'transparent')};
  transition: background-color ${TRANSITION_TIME}, border-radius ${TRANSITION_TIME};

  &:hover {
    cursor: pointer;
  }

  ${({ active, theme, hoverBackground }) =>
    !active &&
    css`
      &:hover,
      &:focus {
        background-color: ${hoverBackground ? hoverBackground : theme.BG_HOVER_MAIN};
      }
    `}
`;

const IconButton = ({
  icon,
  size,
  active = false,
  iconActive = icon,
  iconSize = 22,
  hoverBackground,
  className,
  onClick,
}: IIconButton): JSX.Element => {
  const StyledIcon = styled(icon)`
    width: ${iconSize}px;
    height: ${iconSize}px;
    fill: ${({ theme }) => theme.MAIN_ITEMS};

    @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
      width: ${iconSize - 2}px;
      height: ${iconSize - 2}px;
    }

    @media (max-width: ${BP_MOBILE_MAX}) {
      width: ${iconSize - 3}px;
      height: ${iconSize - 3}px;
    }
  `;

  const StyledIconActive = styled(iconActive)`
    width: ${iconSize}px;
    height: ${iconSize}px;
    fill: ${({ theme }) => theme.MAIN};

    @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
      width: ${iconSize - 2}px;
      height: ${iconSize - 2}px;
    }

    @media (max-width: ${BP_MOBILE_MAX}) {
      width: ${iconSize - 2}px;
      height: ${iconSize - 2}px;
    }
  `;

  const handleClick = (): void => {
    if (onClick) onClick();
  };

  return (
    <Container
      className={className}
      onClick={handleClick}
      size={size}
      active={active}
      hoverBackground={hoverBackground}>
      {active ? <StyledIconActive /> : <StyledIcon />}
    </Container>
  );
};

export default IconButton;
