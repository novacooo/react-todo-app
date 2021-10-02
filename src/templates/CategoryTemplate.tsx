import React from 'react';
import styled, { css } from 'styled-components';
import Masonry from 'react-masonry-css';
import Header, { activeHeaderStyle } from 'components/atoms/Header/Header';
import { BOARDS_GRID_CLASS, BOARDS_GRID_COLUMN_CLASS, BORDER_RADIUS } from 'app_constants';
import { fontSettings } from 'theme/fontSettings';

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

const itemStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  border-radius: ${BORDER_RADIUS};
  font-size: ${fontSettings.sizesMobile.xxl};
  color: ${({ theme }) => theme.TEXT_SECONDARY};
`;

const Item1 = styled.div`
  ${itemStyle}
  height: 400px;
`;
const Item2 = styled.div`
  ${itemStyle}
  height: 250px;
`;
const Item3 = styled.div`
  ${itemStyle}
  height: 350px;
`;
const Item4 = styled.div`
  ${itemStyle}
  height: 300px;
`;
const Item5 = styled.div`
  ${itemStyle}
  height: 350px;
`;
const Item6 = styled.div`
  ${itemStyle}
  height: 450px;
`;
const Item7 = styled.div`
  ${itemStyle}
  height: 450px;
`;
const Item8 = styled.div`
  ${itemStyle}
  height: 450px;
`;
const Item9 = styled.div`
  ${itemStyle}
  height: 350px;
`;

const CategoryTemplate = ({ header }: ICategoryTemplateProps): JSX.Element => {
  const columnBreakpoints = {
    default: 4,
    1600: 3,
    1200: 2,
    650: 1,
  };

  return (
    <StyledContainer>
      <Header>{header}</Header>
      <Masonry
        breakpointCols={columnBreakpoints}
        className={BOARDS_GRID_CLASS}
        columnClassName={BOARDS_GRID_COLUMN_CLASS}>
        <Item1>1</Item1>
        <Item2>2</Item2>
        <Item3>3</Item3>
        <Item4>4</Item4>
        <Item5>5</Item5>
        <Item6>6</Item6>
        <Item7>7</Item7>
        <Item8>8</Item8>
        <Item9>9</Item9>
      </Masonry>
    </StyledContainer>
  );
};

export default CategoryTemplate;
