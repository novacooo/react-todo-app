import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as DropDownIcon } from 'assets/icons/drop_down.svg';
import { ReactComponent as SortIcon } from 'assets/icons/sort.svg';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';

export interface IMenuButtonsProps {
  newItem?: boolean;
  filter?: boolean;
  board?: boolean;
  sort?: boolean;
  onClickNewItem?: () => void;
  onClickFilter?: () => void;
  onClickBoard?: () => void;
  onClickSort?: () => void;
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    flex-wrap: wrap;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    flex-direction: column;
    width: 100%;
  }
`;

const DesktopButton = styled(Button)`
  @media (max-width: ${BP_MOBILE_MAX}) {
    display: none;
  }
`;

const MenuButtons = ({
  newItem,
  filter,
  board,
  sort,
  onClickNewItem,
  onClickFilter,
  onClickBoard,
  onClickSort,
}: IMenuButtonsProps): JSX.Element => {
  const handleOnClickItem = () => {
    if (onClickNewItem) onClickNewItem();
  };

  const handleOnClickFilter = () => {
    if (onClickFilter) onClickFilter();
  };

  const handleOnClickBoard = () => {
    if (onClickBoard) onClickBoard();
  };

  const handleOnClickSort = () => {
    if (onClickSort) onClickSort();
  };

  return (
    <ButtonsContainer>
      {newItem && (
        <Button onClick={handleOnClickItem} icon={AddIcon}>
          New Item
        </Button>
      )}
      {filter && (
        <DesktopButton onClick={handleOnClickFilter} secondary icon={FilterIcon} iconSize={18}>
          Filter
        </DesktopButton>
      )}
      {board && (
        <DesktopButton onClick={handleOnClickBoard} secondary icon={DropDownIcon} iconSize={10}>
          Board
        </DesktopButton>
      )}
      {sort && (
        <DesktopButton onClick={handleOnClickSort} secondary icon={SortIcon} iconSize={18}>
          Shortest
        </DesktopButton>
      )}
    </ButtonsContainer>
  );
};

export default MenuButtons;
