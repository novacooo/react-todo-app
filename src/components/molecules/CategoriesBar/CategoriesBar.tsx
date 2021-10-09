import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import CategoryButton from 'components/atoms/CategoryButton/CategoryButton';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { fontSettings } from 'theme/fontSettings';
import { BP_MOBILE_MAX, BP_TABLET_MAX, BP_TABLET_MIN, MARGIN_SIDE_MOBILE } from 'app_constants';

interface ICategoriesBarProps {
  showAddButton?: boolean;
}

const BarContainer = styled.div`
  width: 100%;

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 0 ${MARGIN_SIDE_MOBILE};
    width: calc(100% + ${MARGIN_SIDE_MOBILE} + ${MARGIN_SIDE_MOBILE});

    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${BP_MOBILE_MAX}) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin: 0 auto;
    padding-right: ${MARGIN_SIDE_MOBILE};
    width: max-content;
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
  <BarContainer>
    <ButtonsContainer>
      <CategoryButton active>All categories</CategoryButton>
      <CategoryButton>Work</CategoryButton>
      <CategoryButton>School</CategoryButton>
      <CategoryButton>House</CategoryButton>
      {showAddButton && (
        <StyledAddButton icon={AddIcon} iconSize={12} iconMargin={12} position="left">
          Add Category
        </StyledAddButton>
      )}
    </ButtonsContainer>
  </BarContainer>
);

export default CategoriesBar;
