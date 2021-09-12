import { BORDER_RADIUS } from 'app_constants';
import React from 'react';
import styled, { css } from 'styled-components';

interface IContainer {
  active?: boolean;
}

interface IIconButton extends IContainer {
  icon: React.FC;
  iconActive?: React.FC;
}

const Container = styled.button<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: ${({ active }) => (active ? BORDER_RADIUS : '24px')};
  background-color: ${({ active, theme }) => (active ? theme.MAIN_ITEMS : 'transparent')};
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
  }

  ${({ active, theme }) =>
    !active &&
    css`
      &:hover {
        background-color: ${theme.BG_HOVER};
      }
    `}
`;

const IconButton = ({ icon, active = false, iconActive = icon }: IIconButton): JSX.Element => {
  const StyledIcon = styled(icon)`
    width: 22px;
    height: 22px;
    fill: ${({ theme }) => theme.MAIN_ITEMS};
  `;

  const StyledIconActive = styled(iconActive)`
    width: 22px;
    height: 22px;
    fill: ${({ theme }) => theme.MAIN};
  `;

  return <Container active={active}>{active ? <StyledIconActive /> : <StyledIcon />}</Container>;
};

export default IconButton;
