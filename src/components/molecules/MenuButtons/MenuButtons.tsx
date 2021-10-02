import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as DropDownIcon } from 'assets/icons/drop_down.svg';
import { ReactComponent as SortIcon } from 'assets/icons/sort.svg';
import { BORDER_RADIUS, BP_MOBILE_MAX, TRANSITION_TIME } from 'app_constants';

interface IStyledIconButtonProps {
  accent?: boolean;
}

export interface IMenuButtonsProps {
  newItem?: boolean;
  filter?: boolean;
  board?: boolean;
  sort?: boolean;
}

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  @media (max-width: ${BP_MOBILE_MAX}) {
    display: none;
  }
`;

// TODO: poprawić to wszystko bo to tylko prototyp

const StyledIconButton = styled(IconButton)<IStyledIconButtonProps>`
  display: none;
  background-color: ${({ theme, accent }) => (accent ? theme.MAIN : theme.BG_SECONDARY)};
  border: 2px solid ${({ theme, accent }) => (accent ? theme.MAIN : theme.BORDER)};
  border-radius: ${BORDER_RADIUS};
  transition: border-color ${TRANSITION_TIME}, background-color ${TRANSITION_TIME};

  &:hover,
  &:focus {
    background-color: ${({ theme, accent }) => (accent ? theme.MAIN_HOVER : theme.BG_SECONDARY)};
    border-color: ${({ theme, accent }) => (accent ? theme.MAIN_HOVER : theme.BORDER_HOVER)};
  }

  > svg {
    fill: ${({ theme, accent }) => (accent ? theme.MAIN_ITEMS : theme.ICON_SECONDARY)};
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    display: flex;
  }
`;

const MenuButtons = ({ newItem, filter, board, sort }: IMenuButtonsProps): JSX.Element => (
  <ButtonsContainer>
    {newItem && (
      <>
        <StyledButton icon={AddIcon}>New Item</StyledButton>
        <StyledIconButton accent size={46} icon={AddIcon} iconSize={18} />
      </>
    )}
    {filter && (
      <>
        <StyledButton secondary icon={FilterIcon} iconSize={18}>
          Filter
        </StyledButton>
        <StyledIconButton size={46} icon={FilterIcon} iconSize={20} />
      </>
    )}
    {board && (
      <>
        <StyledButton secondary icon={DropDownIcon} iconSize={10}>
          Board
        </StyledButton>
        <StyledIconButton size={46} icon={DropDownIcon} iconSize={14} />
      </>
    )}
    {sort && (
      <>
        <StyledButton secondary icon={SortIcon} iconSize={18}>
          Shortest
        </StyledButton>
        <StyledIconButton size={46} icon={SortIcon} iconSize={18} />
      </>
    )}
  </ButtonsContainer>
);

export default MenuButtons;
