import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import MenuButtons, { IMenuButtonsProps } from '../MenuButtons/MenuButtons';
import { ReactComponent as LoupeIcon } from 'assets/icons/loupe.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';
import Button from 'components/atoms/Button/Button';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;

  @media (max-width: ${BP_TABLET_MAX}) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    gap: 20px;
  }
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: ${BP_TABLET_MAX}) {
    justify-content: center;
  }
`;

const StyledInput = styled(Input)`
  max-width: 500px;

  @media (max-width: ${BP_MOBILE_MAX}) {
    max-width: none;
    height: 44px;
  }
`;

const FilterButton = styled(Button)`
  @media (min-width: ${BP_TABLET_MIN}) {
    display: none;
  }
`;

// TODO: dodac context do tych funkcji itp itd

const MenuBar = ({ newItem, filter, board, sort }: IMenuButtonsProps): JSX.Element => {
  const [isShowedSidebar, setIsShowedSidebar] = useState(false);

  const toggleSidebar = () => setIsShowedSidebar((prevState) => !prevState);

  return (
    <MenuContainer>
      <BarContainer>
        <StyledInput placeholder="Search for notes..." icon={LoupeIcon} />
        <FilterButton secondary icon={FilterIcon} iconSize={18}>
          Filter
        </FilterButton>
      </BarContainer>
      <MenuButtons
        newItem={newItem}
        onClickNewItem={toggleSidebar}
        filter={filter}
        board={board}
        sort={sort}
      />
      <Sidebar active={isShowedSidebar} onClickBg={toggleSidebar} />
    </MenuContainer>
  );
};

export default MenuBar;
