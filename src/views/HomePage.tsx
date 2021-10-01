import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';
import CategoriesBar from 'components/molecules/CategoriesBar/CategoriesBar';
import MenuBar from 'components/molecules/MenuBar/MenuBar';

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

const HomePage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Container>
        <CategoriesBar showAddButton />
        <MenuBar newItem filter board />
      </Container>
    </PageTemplate>
  );
};

export default HomePage;
