import { TRANSITION_TIME } from 'app_constants';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  color: string;
  size?: number;
  active?: boolean;
  onClick?: () => void;
}

const ColorButton = ({ color, size = 36, active = false, onClick }: IProps): JSX.Element => {
  const Container = styled.div`
    padding: 3px;
    width: ${size}px;
    height: ${size}px;
    background-color: ${({ theme }) => theme.BG_NOTE};
    border: 2px solid ${({ theme }) => (active ? theme.MAIN : theme.BORDER)};
    border-radius: 50%;
    transition: border-color ${TRANSITION_TIME};

    &:hover {
      cursor: pointer;
      border-color: ${({ theme }) => (active ? theme.MAIN : theme.BORDER_HOVER)};
    }
  `;

  const Color = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${color};
    border-radius: 50%;
  `;

  const handleClick = (): void => {
    if (onClick) onClick();
  };

  return (
    <Container onClick={handleClick}>
      <Color />
    </Container>
  );
};

export default ColorButton;
