import React from 'react';
import styled from 'styled-components';
import Header, { activeHeaderStyle } from 'components/atoms/Header/Header';
import { BORDER_RADIUS } from 'app_constants';

interface ICategoryTemplateProps {
  header: string;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;

  &:hover ${Header} {
    ${activeHeaderStyle}
  }
`;

const GridContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  border-radius: ${BORDER_RADIUS};
`;

const CategoryTemplate = ({ header }: ICategoryTemplateProps): JSX.Element => (
  <StyledContainer>
    <Header>{header}</Header>
    <GridContainer />
  </StyledContainer>
);

export default CategoryTemplate;
