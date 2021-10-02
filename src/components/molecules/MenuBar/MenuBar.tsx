import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import MenuButtons, { IMenuButtonsProps } from '../MenuButtons/MenuButtons';
import { ReactComponent as LoupeIcon } from 'assets/icons/loupe.svg';
import { BP_MOBILE_MAX } from 'app_constants';

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;

  @media (max-width: ${BP_MOBILE_MAX}) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

const StyledInput = styled(Input)`
  max-width: 500px;

  @media (max-width: ${BP_MOBILE_MAX}) {
    max-width: none;
  }
`;

const MenuBar = ({ newItem, filter, board, sort }: IMenuButtonsProps): JSX.Element => (
  <MenuContainer>
    <StyledInput placeholder="Search for notes..." icon={LoupeIcon} />
    <MenuButtons newItem={newItem} filter={filter} board={board} sort={sort} />
  </MenuContainer>
);

export default MenuBar;
