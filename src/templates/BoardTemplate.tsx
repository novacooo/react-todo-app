import React from 'react';
import styled from 'styled-components';
import SmallHeader from 'components/atoms/SmallHeader/SmallHeader';
import { BORDER_RADIUS } from 'app_constants';
import CountBadge from 'components/atoms/CountBadge/CountBadge';
import IconButton from 'components/atoms/IconButton/IconButton';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as FolderIcon } from 'assets/icons/folder.svg';
import { ReactComponent as DotsIcon } from 'assets/icons/dots.svg';
import { useSelector } from 'react-redux';
import { StateType } from 'state';

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

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`;

const StyledSmallHeader = styled(SmallHeader)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  gap: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledIconButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.BG_BADGE};
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
  const theme = useSelector((state: StateType) => state.theme);

  return (
    <BoardContainer>
      <MenuContainer>
        <HeaderContainer>
          <StyledSmallHeader>{name}</StyledSmallHeader>
        </HeaderContainer>
        <ItemsContainer>
          <CountBadge count={count} />
          <ButtonsContainer>
            <StyledIconButton
              size={34}
              icon={AddIcon}
              iconSize={12}
              iconColor={theme.ICON_PRIMARY}
              scaleIcon={false}
              hoverBackground={theme.BG_BADGE_HOVER}
            />
            <StyledIconButton
              size={34}
              icon={DotsIcon}
              iconSize={14}
              iconColor={theme.ICON_PRIMARY}
              scaleIcon={false}
              hoverBackground={theme.BG_BADGE_HOVER}
            />
          </ButtonsContainer>
        </ItemsContainer>
      </MenuContainer>
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
