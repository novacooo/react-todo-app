import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import CategoryButton from 'components/atoms/CategoryButton/CategoryButton';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { fontSettings } from 'theme/fontSettings';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN } from 'app_constants';

interface ICategoriesBarProps {
  showAddButton?: boolean;
}

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: ${BP_MOBILE_MAX}) {
    justify-content: flex-start;
    padding: 0 25px;
    width: 100vw;

    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledAddButton = styled(Button)`
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

const CategoriesBar = ({ showAddButton }: ICategoriesBarProps): JSX.Element => (
  <CategoriesContainer>
    <CategoryButton active>All categories</CategoryButton>
    <CategoryButton>Work</CategoryButton>
    <CategoryButton>School</CategoryButton>
    <CategoryButton>House</CategoryButton>
    {showAddButton && (
      <StyledAddButton icon={AddIcon} iconSize={12} iconMargin={12} position="left">
        Add Category
      </StyledAddButton>
    )}
  </CategoriesContainer>
);

export default CategoriesBar;
