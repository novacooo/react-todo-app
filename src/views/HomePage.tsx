import CategoriesButton from 'components/atoms/CategoryButton/CategoryButton';
import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 134px 0;
  width: 100%;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const HomePage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Container>
        <CategoriesContainer>
          <CategoriesButton active>All categories</CategoriesButton>
          <CategoriesButton>Work</CategoriesButton>
          <CategoriesButton>School</CategoriesButton>
          <CategoriesButton>House</CategoriesButton>
        </CategoriesContainer>
      </Container>
    </PageTemplate>
  );
};

export default HomePage;
