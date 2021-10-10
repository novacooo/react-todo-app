import React from 'react';
import styled from 'styled-components';
import SmallHeader from 'components/atoms/SmallHeader/SmallHeader';
import { BORDER_RADIUS } from 'app_constants';
import CountBadge from 'components/atoms/CountBadge/CountBadge';

interface IBoardTemplateProps {
  name: string;
  count: number;
}

const BoardContainer = styled.div`
  margin-bottom: 40px;
  padding: 25px;
  width: 100%;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  border-radius: ${BORDER_RADIUS};
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BoardTemplate = ({ name, count }: IBoardTemplateProps): JSX.Element => (
  <BoardContainer>
    <MenuContainer>
      <NameContainer>
        <SmallHeader>{name}</SmallHeader>
        <CountBadge count={count} />
      </NameContainer>
    </MenuContainer>
  </BoardContainer>
);

export default BoardTemplate;
