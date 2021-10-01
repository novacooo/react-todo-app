import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import MenuButtons from '../MenuButtons/MenuButtons';
import { ReactComponent as LoupeIcon } from 'assets/icons/loupe.svg';

// TODO: Add responsivity for menu

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledInput = styled(Input)`
  max-width: 500px;
`;

const MenuBar = (): JSX.Element => (
  <MenuContainer>
    <StyledInput placeholder="Search for notes..." icon={LoupeIcon} />
    <MenuButtons />
  </MenuContainer>
);

export default MenuBar;
