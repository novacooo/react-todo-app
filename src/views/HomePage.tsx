import Button from 'components/atoms/Button/Button';
import CategoriesButton from 'components/atoms/CategoryButton/CategoryButton';
import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { fontSettings } from 'theme/fontSettings';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 134px 0;
  width: 100%;

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    padding: 114px 0;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 94px 0;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  height: auto;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.BG_PRIMARY};
  font-size: ${fontSettings.sizesDesktop.s};
  color: ${({ theme }) => theme.MAIN};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.MAIN_TRANSPARENT};
  }

  @media (min-width: ${BP_TABLET_MIN}) and (max-width: ${BP_TABLET_MAX}) {
    padding: 11px 22px;
  }

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 10px 18px;
    font-size: ${fontSettings.sizesMobile.s};
  }
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
          <StyledButton icon={AddIcon} iconSize={12} iconMargin={12} position="left">
            Add Category
          </StyledButton>
        </CategoriesContainer>
      </Container>
    </PageTemplate>
  );
};

export default HomePage;
