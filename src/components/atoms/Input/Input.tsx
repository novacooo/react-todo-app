import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS, TRANSITION_TIME } from 'app_constants';
import { fontSettings } from 'theme/fontSettings';

interface IInputProps {
  placeholder: string;
  icon?: React.FC;
  iconSize?: number;
  className?: string;
}

interface IStyledInputProps {
  paddingLeft: number;
}

interface IStyledIconProps {
  iconSize?: number;
}

const StyledContainer = styled.div`
  position: relative;
  height: 50px;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  border: 2px solid ${({ theme }) => theme.BORDER};
  border-radius: ${BORDER_RADIUS};
  transition: border-color ${TRANSITION_TIME};

  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.BORDER_HOVER};
  }
`;

const StyledInput = styled.input<IStyledInputProps>`
  padding: 0 20px 0 ${({ paddingLeft }) => paddingLeft}px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.medium};
  color: ${({ theme }) => theme.TEXT_PRIMARY};

  &::placeholder {
    color: ${({ theme }) => theme.TEXT_SECONDARY};
  }
`;

const Input = ({ placeholder, icon, iconSize = 20, className }: IInputProps): JSX.Element => {
  const paddingLeft = 20 + (icon ? iconSize + 15 : 0);

  const renderIcon = () => {
    if (icon) {
      const StyledIcon = styled(icon)<IStyledIconProps>`
        user-select: none;
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        width: ${iconSize}px;
        height: ${iconSize}px;
        fill: ${({ theme }) => theme.ICON_SECONDARY};
      `;

      return <StyledIcon />;
    } else {
      return null;
    }
  };

  return (
    <StyledContainer className={className}>
      {renderIcon()}
      <StyledInput type="text" placeholder={placeholder} paddingLeft={paddingLeft} />
    </StyledContainer>
  );
};

export default Input;
