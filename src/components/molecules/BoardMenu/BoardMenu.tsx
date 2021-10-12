import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { StateType } from 'state';
import SmallHeader from 'components/atoms/SmallHeader/SmallHeader';
import CountBadge from 'components/atoms/CountBadge/CountBadge';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as AddIcon } from 'assets/icons/add.svg';
import { ReactComponent as DotsIcon } from 'assets/icons/dots.svg';
import { BP_MOBILE_MAX } from 'app_constants';

interface IBoardMenuProps {
  header: string;
  count: number;
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 0 12.5px;
  }
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

const BoardMenu = ({ header, count }: IBoardMenuProps): JSX.Element => {
  const theme = useSelector((state: StateType) => state.theme);

  return (
    <MenuContainer>
      <HeaderContainer>
        <StyledSmallHeader>{header}</StyledSmallHeader>
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
  );
};

export default BoardMenu;
