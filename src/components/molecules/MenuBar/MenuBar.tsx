import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import MenuButtons, { IMenuButtonsProps } from '../MenuButtons/MenuButtons';
import { ReactComponent as LoupeIcon } from 'assets/icons/loupe.svg';

// TODO: Add responsivity for menu

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(Input)`
  max-width: 500px;
`;

const MenuBar = ({ newItem, filter, board, sort }: IMenuButtonsProps): JSX.Element => (
  <MenuContainer>
    <StyledInput placeholder="Search for notes..." icon={LoupeIcon} />
    <MenuButtons newItem={newItem} filter={filter} board={board} sort={sort} />
  </MenuContainer>
);

export default MenuBar;
