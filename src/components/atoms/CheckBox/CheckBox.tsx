import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BP_MOBILE_MAX, TRANSITION_TIME } from 'app_constants';
import { fontSettings } from 'theme/fontSettings';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';

interface IStyledBoxProps {
  checked?: boolean;
}

interface ICheckBoxProps extends IStyledBoxProps {
  text: string;
  className?: string;
}

const StyledCheckIcon = styled(CheckIcon)`
  fill: ${({ theme }) => theme.TEXT_BUTTON};
  width: 14px;
  height: 14px;
  transform: scale(0);
  transition: transform ${TRANSITION_TIME};

  @media (max-width: ${BP_MOBILE_MAX}) {
    width: 12px;
    height: 12px;
  }
`;

const StyledBox = styled.div<IStyledBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background-color: ${({ checked, theme }) => (checked ? theme.MAIN : theme.BG_SECONDARY)};
  border: 2px solid ${({ checked, theme }) => (checked ? theme.MAIN : theme.BORDER)};
  border-radius: 5px;
  transition: background-color ${TRANSITION_TIME}, border-color ${TRANSITION_TIME};

  ${({ checked }) =>
    checked &&
    css`
      > ${StyledCheckIcon} {
        transform: scale(1);
      }
    `}

  @media (max-width: ${BP_MOBILE_MAX}) {
    width: 20px;
    height: 20px;
  }
`;

const StyledLabel = styled.label<IStyledBoxProps>`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: ${fontSettings.sizesDesktop.m};
  font-weight: ${fontSettings.weights.medium};
  color: ${({ theme }) => theme.TEXT_SECONDARY};
  user-select: none;

  &:hover {
    cursor: pointer;

    ${StyledBox} {
      border-color: ${({ checked, theme }) => (checked ? theme.MAIN : theme.BORDER_HOVER)};
    }
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    gap: 10px;
    font-size: ${fontSettings.sizesMobile.m};
  }
`;

const StyledHiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckBox = ({ text, checked, className }: ICheckBoxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledLabel className={className} checked={isChecked}>
      <StyledHiddenInput onChange={handleInputChange} type="checkbox" checked={isChecked} />
      <StyledBox checked={isChecked}>
        <StyledCheckIcon />
      </StyledBox>
      {text}
    </StyledLabel>
  );
};

export default CheckBox;
