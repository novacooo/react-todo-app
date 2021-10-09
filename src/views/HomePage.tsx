import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';
import CategoriesBar from 'components/molecules/CategoriesBar/CategoriesBar';
import MenuBar from 'components/molecules/MenuBar/MenuBar';
import CategoryTemplate from 'templates/CategoryTemplate';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 134px 0 200px 0;
  width: 100%;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    gap: 50px;
    padding: 124px 0;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    gap: 30px;
    padding: 94px 0;
  }
`;

const HomePage = (): JSX.Element => (
  <PageTemplate>
    <Container>
      <CategoriesBar showAddButton />
      <MenuBar newItem filter board sort />
      <CategoryTemplate header="Work" />
    </Container>
  </PageTemplate>
);

export default HomePage;
