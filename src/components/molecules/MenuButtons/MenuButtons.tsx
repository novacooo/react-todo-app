import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as DropDownIcon } from 'assets/icons/drop_down.svg';
import { ReactComponent as SortIcon } from 'assets/icons/sort.svg';
import { BP_MOBILE_MAX } from 'app_constants';

export interface IMenuButtonsProps {
  newItem?: boolean;
  filter?: boolean;
  board?: boolean;
  sort?: boolean;
}

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${BP_MOBILE_MAX}) {
    flex-direction: column;
    width: 100%;
  }
`;

const MenuButtons = ({ newItem, filter, board, sort }: IMenuButtonsProps): JSX.Element => (
  <ButtonsContainer>
    {newItem && <Button icon={AddIcon}>New Item</Button>}
    {filter && (
      <Button secondary icon={FilterIcon} iconSize={18}>
        Filter
      </Button>
    )}
    {board && (
      <Button secondary icon={DropDownIcon} iconSize={10}>
        Board
      </Button>
    )}
    {sort && (
      <Button secondary icon={SortIcon} iconSize={18}>
        Shortest
      </Button>
    )}
  </ButtonsContainer>
);

export default MenuButtons;
