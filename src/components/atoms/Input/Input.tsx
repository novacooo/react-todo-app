import React, { useState } from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS, BP_MOBILE_MAX, TRANSITION_TIME } from 'app_constants';
import IconButton from '../IconButton/IconButton';
import { fontSettings } from 'theme/fontSettings';
import { ReactComponent as ShowIcon } from 'assets/icons/show.svg';
import { ReactComponent as HideIcon } from 'assets/icons/hide.svg';
import { useSelector } from 'react-redux';
import { StateType } from 'state';

type InputType = 'text' | 'password';

interface IInputProps {
  placeholder: string;
  type?: InputType;
  icon?: React.FC;
  iconSize?: number;
  className?: string;
}

interface IStyledInputProps {
  paddingRight: number;
  paddingLeft: number;
}

interface IStyledIconProps {
  iconSize?: number;
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  border: 2px solid ${({ theme }) => theme.BORDER};
  border-radius: ${BORDER_RADIUS};
  transition: border-color ${TRANSITION_TIME};

  &:focus-within {
    border-color: ${({ theme }) => theme.BORDER_HOVER};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    height: 48px;
  }
`;

const StyledIconContainer = styled.div`
  user-select: none;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
`;

const StyledInput = styled.input<IStyledInputProps>`
  padding: ${({ paddingLeft, paddingRight }) => `0 ${paddingRight}px 0 ${paddingLeft}px`};
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.medium};
  color: ${({ theme }) => theme.TEXT_PRIMARY};
  text-overflow: ellipsis;

  &::placeholder {
    color: ${({ theme }) => theme.TEXT_SECONDARY};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.m};
  }
`;

const StyledPasswordButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const Input = ({
  placeholder,
  type = 'text',
  icon,
  iconSize = 18,
  className,
}: IInputProps): JSX.Element => {
  const [actualType, setActualType] = useState<InputType>(type);
  const theme = useSelector((state: StateType) => state.theme);

  const paddingLeft = 20 + (icon ? 33 : 0);
  const paddingRight = type === 'password' ? 55 : 20;

  const renderIcon = () => {
    if (icon) {
      const StyledIcon = styled(icon)<IStyledIconProps>`
        width: ${iconSize}px;
        height: ${iconSize}px;
        fill: ${({ theme }) => theme.ICON_SECONDARY};
      `;

      return (
        <StyledIconContainer>
          <StyledIcon />
        </StyledIconContainer>
      );
    } else {
      return null;
    }
  };

  const togglePassword = () => setActualType(actualType === 'password' ? 'text' : 'password');

  return (
    <StyledContainer className={className}>
      {renderIcon()}
      <StyledInput
        type={actualType}
        placeholder={placeholder}
        paddingRight={paddingRight}
        paddingLeft={paddingLeft}
      />
      {type === 'password' && (
        <StyledPasswordButton
          onClick={togglePassword}
          size={40}
          icon={actualType === 'password' ? ShowIcon : HideIcon}
          iconSize={20}
          iconColor={theme.ICON_SECONDARY}
          hoverBackground={theme.BG_HOVER}
        />
      )}
    </StyledContainer>
  );
};

export default Input;
