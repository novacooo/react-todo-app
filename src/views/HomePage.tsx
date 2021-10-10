import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';
import CategoriesBar from 'components/molecules/CategoriesBar/CategoriesBar';
import MenuBar from 'components/molecules/MenuBar/MenuBar';
import CategoryTemplate from 'templates/CategoryTemplate';
import BoardTemplate from 'templates/BoardTemplate';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 134px 0 160px 0;
  width: 100%;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    gap: 50px;
    padding: 124px 0 150px 0;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    gap: 30px;
    padding: 94px 0 120px 0;
  }
`;

// TODO: Add template for CategoryTemplate's

const HomePage = (): JSX.Element => (
  <PageTemplate>
    <Container>
      <CategoriesBar showAddButton />
      <MenuBar newItem filter board />
      <CategoryTemplate header="Work">
        <BoardTemplate name="Board name" count={3} />
        <BoardTemplate name="Board name" count={3} />
        <BoardTemplate name="Board name" count={3} />
        <BoardTemplate name="Board name" count={3} />
        <BoardTemplate name="Board name" count={3} />
      </CategoryTemplate>
    </Container>
  </PageTemplate>
);

export default HomePage;
