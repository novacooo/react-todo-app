import React from 'react';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { ReactComponent as LoupeIcon } from 'assets/icons/loupe.svg';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as DropDownIcon } from 'assets/icons/drop_down.svg';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';
import Input from 'components/atoms/Input/Input';
import CategoriesBar from 'components/molecules/CategoriesBar/CategoriesBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 134px 0;
  width: 100%;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    padding: 114px 0;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 94px 0;
  }
`;

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

const HomePage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Container>
        <CategoriesBar />
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
      </Container>
    </PageTemplate>
  );
};

export default HomePage;
