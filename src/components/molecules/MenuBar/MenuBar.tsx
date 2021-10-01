import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { ReactComponent as LoupeIcon } from 'assets/icons/loupe.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as DropDownIcon } from 'assets/icons/drop_down.svg';

// TODO: Add responsivity for menu

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledInput = styled(Input)`
  max-width: 500px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuBar = (): JSX.Element => {
  return (
    <MenuContainer>
      <StyledInput placeholder="Search for notes..." icon={LoupeIcon} />
      <ButtonsContainer>
        <Button icon={AddIcon}>New Item</Button>
        <Button secondary icon={FilterIcon} iconSize={18}>
          Filter
        </Button>
        <Button secondary icon={DropDownIcon} iconSize={10}>
          Board
        </Button>
      </ButtonsContainer>
    </MenuContainer>
  );
};

export default MenuBar;
