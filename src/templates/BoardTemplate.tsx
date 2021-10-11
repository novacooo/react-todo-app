import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from 'app_constants';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { ReactComponent as FolderIcon } from 'assets/icons/folder.svg';
import BoardMenu from 'components/molecules/BoardMenu/BoardMenu';

interface IBoardTemplateProps {
  name: string;
  count: number;
  children?: React.ReactNode | Array<React.ReactNode>;
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
  padding: 25px;
  width: 100%;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  border-radius: ${BORDER_RADIUS};
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const EmptyIcon = styled(FolderIcon)`
  width: 60px;
  height: 60px;
  fill: ${({ theme }) => theme.ICON_SECONDARY};
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

const BoardTemplate = ({ name, count, children }: IBoardTemplateProps): JSX.Element => {
  return (
    <BoardContainer>
      <BoardMenu header={name} count={count} />
      {children ? (
        children
      ) : (
        <EmptyContainer>
          <EmptyIcon />
          <StyledParagraph>This board is empty. Add some notes!</StyledParagraph>
        </EmptyContainer>
      )}
    </BoardContainer>
  );
};

export default BoardTemplate;
