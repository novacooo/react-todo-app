import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BORDER_RADIUS, BP_MOBILE_MAX } from 'app_constants';
import { StateType } from 'state';
import IconButton from 'components/atoms/IconButton/IconButton';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import SmallHeader from 'components/atoms/SmallHeader/SmallHeader';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { ReactComponent as FlagIcon } from 'assets/icons/flag.svg';
import { fontSettings } from 'theme/fontSettings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 25px 20px 25px;
  background-color: ${({ theme }) => theme.BG_NOTE};
  border-radius: ${BORDER_RADIUS};
  box-shadow: ${({ theme }) => theme.NOTE_SHADOW};

  @media (max-width: ${BP_MOBILE_MAX}) {
    padding: 20px 17px 12px 17px;
  }
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

const TimeText = styled.p`
  font-size: ${fontSettings.sizesDesktop.s};
  font-weight: ${fontSettings.weights.medium};
  color: ${({ theme }) => theme.TEXT_SECONDARY};

  @media (max-width: ${BP_MOBILE_MAX}) {
    font-size: ${fontSettings.sizesMobile.s};
  }
`;

const Note = (): JSX.Element => {
  const theme = useSelector((state: StateType) => state.theme);

  return (
    <Container>
      <TextsContainer>
        <SmallHeader>Lorem ipsum</SmallHeader>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu urna accumsan, fringilla
          leo eget, pharetra massa. Sed porta tempus eleifend.
        </Paragraph>
      </TextsContainer>
      <MenuContainer>
        <ButtonsContainer>
          <IconButton
            size={34}
            icon={CheckIcon}
            iconSize={18}
            iconColor={theme.ICON_SECONDARY}
            hoverBackground={theme.BG_HOVER}
          />
          <IconButton
            size={34}
            icon={TrashIcon}
            iconSize={17}
            iconColor={theme.ICON_SECONDARY}
            hoverBackground={theme.BG_HOVER}
          />
          <IconButton
            size={34}
            icon={FlagIcon}
            iconSize={16}
            iconColor={theme.ICON_SECONDARY}
            hoverBackground={theme.BG_HOVER}
          />
        </ButtonsContainer>
        <TimeText>7 days</TimeText>
      </MenuContainer>
    </Container>
  );
};

export default Note;
