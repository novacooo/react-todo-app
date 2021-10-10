import React from 'react';
import styled from 'styled-components';
import SmallHeader from 'components/atoms/SmallHeader/SmallHeader';
import { BORDER_RADIUS } from 'app_constants';

interface IBoardTemplateProps {
  name: string;
}

const BoardContainer = styled.div`
  margin-bottom: 40px;
  padding: 25px;
  width: 100%;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  border-radius: ${BORDER_RADIUS};
`;

const BoardTemplate = ({ name }: IBoardTemplateProps): JSX.Element => (
  <BoardContainer>
    <SmallHeader>{name}</SmallHeader>
  </BoardContainer>
);

export default BoardTemplate;
