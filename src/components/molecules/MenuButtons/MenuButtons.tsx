import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as DropDownIcon } from 'assets/icons/drop_down.svg';

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuButtons = (): JSX.Element => (
  <ButtonsContainer>
    <Button icon={AddIcon}>New Item</Button>
    <Button secondary icon={FilterIcon} iconSize={18}>
      Filter
    </Button>
    <Button secondary icon={DropDownIcon} iconSize={10}>
      Board
    </Button>
  </ButtonsContainer>
);

export default MenuButtons;
