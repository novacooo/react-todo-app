import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Header, { activeHeaderStyle } from 'components/atoms/Header/Header';
import {
  BOARDS_GRID_CLASS,
  BOARDS_GRID_COLUMN_CLASS,
  BP_MOBILE_MAX,
  MARGIN_SIDE_MOBILE,
} from 'app_constants';

interface ICategoryTemplateProps {
  header: string;
  children: React.ReactNode | Array<React.ReactNode>;
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

  @media (max-width: ${BP_MOBILE_MAX}) {
    gap: 30px;
    width: calc(100% + ${MARGIN_SIDE_MOBILE});
  }
`;

const StyledHeader = styled(Header)`
  margin-left: 20px;

  @media (max-width: ${BP_MOBILE_MAX}) {
    margin-left: 12.5px;
  }
`;

const CategoryTemplate = ({ header, children }: ICategoryTemplateProps): JSX.Element => {
  const columnBreakpoints = {
    default: 4,
    1600: 3,
    1200: 2,
    650: 1,
  };

  return (
    <StyledContainer>
      <StyledHeader>{header}</StyledHeader>
      <Masonry
        breakpointCols={columnBreakpoints}
        className={BOARDS_GRID_CLASS}
        columnClassName={BOARDS_GRID_COLUMN_CLASS}>
        {children}
      </Masonry>
    </StyledContainer>
  );
};

export default CategoryTemplate;
